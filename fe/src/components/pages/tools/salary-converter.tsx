import React, { useState, useMemo } from "react";
import { Calculator, Info, AlertCircle, ArrowLeftRight, BadgeInfo } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/shared/Navbar";

// =================== TYPES ====================
type YearKey = "2024" | "2025";
type RegionKey = "I" | "II" | "III" | "IV";
type TabKey = "grossToNet" | "netToGross";
type InsuranceType = "official" | "region" | "cap";

interface ConfigType {
  baseSalary: number;
  personalDeduction: number;
  dependentDeduction: number;
  minSalaries: Record<RegionKey, number>;
}

interface CalcResult {
  gross: number;
  net: number;
  socialInsurance: number;
  healthInsurance: number;
  unemploymentInsurance: number;
  tax: number;
  insuranceBase: number;
  taxableIncome: number;
}

// ================== DATA CONFIGS ===================
const configList: Record<YearKey, ConfigType> = {
  "2024": {
    baseSalary: 1800000,
    personalDeduction: 11000000,
    dependentDeduction: 4400000,
    minSalaries: {
      I: 4680000,
      II: 4160000,
      III: 3640000,
      IV: 3250000,
    },
  },
  "2025": {
    baseSalary: 2340000,
    personalDeduction: 11000000,
    dependentDeduction: 4400000,
    minSalaries: {
      I: 4960000,
      II: 4410000,
      III: 3860000,
      IV: 3450000,
    },
  },
} as const;

const insuranceRates = {
  social: 0.08,
  health: 0.015,
  unemployment: 0.01,
} as const;

const taxRates = [
  { min: 0, max: 5000000, rate: 0.05 },
  { min: 5000000, max: 10000000, rate: 0.1 },
  { min: 10000000, max: 18000000, rate: 0.15 },
  { min: 18000000, max: 32000000, rate: 0.2 },
  { min: 32000000, max: 52000000, rate: 0.25 },
  { min: 52000000, max: 80000000, rate: 0.3 },
  { min: 80000000, max: Infinity, rate: 0.35 },
] as const;

// ================= HELPER =========================
function formatCurrency(val: number | undefined | null): string {
  if (!val || isNaN(val)) return "0 ₫";
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(Math.round(val));
}

// ============== CALCULATION CORE ==================
function calcGrossToNet({
  salary,
  dependents,
  insuranceSalary,
  otherIncome,
  region,
  config,
}: {
  salary: number;
  dependents: number;
  insuranceSalary: InsuranceType;
  otherIncome: number;
  region: RegionKey;
  config: ConfigType;
}): CalcResult {
  const totalIncome = salary + (otherIncome || 0);

  let insuranceBase = salary;
  if (insuranceSalary === "region") insuranceBase = config.minSalaries[region];
  if (insuranceSalary === "cap") insuranceBase = Math.min(salary, 20 * config.baseSalary);

  const socialInsurance = insuranceBase * insuranceRates.social;
  const healthInsurance = insuranceBase * insuranceRates.health;
  const unemploymentInsurance = insuranceBase * insuranceRates.unemployment;
  const totalInsurance = socialInsurance + healthInsurance + unemploymentInsurance;

  const taxableIncome =
    totalIncome - totalInsurance - config.personalDeduction - dependents * config.dependentDeduction;

  let tax = 0;
  if (taxableIncome > 0) {
    for (const br of taxRates) {
      if (taxableIncome > br.min) {
        const upper = Math.min(taxableIncome, br.max);
        tax += (upper - br.min) * br.rate;
      }
    }
  }
  const net = totalIncome - totalInsurance - tax;

  return {
    gross: totalIncome,
    net,
    socialInsurance,
    healthInsurance,
    unemploymentInsurance,
    tax,
    insuranceBase,
    taxableIncome,
  };
}

// Giải Net to Gross thông qua lặp, đảm bảo đúng precision
function calcNetToGross({
  netWant,
  dependents,
  insuranceSalary,
  otherIncome,
  region,
  config,
}: {
  netWant: number;
  dependents: number;
  insuranceSalary: InsuranceType;
  otherIncome: number;
  region: RegionKey;
  config: ConfigType;
}): CalcResult & { gross: number } {
  let gross = netWant;
  let iterations = 0;
  const precision = 1000;
  const maxIter = 100;
  let lastRes: CalcResult = calcGrossToNet({
    salary: gross,
    dependents,
    insuranceSalary,
    otherIncome,
    region,
    config,
  });
  while (iterations < maxIter) {
    lastRes = calcGrossToNet({
      salary: gross,
      dependents,
      insuranceSalary,
      otherIncome,
      region,
      config,
    });
    const delta = lastRes.net - netWant;
    if (Math.abs(delta) < precision) break;
    gross += -delta * 0.7;
    iterations++;
  }
  return {
    ...lastRes,
    gross,
  };
}

// =============== MAIN UI ==========================
const SalaryCalculator: React.FC = () => {
  // --- STATES, all typed ---
  const [activeTab, setActiveTab] = useState<TabKey>("grossToNet");
  const [salary, setSalary] = useState<string>("");
  const [dependents, setDependents] = useState<string>("0");
  const [insuranceSalary, setInsuranceSalary] = useState<InsuranceType>("official");
  const [otherIncome, setOtherIncome] = useState<string>("");
  const [region, setRegion] = useState<RegionKey>("I");
  const [effectiveDate, setEffectiveDate] = useState<YearKey>("2025");
  const [result, setResult] = useState<CalcResult | (CalcResult & { gross: number }) | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Memo config typed theo năm
  const config = useMemo(() => configList[effectiveDate], [effectiveDate]);

  // Input parsing
  const salaryNum = parseInt(salary.replace(/[^0-9]/g, "") || "0", 10);
  const dependentsNum = Math.max(0, parseInt(dependents.replace(/[^0-9]/g, "") || "0", 10));
  const otherIncomeNum = parseInt(otherIncome.replace(/[^0-9]/g, "") || "0", 10);

  // MAIN calculating handler
  const handleCalculate = () => {
    setErrorMsg("");
    if (salaryNum <= 0) {
      setResult(null);
      setErrorMsg("Vui lòng nhập mức lương hợp lệ.");
      return;
    }
    if (!(region in config.minSalaries)) {
      setResult(null);
      setErrorMsg("Vui lòng chọn vùng lương tối thiểu.");
      return;
    }
    if (dependentsNum < 0) {
      setResult(null);
      setErrorMsg("Số người phụ thuộc không được nhỏ hơn 0.");
      return;
    }
    if (activeTab === "grossToNet") {
      setResult(
        calcGrossToNet({
          salary: salaryNum,
          dependents: dependentsNum,
          insuranceSalary,
          otherIncome: otherIncomeNum,
          region,
          config,
        })
      );
    } else {
      setResult(
        calcNetToGross({
          netWant: salaryNum,
          dependents: dependentsNum,
          insuranceSalary,
          otherIncome: otherIncomeNum,
          region,
          config,
        })
      );
    }
  };

  // Khi đổi tab, react-select Tabs muốn onValueChange kiểu: (value: string) => void
  // Nên phải check/ép kiểu chặt
  const onChangeTab = (tab: string) => {
    if (tab === "grossToNet" || tab === "netToGross") {
      setActiveTab(tab);
      setResult(null);
      setErrorMsg("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="flex items-center gap-5 mb-12">
          <Calculator className="w-10 h-10 text-indigo-700 flex-shrink-0" />
          <h1 className="text-4xl font-extrabold text-gray-900">
            Công cụ tính lương{" "}
            <span className="text-indigo-700">Gross - Net</span>
          </h1>
          <Badge variant="outline" className="border-indigo-600 text-indigo-600 ml-auto text-base py-1 px-3">
            {effectiveDate === "2025" ? "Chuẩn 2025" : "Chuẩn 2024"}
          </Badge>
        </header>

        {/* Announcement */}
        <section className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-12 max-w-3xl mx-auto flex items-start gap-4">
          <BadgeInfo className="w-6 h-6 text-indigo-600 mt-0.5 flex-shrink-0" />
          <div>
            <h2 className="font-semibold text-indigo-800 text-lg mb-1">Áp dụng quy định mới nhất</h2>
            <p className="text-indigo-700 text-sm max-w-xl">
              {effectiveDate === "2024"
                ? "Từ 01/07/2024 - 30/06/2025 (Nghị định số 73/2024/NĐ-CP)"
                : "Từ 01/07/2025 (Nghị định 128/2025/NĐ-CP, cập nhật mức lương cơ sở và tối thiểu vùng)"}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Calculator */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg rounded-2xl border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-800">
                  <ArrowLeftRight className="w-5 h-5 text-indigo-600" />
                  {activeTab === "grossToNet"
                    ? "Chuyển đổi lương Gross sang Net"
                    : "Chuyển đổi lương Net sang Gross"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-7">
                <Tabs value={activeTab} onValueChange={onChangeTab} className="">
                  <TabsList className="grid grid-cols-2 w-full">
                    <TabsTrigger value="grossToNet" className="py-3 px-0 text-center text-base font-medium ">Gross → Net</TabsTrigger>
                    <TabsTrigger value="netToGross" className="py-3 px-0 text-center text-base font-medium">Net → Gross</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="space-y-6 max-w-2xl">
                  {/* Salary Input */}
                  <div>
                    <Label className="block mb-2 font-semibold text-gray-900 text-base">
                      {activeTab === "grossToNet" ? "Lương Gross" : "Lương Net"} (VNĐ)
                    </Label>
                    <Input
                      type="number"
                      value={salary}
                      placeholder="VD: 15,000,000"
                      onChange={(e) => setSalary(e.target.value)}
                      className="bg-white rounded-xl border border-gray-300 shadow-sm focus:ring-indigo-400 focus:border-indigo-500 transition px-4 py-3 text-lg"
                    />
                  </div>

                  {/* Dependents & Insurance */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <Label className="block mb-2 font-semibold text-gray-900 text-base">Số người phụ thuộc</Label>
                      <Input
                        type="number"
                        value={dependents}
                        min={0}
                        onChange={(e) => setDependents(e.target.value)}
                        className="bg-white rounded-xl border border-gray-300 shadow-sm focus:ring-indigo-400 focus:border-indigo-500 transition px-4 py-3 text-lg"
                      />
                    </div>
                    <div>
                      <Label className="block mb-2 font-semibold text-gray-900 text-base">Mức lương đóng bảo hiểm</Label>
                      <Select
                        value={insuranceSalary}
                        onValueChange={(v) => setInsuranceSalary(v as InsuranceType)}
                        
                      >
                        <SelectTrigger className="px-4 py-3 text-lg" />
                        <SelectContent className="bg-white rounded-xl border border-gray-300 shadow-sm">
                          <SelectItem value="official">Trên lương chính thức</SelectItem>
                          <SelectItem value="region">Theo lương tối thiểu vùng</SelectItem>
                          <SelectItem value="cap">Mức trần (20 lương cơ sở)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Other Income */}
                  <div>
                    <Label className="block mb-2 font-semibold text-gray-900 text-base">Thu nhập khác (VNĐ)</Label>
                    <Input
                      type="number"
                      value={otherIncome}
                      placeholder="Có thể bỏ qua"
                      onChange={(e) => setOtherIncome(e.target.value)}
                      className="bg-white rounded-xl border border-gray-300 shadow-sm focus:ring-indigo-400 focus:border-indigo-500 transition px-4 py-3 text-lg"
                    />
                  </div>

                  {/* Region & Effective Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <Label className="block mb-2 font-semibold text-gray-900 text-base">Vùng lương tối thiểu</Label>
                      <Select
                        value={region}
                        onValueChange={(v) => setRegion(v as RegionKey)}
                        
                      >
                        <SelectTrigger className="px-4 py-3 text-lg" />
                        <SelectContent className="bg-white rounded-xl border border-gray-300 shadow-sm">
                          <SelectItem value="I">
                            Vùng I: {formatCurrency(config.minSalaries.I)}
                          </SelectItem>
                          <SelectItem value="II">
                            Vùng II: {formatCurrency(config.minSalaries.II)}
                          </SelectItem>
                          <SelectItem value="III">
                            Vùng III: {formatCurrency(config.minSalaries.III)}
                          </SelectItem>
                          <SelectItem value="IV">
                            Vùng IV: {formatCurrency(config.minSalaries.IV)}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="block mb-2 font-semibold text-gray-900 text-base">Thời điểm áp dụng</Label>
                      <Select
                        value={effectiveDate}
                        onValueChange={(v) => {
                          setEffectiveDate(v as YearKey);
                          setResult(null);
                        }}
                        
                      >
                        <SelectTrigger className="px-4 py-3 text-lg" />
                        <SelectContent className="bg-white rounded-xl border border-gray-300 shadow-sm">
                          <SelectItem value="2024">Từ 01/07/2024 - 30/06/2025</SelectItem>
                          <SelectItem value="2025">Từ 01/07/2025 (Mới nhất)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                {errorMsg && <p className="mt-3 text-sm text-red-600 font-semibold">{errorMsg}</p>}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleCalculate}
                  className="w-full py-4 text-lg font-semibold shadow-md shadow-indigo-400 hover:shadow-indigo-600 transition"
                >
                  Tính lương {activeTab === "grossToNet" ? "Net" : "Gross"}
                </Button>
              </CardFooter>
            </Card>

            {/* Explanation */}
            {result && (
              <Card className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">Giải thích cách tính</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-gray-700 text-sm leading-relaxed max-w-3xl">
                  <section>
                    <h3 className="font-semibold mb-2 text-indigo-700">1. Tính các khoản bảo hiểm</h3>
                    <p>
                      Mức lương đóng bảo hiểm: <b>{formatCurrency(result.insuranceBase)}</b>
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>BHXH (8%): {formatCurrency(result.socialInsurance)}</li>
                      <li>BHYT (1.5%): {formatCurrency(result.healthInsurance)}</li>
                      <li>BHTN (1%): {formatCurrency(result.unemploymentInsurance)}</li>
                      <li className="font-semibold">
                        Tổng bảo hiểm:{" "}
                        {formatCurrency(
                          result.socialInsurance +
                            result.healthInsurance +
                            result.unemploymentInsurance
                        )}
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-semibold mb-2 text-indigo-700">2. Tính thu nhập chịu thuế</h3>
                    <p>
                      = Tổng thu nhập ({formatCurrency(result.gross)})
                      - Bảo hiểm (
                      {formatCurrency(
                        result.socialInsurance +
                          result.healthInsurance +
                          result.unemploymentInsurance
                      )}
                      )
                      - Giảm trừ bản thân ({formatCurrency(config.personalDeduction)})
                      - Giảm trừ người phụ thuộc (
                      {formatCurrency(dependentsNum * config.dependentDeduction)})
                    </p>
                    <p className="font-semibold mt-2">
                      → Thu nhập chịu thuế: {formatCurrency(result.taxableIncome)}
                    </p>
                  </section>

                  <section>
                    <h3 className="font-semibold mb-2 text-indigo-700">3. Tính thuế thu nhập cá nhân</h3>
                    <p>Biểu thuế lũy tiến từng phần:</p>
                    <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                      {taxRates.map((br, i) => (
                        <li key={i}>
                          {formatCurrency(br.min)}
                          {br.max !== Infinity ? ` đến ${formatCurrency(br.max)}` : " trở lên"}:{" "}
                          {br.rate * 100}%
                        </li>
                      ))}
                      <li className="font-semibold">Tổng thuế: {formatCurrency(result.tax)}</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-semibold mb-2 text-indigo-700">4. Công thức tính lương Net/Gross</h3>
                    <p>Lương Net = Lương Gross - Bảo hiểm - Thuế TNCN</p>
                    <p>Lương Gross = (Lương Net + Bảo hiểm + Thuế TNCN) + … (quy đổi ngược lại)</p>
                  </section>
                </CardContent>
              </Card>
            )}

            {/* FAQs */}
            <Card className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Câu hỏi thường gặp (FAQs)</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="1">
                    <AccordionTrigger>Lương Gross là gì?</AccordionTrigger>
                    <AccordionContent>
                      Là tổng số tiền ghi trong hợp đồng lao động (trước khi trừ bảo hiểm và thuế).
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="2">
                    <AccordionTrigger>Lương Net là gì?</AccordionTrigger>
                    <AccordionContent>
                      Là số tiền thực nhận cuối cùng sau khi trừ hết các khoản bảo hiểm, thuế thu nhập cá nhân.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="3">
                    <AccordionTrigger>Bảo hiểm bắt buộc gồm những gì?</AccordionTrigger>
                    <AccordionContent>
                      Bao gồm: BHXH (8%), BHYT (1.5%), BHTN (1%). Tính trên mức lương đóng bảo hiểm.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="4">
                    <AccordionTrigger>Có nên deal lương Gross hay Net?</AccordionTrigger>
                    <AccordionContent>
                      Deal Gross giúp bạn rõ mọi khoản bị trừ, minh bạch hơn. Tuy nhiên, tuỳ tình huống thực tế bạn có thể deal Net (thường là mức cứng bạn muốn nhận hàng tháng).
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Right: Result */}
          <div>
            <Card className="sticky top-6 rounded-2xl shadow-lg border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Kết quả tính toán</CardTitle>
              </CardHeader>
              <CardContent>
                {!result ? (
                  <div className="text-center py-16 text-gray-400">
                    <Info className="mx-auto mb-3 w-10 h-10" />
                    <p className="text-lg">Điền thông tin và bấm <b>Tính lương</b> để xem kết quả!</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Lương Net/Gross */}
                    <div className="bg-indigo-50 rounded-xl p-6 space-y-2">
                      <div className="flex justify-between items-center font-semibold text-indigo-700 text-xl">
                        <span>Lương {activeTab === "grossToNet" ? "Net" : "Gross"}:</span>
                        <span>
                          {activeTab === "grossToNet"
                            ? formatCurrency(result.net)
                            : formatCurrency(result.gross)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-indigo-800 text-lg font-medium">
                        <span>Lương {activeTab === "grossToNet" ? "Gross" : "Net"}:</span>
                        <span>
                          {activeTab === "grossToNet"
                            ? formatCurrency(result.gross)
                            : formatCurrency(result.net)}
                        </span>
                      </div>
                    </div>

                    <Separator />

                    {/* Các khoản khấu trừ */}
                    <div>
                      <h3 className="font-semibold mb-3 text-gray-800 text-lg">Các khoản khấu trừ:</h3>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex justify-between text-base">
                          <span>Bảo hiểm xã hội (8%):</span>
                          <span>{formatCurrency(result.socialInsurance)}</span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span>Bảo hiểm y tế (1.5%):</span>
                          <span>{formatCurrency(result.healthInsurance)}</span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span>Bảo hiểm thất nghiệp (1%):</span>
                          <span>{formatCurrency(result.unemploymentInsurance)}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-indigo-700 text-base">
                          <span>Tổng bảo hiểm:</span>
                          <span>
                            {formatCurrency(
                              result.socialInsurance +
                                result.healthInsurance +
                                result.unemploymentInsurance
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span>Thuế TNCN:</span>
                          <span>{formatCurrency(result.tax)}</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Thông tin khác */}
                    <div>
                      <h3 className="font-semibold mb-3 text-gray-800 text-lg">Thông tin khác:</h3>
                      <div className="space-y-3 text-gray-700 text-base">
                        <div className="flex justify-between">
                          <span>Mức đóng bảo hiểm:</span>
                          <span>{formatCurrency(result.insuranceBase)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Giảm trừ bản thân:</span>
                          <span>{formatCurrency(config.personalDeduction)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Giảm trừ người phụ thuộc:</span>
                          <span>{formatCurrency(dependentsNum * config.dependentDeduction)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Thu nhập chịu thuế:</span>
                          <span>{formatCurrency(result.taxableIncome)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-2 px-3">
                        <AlertCircle className="w-4 h-4 text-indigo-600" />
                        Lưu ý
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="center" className="max-w-xs">
                      <p className=" bg-white p-3 rounded-lg shadow-md">
                        Kết quả chỉ mang tính chất tham khảo. Các khoản giảm trừ có thể thay đổi tùy
                        theo chính sách công ty và quy định mới.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Button size="sm" onClick={handleCalculate}>
                  Tính lại
                </Button>
              </CardFooter>
            </Card>

            {/* Latest Updates */}
            <Card className="rounded-2xl shadow-md border border-gray-200 bg-white p-6 mt-8">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Thông báo mới nhất</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-700 text-sm max-w-xl">
                <section>
                  <h4 className="font-semibold mb-1 text-indigo-700 text-base">
                    1. Cập nhật mức lương cơ sở 2025
                  </h4>
                  <p>
                    Từ 01/07/2024, mức lương cơ sở áp dụng là 2,340,000 đồng/tháng (Nghị định 73/2024/NĐ-CP).
                  </p>
                </section>
                <section>
                  <h4 className="font-semibold mb-1 text-indigo-700 text-base">
                    2. Lương tối thiểu vùng 2025
                  </h4>
                  <p>
                    Từ 01/07/2025, lương tối thiểu vùng vẫn giữ nguyên, theo Nghị định 128/2025/NĐ-CP.
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
