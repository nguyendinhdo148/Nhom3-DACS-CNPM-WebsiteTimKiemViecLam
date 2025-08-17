import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar";

interface InsuranceResult {
  monthlyBenefit: number;
  monthsEligible: number;
  details: {
    label: string;
    value: number | string;
    explanation?: string;
  }[];
}

interface SalaryInput {
  month1: string;
  month2: string;
  month3: string;
  month4: string;
  month5: string;
  month6: string;
}

const SocialInsurancePage = () => {
  // Regional minimum wages for different periods
  const REGION_MIN_WAGES_2024 = {
    I: 4680000,
    II: 4160000,
    III: 3640000,
    IV: 3250000,
  };

  const REGION_MIN_WAGES_2025 = {
    I: 4960000,
    II: 4410000,
    III: 3860000,
    IV: 3450000,
  };

  // Base salary for different periods
  const BASE_SALARY_2024 = 1800000; // Before 01/07/2024
  const BASE_SALARY_2025 = 2340000; // From 01/07/2024

  const [period, setPeriod] = useState<"2024" | "2025">("2025");
  const [salaryType, setSalaryType] = useState<"fixed" | "variable">("fixed");
  const [fixedSalary, setFixedSalary] = useState<string>("");
  const [variableSalaries, setVariableSalaries] = useState<SalaryInput>({
    month1: "",
    month2: "",
    month3: "",
    month4: "",
    month5: "",
    month6: "",
  });
  const [insuranceMonths, setInsuranceMonths] = useState<string>("");
  const [salaryScheme, setSalaryScheme] = useState<"state" | "private">(
    "state"
  );
  const [region, setRegion] = useState<keyof typeof REGION_MIN_WAGES_2025>("I");
  const [result, setResult] = useState<InsuranceResult | null>(null);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("vi-VN").format(value);
  };

  const handleFixedSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\./g, "");
    if (/^\d*$/.test(value)) {
      setFixedSalary(formatInputNumber(value));
    }
  };

  const handleVariableSalaryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    month: keyof SalaryInput
  ) => {
    const value = e.target.value.replace(/\./g, "");
    if (/^\d*$/.test(value)) {
      setVariableSalaries((prev) => ({
        ...prev,
        [month]: formatInputNumber(value),
      }));
    }
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\./g, "");
    if (/^\d*$/.test(value)) {
      setInsuranceMonths(formatInputNumber(value));
    }
  };

  const formatInputNumber = (value: string): string => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const calculateInsurance = () => {
    // Get the correct base salary and regional wages based on period
    const baseSalary = period === "2024" ? BASE_SALARY_2024 : BASE_SALARY_2025;
    const regionWages =
      period === "2024" ? REGION_MIN_WAGES_2024 : REGION_MIN_WAGES_2025;

    // Calculate average salary
    let averageSalary = 0;
    if (salaryType === "fixed") {
      averageSalary = parseFloat(fixedSalary.replace(/\./g, "")) || 0;
    } else {
      const salaries = Object.values(variableSalaries).map(
        (s) => parseFloat(s.replace(/\./g, "")) || 0
      );
      averageSalary = salaries.reduce((sum, s) => sum + s, 0) / salaries.length;
    }

    const monthsValue = parseInt(insuranceMonths.replace(/\./g, "")) || 0;

    // Calculate maximum insurance salary
    const maxInsuranceSalary =
      salaryScheme === "state"
        ? baseSalary * 20 // 20 times base salary for state employees
        : regionWages[region] * 20; // 20 times regional minimum wage for private employees

    // The actual salary used for calculation (capped at max)
    const calculationSalary = Math.min(averageSalary, maxInsuranceSalary);

    // Monthly benefit is 60% of calculation salary
    const monthlyBenefit = calculationSalary * 0.6;

    // Maximum monthly benefit is 5 times base salary or regional minimum wage
    const maxMonthlyBenefit =
      salaryScheme === "state" ? baseSalary * 5 : regionWages[region] * 5;

    // Final monthly benefit (capped at maximum)
    const finalMonthlyBenefit = Math.min(monthlyBenefit, maxMonthlyBenefit);

    // Calculate eligible months
    let monthsEligible = 0;
    if (monthsValue >= 12 && monthsValue <= 36) {
      monthsEligible = 3;
    } else if (monthsValue > 36) {
      monthsEligible = 3 + Math.floor((monthsValue - 36) / 12);
      monthsEligible = Math.min(monthsEligible, 12); // Max 12 months
    }

    setResult({
      monthlyBenefit: finalMonthlyBenefit,
      monthsEligible,
      details: [
        {
          label: "Tiền lương đóng BHTN",
          value: formatCurrency(averageSalary),
          explanation:
            "(Bình quân tiền lương tháng đóng BHTN của 06 tháng liền kề trước khi thất nghiệp)",
        },
        {
          label: "Lương cơ sở",
          value: formatCurrency(baseSalary),
          explanation:
            period === "2024"
              ? "(Theo quy định trước 01/07/2024)"
              : "(Theo Nghị định số 73/2024/NĐ-CP từ 01/07/2024)",
        },
        {
          label: "Mức lương tháng được đóng BHTN tối đa",
          value: formatCurrency(maxInsuranceSalary),
          explanation: `(= 20 * ${
            salaryScheme === "state" ? "lương cơ sở" : "lương tối thiểu vùng"
          })`,
        },
        {
          label: "Mức lương tháng áp dụng tính BHTN",
          value: formatCurrency(calculationSalary),
          explanation: "(Không vượt quá mức lương tháng đóng BHTN tối đa)",
        },
        {
          label: "Mức hưởng trợ cấp thất nghiệp hàng tháng tối đa",
          value: formatCurrency(maxMonthlyBenefit),
          explanation: `(= 5 * ${
            salaryScheme === "state" ? "lương cơ sở" : "lương tối thiểu vùng"
          })`,
        },
        {
          label: "Thời gian đóng BHTN chưa hưởng",
          value: `${monthsValue} tháng`,
        },
        {
          label: "Chế độ lương",
          value:
            salaryScheme === "state"
              ? "Doanh nghiệp nhà nước"
              : "Doanh nghiệp tư nhân",
        },
        {
          label: "Mức trợ cấp hàng tháng theo mức lương áp dụng",
          value: formatCurrency(monthlyBenefit),
          explanation: "(= 0.6 * Mức lương tháng áp dụng tính BHTN)",
        },
        {
          label: "Mức hưởng BHTN hàng tháng thực nhận",
          value: formatCurrency(finalMonthlyBenefit),
          explanation:
            "(Không vượt quá mức hưởng trợ cấp thất nghiệp hàng tháng tối đa)",
        },
        {
          label: "Số tháng hưởng BHTN",
          value: `${monthsEligible} tháng`,
        },
      ],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Công cụ tính mức hưởng bảo hiểm thất nghiệp chính xác nhất
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Thông tin tính bảo hiểm thất nghiệp
            </h2>

            <div className="mb-6 bg-blue-50 p-4 rounded-lg">
              <label className="block text-blue-800 font-medium mb-2">
                Áp dụng quy định:
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center bg-white px-4 py-2 rounded border border-blue-200">
                  <input
                    type="radio"
                    className="form-radio text-blue-600"
                    name="period"
                    checked={period === "2024"}
                    onChange={() => setPeriod("2024")}
                  />
                  <span className="ml-2">Từ 01/07/2024 - 30/06/2025</span>
                </label>
                <label className="inline-flex items-center bg-white px-4 py-2 rounded border border-blue-200">
                  <input
                    type="radio"
                    className="form-radio text-blue-600"
                    name="period"
                    checked={period === "2025"}
                    onChange={() => setPeriod("2025")}
                  />
                  <span className="ml-2">Từ 01/07/2025 (Mới nhất)</span>
                </label>
              </div>
            </div>

            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <label className="block text-gray-700 font-medium mb-2">
                Lương đóng BH:
              </label>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button
                  className={`p-3 rounded-lg border ${
                    salaryType === "fixed"
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSalaryType("fixed")}
                >
                  Không thay đổi trong 6 tháng
                </button>
                <button
                  className={`p-3 rounded-lg border ${
                    salaryType === "variable"
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSalaryType("variable")}
                >
                  Thay đổi trong 6 tháng
                </button>
              </div>

              {salaryType === "fixed" ? (
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg pr-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="VD: 10.000.000"
                    value={fixedSalary}
                    onChange={handleFixedSalaryChange}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    VND
                  </span>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {(
                    [
                      "month1",
                      "month2",
                      "month3",
                      "month4",
                      "month5",
                      "month6",
                    ] as (keyof SalaryInput)[]
                  ).map((month, index) => (
                    <div key={month} className="relative">
                      <label className="block text-sm text-gray-600 mb-1">
                        Tháng {index + 1}
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg pr-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={variableSalaries[month]}
                        onChange={(e) => handleVariableSalaryChange(e, month)}
                      />
                      <span className="absolute right-3 top-9 text-gray-500">
                        VND
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-sm text-gray-500 mt-2">
                (Bình quân tiền lương tháng đóng BHTN của 06 tháng liền kề trước
                khi thất nghiệp)
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Tổng thời gian đóng BHTN chưa hưởng
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg pr-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="VD: 12"
                    value={insuranceMonths}
                    onChange={handleMonthsChange}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    tháng
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  (Thời gian đóng bảo hiểm thất nghiệp - Thời gian đã hưởng trợ
                  cấp thất nghiệp)
                </p>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Chế độ tiền lương
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className={`p-3 rounded-lg border ${
                      salaryScheme === "state"
                        ? "bg-blue-100 border-blue-500 text-blue-700"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSalaryScheme("state")}
                  >
                    Doanh nghiệp nhà nước
                  </button>
                  <button
                    className={`p-3 rounded-lg border ${
                      salaryScheme === "private"
                        ? "bg-blue-100 border-blue-500 text-blue-700"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSalaryScheme("private")}
                  >
                    Doanh nghiệp tư nhân
                  </button>
                </div>
              </div>

              {salaryScheme === "private" && (
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Vùng lương tối thiểu
                  </label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={region}
                    onChange={(e) =>
                      setRegion(
                        e.target.value as keyof typeof REGION_MIN_WAGES_2025
                      )
                    }
                  >
                    <option value="I">
                      Vùng I -{" "}
                      {formatCurrency(
                        period === "2024"
                          ? REGION_MIN_WAGES_2024["I"]
                          : REGION_MIN_WAGES_2025["I"]
                      )}
                      đ
                    </option>
                    <option value="II">
                      Vùng II -{" "}
                      {formatCurrency(
                        period === "2024"
                          ? REGION_MIN_WAGES_2024["II"]
                          : REGION_MIN_WAGES_2025["II"]
                      )}
                      đ
                    </option>
                    <option value="III">
                      Vùng III -{" "}
                      {formatCurrency(
                        period === "2024"
                          ? REGION_MIN_WAGES_2024["III"]
                          : REGION_MIN_WAGES_2025["III"]
                      )}
                      đ
                    </option>
                    <option value="IV">
                      Vùng IV -{" "}
                      {formatCurrency(
                        period === "2024"
                          ? REGION_MIN_WAGES_2024["IV"]
                          : REGION_MIN_WAGES_2025["IV"]
                      )}
                      đ
                    </option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">
                    {period === "2024"
                      ? "Theo Nghị định 38/2022/NĐ-CP có hiệu lực từ 01/07/2024"
                      : "Theo Nghị định 128/2025/NĐ-CP có hiệu lực từ 01/07/2025"}
                  </p>
                </div>
              )}
            </div>

            <button
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg mt-6 hover:bg-blue-700 transition duration-200 font-medium text-lg shadow-md"
              onClick={calculateInsurance}
            >
              Tính bảo hiểm thất nghiệp
            </button>
          </div>

          {/* Results Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Kết quả tính bảo hiểm thất nghiệp
            </h2>

            {result ? (
              <div className="space-y-6">
                <div className="bg-blue-100 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">
                        Mức hưởng BHTN hàng tháng:
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        {formatCurrency(result.monthlyBenefit)} VND
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">
                        Số tháng hưởng BHTN:
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        {result.monthsEligible} tháng
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border">
                          Tiền lương đóng BHTN
                        </th>
                        <th className="py-2 px-4 border">
                          Thời gian đóng BHTN chưa hưởng
                        </th>
                        <th className="py-2 px-4 border">Chế độ lương</th>
                        <th className="py-2 px-4 border">
                          Mức hưởng BHTN hàng tháng
                        </th>
                        <th className="py-2 px-4 border">
                          Số tháng hưởng BHTN
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border text-center">
                          {salaryType === "fixed"
                            ? `${fixedSalary} VND`
                            : `6 tháng: ${Object.values(variableSalaries)
                                .map((s) => s)
                                .join(", ")} VND`}
                        </td>
                        <td className="py-2 px-4 border text-center">
                          {insuranceMonths} tháng
                        </td>
                        <td className="py-2 px-4 border text-center">
                          {salaryScheme === "state"
                            ? "Doanh nghiệp nhà nước"
                            : "Doanh nghiệp tư nhân"}
                        </td>
                        <td className="py-2 px-4 border text-center">
                          {formatCurrency(result.monthlyBenefit)} VND
                        </td>
                        <td className="py-2 px-4 border text-center">
                          {result.monthsEligible} tháng
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">
                    (*) Diễn giải chi tiết
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {result.details.map((detail, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded shadow-sm"
                      >
                        <p className="text-sm text-gray-600">
                          ({index + 1}) {detail.label}
                        </p>
                        <p className="font-medium">
                          {typeof detail.value === "string"
                            ? detail.value
                            : formatCurrency(detail.value)}
                          {detail.explanation && (
                            <span className="text-xs text-gray-500 block mt-1">
                              {detail.explanation}
                            </span>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-8 rounded-lg border-2 border-dashed border-gray-200 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  Chưa có dữ liệu
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Nhập thông tin và nhấn "Tính bảo hiểm thất nghiệp" để xem kết
                  quả
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Thông tin về bảo hiểm thất nghiệp
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Bảo hiểm thất nghiệp là gì?
              </h3>
              <div className="prose prose-sm text-gray-600">
                <p>
                  Bảo hiểm thất nghiệp là hình thức bảo hiểm bắt buộc với mục
                  đích xã hội và không vì lợi nhuận. Theo Điều 42 Luật Việc làm
                  2013, quyền lợi khi tham gia BHTN bao gồm:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Khoản tiền trợ cấp thất nghiệp;</li>
                  <li>Hỗ trợ học nghề;</li>
                  <li>Hỗ trợ tư vấn và giới thiệu việc làm;</li>
                  <li>Hỗ trợ giúp đào tạo, nâng cao trình độ của nghề.</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Quy định mới nhất
              </h3>
              {period === "2024" ? (
                <div className="prose prose-sm text-gray-600">
                  <p>
                    Theo Nghị định 73/2024/NĐ-CP quy định mức lương cơ sở và chế
                    độ tiền thưởng đối với cán bộ, công chức, viên chức và lực
                    lượng vũ trang, mức lương cơ sở từ ngày 01/07/2024 là
                    2,340,000 đồng/tháng.
                  </p>
                  <p>Trong đó, mức lương cơ sở được sử dụng làm căn cứ:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Tính mức lương trong các bảng lương, mức phụ cấp và thực
                      hiện các chế độ khác theo quy định của pháp luật đối với
                      các đối tượng quy định tại Điều 2 Nghị định này;
                    </li>
                    <li>
                      Tính mức hoạt động phí, sinh hoạt phí theo quy định của
                      pháp luật;
                    </li>
                    <li>
                      Tính các khoản trích và các chế độ được hưởng theo mức
                      lương cơ sở.
                    </li>
                  </ul>
                  <p>
                    Bên cạnh đó, căn cứ theo Nghị định 74/2024/NĐ-CP, từ ngày
                    01/07/2024, mức lương tối thiểu vùng được điều chỉnh như
                    sau:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Vùng I: Từ 4,680,000 đồng/tháng lên 4,960,000 đồng/tháng;
                    </li>
                    <li>
                      Vùng II: Từ 4,160,000 đồng/tháng lên 4,410,000 đồng/tháng;
                    </li>
                    <li>
                      Vùng III: Từ 3,640,000 đồng/tháng lên 3,860,000
                      đồng/tháng;
                    </li>
                    <li>
                      Vùng IV: Từ 3,250,000 đồng/tháng lên 3,450,000 đồng/tháng.
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="prose prose-sm text-gray-600">
                  <p>
                    Theo Nghị định 128/2025/NĐ-CP quy định mức lương tối thiểu
                    vùng mới nhất có hiệu lực từ ngày 01/07/2025:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Vùng I: 4,960,000 đồng/tháng;</li>
                    <li>Vùng II: 4,410,000 đồng/tháng;</li>
                    <li>Vùng III: 3,860,000 đồng/tháng;</li>
                    <li>Vùng IV: 3,450,000 đồng/tháng.</li>
                  </ul>
                  <p>
                    Mức lương tối thiểu vùng theo giờ cũng được điều chỉnh tương
                    ứng:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Vùng I: 23,800 đồng/giờ;</li>
                    <li>Vùng II: 21,200 đồng/giờ;</li>
                    <li>Vùng III: 18,600 đồng/giờ;</li>
                    <li>Vùng IV: 16,600 đồng/giờ.</li>
                  </ul>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Công thức tính bảo hiểm thất nghiệp
              </h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium text-blue-800 mb-1">
                  Mức hưởng thất nghiệp hàng tháng = Mức trung bình tiền lương
                  đóng bảo hiểm thất nghiệp hàng tháng của 06 tháng gần nhất
                  trước khi thất nghiệp * 60%
                </p>
                <p className="text-sm text-blue-700">
                  Mức hưởng tối đa không quá 5 lần mức lương cơ sở (với chế độ
                  lương nhà nước) hoặc 5 lần mức lương tối thiểu vùng (với chế
                  độ lương doanh nghiệp)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Ví dụ minh họa
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800">
                    Ví dụ 1: Nhân viên nhà nước
                  </h4>
                  <p className="text-sm text-gray-600">
                    Anh A làm Nhà nước, đóng bảo hiểm thất nghiệp được 12 tháng
                    với mức lương trung bình 6 tháng cuối cùng 13,000,000
                    đồng/tháng.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-medium">Kết quả:</span> Được hưởng
                    7,800,000 đồng/tháng trong 3 tháng (60% lương, không vượt
                    quá 5 lần lương cơ sở).
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800">
                    Ví dụ 2: Nhân viên tư nhân
                  </h4>
                  <p className="text-sm text-gray-600">
                    Chị B đóng bảo hiểm thất nghiệp được 62 tháng tại doanh
                    nghiệp tư nhân vùng I với lương trung bình 6 tháng cuối là
                    6,000,000 đồng/tháng.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-medium">Kết quả:</span> Được hưởng
                    3,600,000 đồng/tháng trong 5 tháng (3 tháng đầu + 2 tháng
                    sau).
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Thời gian hưởng bảo hiểm thất nghiệp
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thời gian đóng BHTN
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Số tháng hưởng
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        Từ 12 - dưới 36 tháng
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        3 tháng
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        Từ 36 - dưới 48 tháng
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        4 tháng
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        Từ 48 - dưới 60 tháng
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        5 tháng
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        Từ 60 - dưới 72 tháng
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        6 tháng
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        Từ 72 - dưới 84 tháng
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        7 tháng
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        Từ 84 - dưới 96 tháng
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        8 tháng
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        Từ 96 - dưới 108 tháng
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        9 tháng
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        Từ 108 - dưới 120 tháng
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        10 tháng
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        Từ 120 - dưới 132 tháng
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        11 tháng
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        Từ 132 tháng trở lên
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                        12 tháng
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Thời điểm hưởng trợ cấp tính từ ngày thứ 16 sau khi nộp đủ hồ
                sơ.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Điều kiện hưởng bảo hiểm thất nghiệp
              </h3>
              <div className="prose prose-sm text-gray-600">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Đã chấm dứt hợp đồng lao động (không phải do đơn phương chấm
                    dứt trái pháp luật)
                  </li>
                  <li>
                    Đã đóng BHTN từ 12 tháng trở lên trong 24 tháng trước khi
                    thất nghiệp
                  </li>
                  <li>Đã đăng ký thất nghiệp tại trung tâm dịch vụ việc làm</li>
                  <li>
                    Chưa tìm được việc làm sau 15 ngày kể từ ngày đăng ký thất
                    nghiệp
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Hồ sơ hưởng bảo hiểm thất nghiệp
              </h3>
              <div className="prose prose-sm text-gray-600">
                <p>Khi đi làm thủ tục hưởng BHTN, cần chuẩn bị:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Đơn đề nghị hưởng trợ cấp thất nghiệp</li>
                  <li>Bản sao hợp đồng lao động đã hết hạn hoặc bị chấm dứt</li>
                  <li>Bản sao sổ bảo hiểm xã hội</li>
                  <li>Giấy chứng nhận sức khỏe (nếu có)</li>
                  <li>Giấy tờ tùy thân (CMND/CCCD, hộ khẩu)</li>
                </ul>
                <p className="mt-2">
                  Thời gian giải quyết hồ sơ: Trong vòng 20 ngày làm việc kể từ
                  ngày nộp đủ hồ sơ hợp lệ.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Lưu ý quan trọng
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Kết quả tính toán chỉ mang tính chất tham khảo. Mức hưởng thực
                  tế có thể thay đổi tùy thuộc vào quy định cụ thể tại thời điểm
                  nộp hồ sơ và chính sách của địa phương. Để biết chính xác, vui
                  lòng liên hệ trực tiếp với cơ quan bảo hiểm xã hội hoặc trung
                  tâm dịch vụ việc làm địa phương.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Công cụ tính BHTN</h3>
              <p className="text-gray-400 text-sm">
                Cung cấp thông tin chính xác nhất về bảo hiểm thất nghiệp theo
                quy định mới nhất của pháp luật Việt Nam.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Liên kết hữu ích</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="https://thuvienphapluat.vn/van-ban/Lao-dong-Tien-luong/Bo-Luat-lao-dong-2019-333670.aspx" className="hover:text-white">
                      Bộ Luật Lao động
                    </a>
                  </li>
                  <li>
                    <a href="https://thuvienphapluat.vn/van-ban/Lao-dong-Tien-luong/Luat-viec-lam-nam-2013-215628.aspx" className="hover:text-white">
                      Luật Việc làm
                    </a>
                  </li>
                  <li>
                    <a href="https://baohiemxahoi.gov.vn/tracuu/Pages/tra-cuu-ho-gia-dinh.aspx" className="hover:text-white">
                      Bảo hiểm Xã hội Việt Nam
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Hỗ trợ</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Liên hệ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Chính sách bảo mật
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 text-center">
            <p>
              © {new Date().getFullYear()} Công cụ tính BHTN. Tất cả quyền được
              bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SocialInsurancePage;
