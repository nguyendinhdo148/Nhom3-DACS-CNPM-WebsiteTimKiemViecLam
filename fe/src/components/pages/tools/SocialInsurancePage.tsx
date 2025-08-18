import React, { useState } from 'react';
import Navbar from "@/components/shared/Navbar";

type InsuranceType = 'compulsory' | 'voluntary' | 'both';
type VoluntaryParticipantType = 'normal' | 'poor' | 'near_poor' | 'ethnic_minority' | 'farmer' | 'fisherman';

interface InsurancePeriod {
  fromYear: number;
  fromMonth: number;
  toYear: number;
  toMonth: number;
  salary: number;
  type: InsuranceType;
  voluntaryParticipantType?: VoluntaryParticipantType;
}

interface CalculationDetail {
  period: string;
  months: number;
  salary: number;
  coefficient: number;
  adjustedSalary: number;
  amount: number;
  type: InsuranceType;
  voluntaryParticipantType?: VoluntaryParticipantType;
}

interface CalculationResult {
  totalAmount: number;
  timeParticipated: string;
  averageSalary: number;
  calculationDetails: CalculationDetail[];
  pre2014Amount: number;
  post2014Amount: number;
  voluntaryAmount: number;
  voluntarySubsidyAmount: number;
  pre2014Months: number;
  post2014Months: number;
  voluntaryMonths: number;
}

const SocialInsurancePage: React.FC = () => {
  const [insuranceType, setInsuranceType] = useState<InsuranceType>('compulsory');
  const [periods, setPeriods] = useState<InsurancePeriod[]>([
    { 
      fromYear: 2010, 
      fromMonth: 1, 
      toYear: 2025, 
      toMonth: 12, 
      salary: 5000000, 
      type: 'compulsory'
    }
  ]);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

  const voluntaryParticipantTypes = [
    { value: 'normal', label: 'Thông thường (không thuộc diện hỗ trợ)' },
    { value: 'poor', label: 'Hộ nghèo (được hỗ trợ 30%)' },
    { value: 'near_poor', label: 'Hộ cận nghèo (được hỗ trợ 25%)' },
    { value: 'ethnic_minority', label: 'Người dân tộc thiểu số (được hỗ trợ 30%)' },
    { value: 'farmer', label: 'Nông dân (được hỗ trợ 10%)' },
    { value: 'fisherman', label: 'Ngư dân (được hỗ trợ 10%)' },
  ];

  // Updated adjustment coefficients according to Circular 01/2023/TT-BLĐTBXH
  const adjustmentCoefficients: Record<number, number> = {
    1994: 5.43, 1995: 4.61, 1996: 4.36, 1997: 4.22,
    1998: 3.92, 1999: 3.75, 2000: 3.82, 2001: 3.83,
    2002: 3.68, 2003: 3.57, 2004: 3.31, 2005: 3.06,
    2006: 2.85, 2007: 2.63, 2008: 2.14, 2009: 2.00,
    2010: 1.83, 2011: 1.54, 2012: 1.41, 2013: 1.33,
    2014: 1.27, 2015: 1.27, 2016: 1.23, 2017: 1.19,
    2018: 1.15, 2019: 1.12, 2020: 1.08, 2021: 1.07,
    2022: 1.03, 2023: 1.00, 2024: 1.00, 2025: 1.00,
  };

  const handleAddPeriod = () => {
    const newPeriod: InsurancePeriod = { 
      fromYear: new Date().getFullYear(), 
      fromMonth: 1, 
      toYear: new Date().getFullYear(), 
      toMonth: 12, 
      salary: 0, 
      type: insuranceType === 'both' ? 'compulsory' : insuranceType,
    };
    
    if (insuranceType === 'voluntary' || insuranceType === 'both') {
      newPeriod.voluntaryParticipantType = 'normal';
    }
    
    setPeriods([...periods, newPeriod]);
  };

  const handleRemovePeriod = (index: number) => {
    const newPeriods = [...periods];
    newPeriods.splice(index, 1);
    setPeriods(newPeriods);
  };

  const handlePeriodChange = (
    index: number,
    field: keyof InsurancePeriod,
    value: number | string | VoluntaryParticipantType | InsuranceType
  ) => {
    const newPeriods = periods.map((p, i) =>
      i === index ? { ...p, [field]: value } : p
    );
    setPeriods(newPeriods);
  };

  const calculateInsurance = () => {
  let totalMonths = 0;
  let adjustedSalarySum = 0;
  const details: CalculationDetail[] = [];

  let pre2014Months = 0;
  let post2014Months = 0;
  let voluntarySubsidy = 0;
  let voluntarySupportMonths = 0; // Thêm biến để đếm số tháng được hỗ trợ

  periods.forEach((period) => {
    const monthsInPeriod =
      (period.toYear - period.fromYear) * 12 +
      (period.toMonth - period.fromMonth) + 1;

    totalMonths += monthsInPeriod;

    for (let y = period.fromYear; y <= period.toYear; y++) {
      const startM = (y === period.fromYear) ? period.fromMonth : 1;
      const endM = (y === period.toYear) ? period.toMonth : 12;
      const months = endM - startM + 1;

      if (months <= 0) continue;

      const coef = adjustmentCoefficients[y] || 1;
      const adjustedSalary = period.salary * coef;
      const adjustedAmount = adjustedSalary * months;
      adjustedSalarySum += adjustedAmount;

      // Tính số tiền hỗ trợ từ Nhà nước theo công thức mới (chỉ áp dụng từ 2018)
      if (
        (period.type === "voluntary" || 
        (period.type === "both" && period.voluntaryParticipantType)) &&
        y >= 2018
      ) {
        let subsidyRate = 0;
        switch (period.voluntaryParticipantType) {
          case "poor":
          case "ethnic_minority":
            subsidyRate = 0.3; // Hỗ trợ 30%
            break;
          case "near_poor":
            subsidyRate = 0.25; // Hỗ trợ 25%
            break;
          case "farmer":
          case "fisherman":
            subsidyRate = 0.1; // Hỗ trợ 10%
            break;
        }

        const supportMonths = Math.min(months, 12);
        voluntarySupportMonths += supportMonths;

        // Tính theo công thức hỗ trợ mới
        if (y >= 2018 && y <= 2021) {
          voluntarySubsidy += 0.22 * 700000 * subsidyRate * supportMonths;
        } else if (y >= 2022 && y <= 2025) {
          voluntarySubsidy += 0.22 * 1500000 * subsidyRate * supportMonths;
        }
      }

      // Phân loại giai đoạn
      if (y < 2014) {
        pre2014Months += months;
      } else {
        post2014Months += months;
      }

      details.push({
        period: `T${startM}/${y} - T${endM}/${y}`,
        months,
        salary: period.salary,
        coefficient: coef,
        adjustedSalary,
        amount: adjustedAmount,
        type: period.type,
        voluntaryParticipantType: period.voluntaryParticipantType,
      });
    }
  });

  const averageSalary = totalMonths > 0
    ? adjustedSalarySum / totalMonths
    : 0;

  // Làm tròn số năm theo quy định
  const roundYears = (months: number): number => {
    const years = Math.floor(months / 12);
    const leftover = months % 12;
    if (leftover >= 7) return years + 1;
    if (leftover >= 1) return years + 0.5;
    return years;
  };

  let roundedPre2014Years = roundYears(pre2014Months);
  let roundedPost2014Years = roundYears(post2014Months);

  // Nếu còn tháng lẻ trước 2014 thì chuyển sang sau 2014
  const leftoverPre2014 = pre2014Months % 12;
  if (leftoverPre2014 > 0 && leftoverPre2014 < 7) {
    roundedPre2014Years = Math.floor(pre2014Months / 12); // bỏ tháng lẻ
    roundedPost2014Years += 0.5; // cộng vào sau 2014
  }

  // Công thức tính tổng BHXH (giữ nguyên như cũ)
  const pre2014Amount = roundedPre2014Years * 1.5 * averageSalary;
  const post2014Amount = roundedPost2014Years * 2 * averageSalary;
  const totalPayout = pre2014Amount + post2014Amount;

  const yearsParticipated = Math.floor(totalMonths / 12);
  const monthsParticipated = totalMonths % 12;
  const timeParticipated = `${yearsParticipated} năm ${monthsParticipated} tháng`;

  setResult({
    totalAmount: totalPayout - voluntarySubsidy, // Trừ đi tiền hỗ trợ từ tổng
    timeParticipated,
    averageSalary,
    calculationDetails: details,
    pre2014Amount,
    post2014Amount,
    voluntaryAmount: 0, // Giữ nguyên như cũ
    voluntarySubsidyAmount: voluntarySubsidy, // Tiền hỗ trợ tính theo công thức mới
    pre2014Months,
    post2014Months,
    voluntaryMonths: voluntarySupportMonths, // Số tháng được hỗ trợ
  });
};



  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN').format(Math.round(value)) + ' (VNĐ)';
  };

  const getParticipantTypeLabel = (type?: VoluntaryParticipantType) => {
    if (!type) return '';
    const found = voluntaryParticipantTypes.find(t => t.value === type);
    return found ? found.label : '';
  };

  const renderInsuranceTypeDifferences = () => {
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Điểm khác biệt giữa các loại hình BHXH:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>BHXH bắt buộc:</strong> Hệ số tính lương hưu 1.5 (trước 2014) hoặc 2.0 (từ 2014), 
            được đóng bởi cả người lao động và người sử dụng lao động.
          </li>
          <li>
            <strong>BHXH tự nguyện:</strong> Hệ số tính lương hưu 1.0, người lao động tự đóng toàn bộ 
            hoặc được hỗ trợ một phần tùy đối tượng.
          </li>
          <li>
            <strong>Hệ số điều chỉnh:</strong> Áp dụng theo Thông tư 01/2023/TT-BLĐTBXH để điều chỉnh 
            mức lương đóng BHXH của các năm trước về giá trị hiện tại.
          </li>
        </ul>
      </div>
    );
  };

  const renderVoluntaryParticipantSelector = (index: number, currentType?: VoluntaryParticipantType) => {
    const period = periods[index];
    if (period.type !== 'voluntary' && period.type !== 'both') {
      return null;
    }
    
    return (
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Đối tượng tham gia</label>
        <select
          value={currentType || 'normal'}
          onChange={(e) => handlePeriodChange(index, 'voluntaryParticipantType', e.target.value as VoluntaryParticipantType)}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {voluntaryParticipantTypes.map(type => (
            <option key={type.value} value={type.value}>{type.label}</option>
          ))}
        </select>
      </div>
    );
  };

  const renderPeriodTypeSelector = (index: number, currentType: InsuranceType) => {
    if (insuranceType !== 'both') return null;
    
    return (
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Loại BHXH</label>
        <select
          value={currentType}
          onChange={(e) => {
            const newType = e.target.value as InsuranceType;
            handlePeriodChange(index, 'type', newType);
            if (newType === 'voluntary' && !periods[index].voluntaryParticipantType) {
              handlePeriodChange(index, 'voluntaryParticipantType', 'normal');
            }
          }}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="compulsory">Bắt buộc</option>
          <option value="voluntary">Tự nguyện</option>
        </select>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 w-full max-w-screen-2xl">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Công cụ tính bảo hiểm xã hội một lần</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-700 mb-6">
              Công cụ này giúp tính toán mức hưởng BHXH một lần theo quy định hiện hành, 
              áp dụng hệ số điều chỉnh lương theo Thông tư 01/2023/TT-BLĐTBXH và phân chia 
              chính xác thời gian tham gia BHXH trước và sau năm 2014.
            </p>
            
            {renderInsuranceTypeDifferences()}
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Loại hình bảo hiểm</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => {
                    setInsuranceType('compulsory');
                    setPeriods(periods.map(p => ({
                      ...p,
                      type: 'compulsory',
                      voluntaryParticipantType: undefined
                    })));
                  }}
                  className={`py-2 px-4 rounded-lg border ${insuranceType === 'compulsory' ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-gray-100 border-gray-300'}`}
                >
                  BHXH bắt buộc
                </button>
                <button
                  onClick={() => {
                    setInsuranceType('voluntary');
                    setPeriods(periods.map(p => ({
                      ...p,
                      type: 'voluntary',
                      voluntaryParticipantType: p.voluntaryParticipantType || 'normal'
                    })));
                  }}
                  className={`py-2 px-4 rounded-lg border ${insuranceType === 'voluntary' ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-gray-100 border-gray-300'}`}
                >
                  BHXH tự nguyện
                </button>
                <button
                  onClick={() => {
                    setInsuranceType('both');
                    setPeriods(periods.map(p => ({
                      ...p,
                      type: p.type === 'voluntary' ? 'voluntary' : 'compulsory',
                      voluntaryParticipantType: p.type === 'voluntary' ? (p.voluntaryParticipantType || 'normal') : undefined
                    })));
                  }}
                  className={`py-2 px-4 rounded-lg border ${insuranceType === 'both' ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-gray-100 border-gray-300'}`}
                >
                  Cả BHXH bắt buộc & tự nguyện
                </button>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">Giai đoạn nộp BHXH</h2>
                <div className="space-x-2">
                  <button 
                    onClick={handleAddPeriod}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                  >
                    Thêm giai đoạn
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {periods.map((period, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-3 bg-white">
                    <div className="md:col-span-1 flex justify-center">
                      <span className="text-gray-500">{index + 1}</span>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tháng bắt đầu</label>
                      <select
                        value={period.fromMonth}
                        onChange={(e) => handlePeriodChange(index, 'fromMonth', parseInt(e.target.value))}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {months.map(month => (
                          <option key={month} value={month}>Tháng {month}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Năm bắt đầu</label>
                      <select
                        value={period.fromYear}
                        onChange={(e) => handlePeriodChange(index, 'fromYear', parseInt(e.target.value))}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tháng kết thúc</label>
                      <select
                        value={period.toMonth}
                        onChange={(e) => handlePeriodChange(index, 'toMonth', parseInt(e.target.value))}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {months.map(month => (
                          <option key={month} value={month}>Tháng {month}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Năm kết thúc</label>
                      <select
                        value={period.toYear}
                        onChange={(e) => handlePeriodChange(index, 'toYear', parseInt(e.target.value))}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    {renderPeriodTypeSelector(index, period.type)}
                    {(insuranceType === 'voluntary' || insuranceType === 'both') && renderVoluntaryParticipantSelector(index, period.voluntaryParticipantType)}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mức lương đóng BHXH</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={period.salary.toLocaleString('vi-VN')}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\./g, '');
                            if (!isNaN(Number(value))) {
                              handlePeriodChange(index, 'salary', parseInt(value) || 0);
                            }
                          }}
                          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="absolute right-3 top-2 text-gray-500">VNĐ</span>
                      </div>
                    </div>
                    <div className="md:col-span-1 flex justify-center">
                      {periods.length > 1 && (
                        <button 
                          onClick={() => handleRemovePeriod(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={calculateInsurance}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
              >
                Tính BHXH một lần
              </button>
            </div>
          </div>
          
          {result && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Kết quả tính BHXH một lần</h2>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-1">Tiền BHXH một lần được nhận:</p>
                  <p className="text-3xl font-bold text-green-600">{formatCurrency(result.totalAmount)}</p>
                  {result.voluntarySubsidyAmount > 0 && (
                    <p className="text-sm text-gray-600 mt-2">
                      (Trong đó bao gồm {formatCurrency(result.voluntarySubsidyAmount)} hỗ trợ từ Nhà nước cho BHXH tự nguyện)
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Chi tiết tính toán</h3>
                
                <div className="mb-4">
                  <p className="font-medium">1. Thời gian tham gia BHXH: <span className="font-normal">{result.timeParticipated}</span></p>
                  <p className="text-sm pl-4">
                    - Trước 2014: {Math.floor(result.pre2014Months / 12)} năm {result.pre2014Months % 12} tháng<br />
                    - Từ 2014: {Math.floor(result.post2014Months / 12)} năm {result.post2014Months % 12} tháng<br />
                    {result.voluntaryMonths > 0 && (
                      <span>- Tự nguyện: {Math.floor(result.voluntaryMonths / 12)} năm {result.voluntaryMonths % 12} tháng</span>
                    )}
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="font-medium">2. Mức bình quân tiền lương tháng đóng BHXH: <span className="font-normal">{formatCurrency(result.averageSalary)}</span></p>
                  
                  <div className="mt-2 pl-4">
                    <p className="font-medium">2.1. Chi tiết từng giai đoạn:</p>
                    
                    <div className="mt-2 space-y-2">
                      {result.calculationDetails.map((detail, index) => (
                        <div key={index} className={`text-sm p-2 ${detail.type === 'voluntary' ? 'bg-blue-50' : ''}`}>
                          - {detail.period}: 
                          <span className="font-medium"> {detail.type === 'voluntary' ? 'Tự nguyện' : 'Bắt buộc'}</span>
                          {detail.voluntaryParticipantType && (
                            <span className="text-blue-600 ml-2">({getParticipantTypeLabel(detail.voluntaryParticipantType)})</span>
                          )}
                          <br />
                          • Thời gian: {detail.months} tháng<br />
                          • Lương cơ bản: {formatCurrency(detail.salary)}<br />
                          • Hệ số điều chỉnh: {detail.coefficient}<br />
                          • Lương đã điều chỉnh: {formatCurrency(detail.adjustedSalary)}<br />
                          • Tổng: {formatCurrency(detail.amount)}
                        </div>
                      ))}
                    </div>
                    
                    <p className="mt-2 font-medium">2.2. Tổng tiền đóng BHXH: {formatCurrency(result.calculationDetails.reduce((sum, item) => sum + item.amount, 0))}</p>
                    <p className="font-medium">2.3. Mức bình quân = Tổng tiền / tổng số tháng = {formatCurrency(result.averageSalary)}</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium">3. Mức hưởng BHXH một lần:</p>
                  
                  <div className="mt-2 pl-4">
                    {result.pre2014Amount > 0 && (
                      <>
                        <p className="font-medium">3.1. Thời gian trước 2014:</p>
                        <p className="text-sm">
                          {formatCurrency(result.averageSalary)} × {Math.floor(result.pre2014Months / 12)} năm × 1.5 = {formatCurrency(result.pre2014Amount)}
                        </p>
                        {result.pre2014Months % 12 > 0 && (
                          <p className="text-sm text-gray-600">
                            (Số tháng lẻ {result.pre2014Months % 12} tháng được chuyển sang giai đoạn từ 2014)
                          </p>
                        )}
                      </>
                    )}
                    
                    {result.post2014Amount > 0 && (
                      <>
                        <p className="font-medium mt-2">3.2. Thời gian từ 2014:</p>
                        <p className="text-sm">
                          {formatCurrency(result.averageSalary)} × {(result.post2014Months + (result.pre2014Months % 12)) / 12} năm × 2.0 = {formatCurrency(result.post2014Amount)}
                        </p>
                      </>
                    )}
                    
                    {result.voluntaryAmount > 0 && (
                      <>
                        <p className="font-medium mt-2">3.3. Thời gian tự nguyện:</p>
                        <p className="text-sm">
                          {formatCurrency(result.averageSalary)} × {result.voluntaryMonths / 12} năm × 1.0 = {formatCurrency(result.voluntaryAmount)}
                        </p>
                        {result.voluntarySubsidyAmount > 0 && (
                          <p className="text-sm text-blue-600">
                            (Trong đó có {formatCurrency(result.voluntarySubsidyAmount)} được Nhà nước hỗ trợ)
                          </p>
                        )}
                      </>
                    )}
                    
                    <p className="font-medium mt-4">
                      3.4. Tổng mức hưởng BHXH một lần = 
                      {result.pre2014Amount > 0 && ` ${formatCurrency(result.pre2014Amount)} (trước 2014)`}
                      {result.post2014Amount > 0 && ` + ${formatCurrency(result.post2014Amount)} (từ 2014)`}
                      {result.voluntaryAmount > 0 && ` + ${formatCurrency(result.voluntaryAmount)} (tự nguyện)`}
                      {result.voluntarySubsidyAmount > 0 && ` (gồm ${formatCurrency(result.voluntarySubsidyAmount)} hỗ trợ)`}
                      {` = ${formatCurrency(result.totalAmount)}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Hướng dẫn sử dụng</h2>
            
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cách nhập liệu</h3>
                <p className="text-gray-700">
                  1. Chọn loại hình BHXH phù hợp (bắt buộc, tự nguyện hoặc cả hai)<br />
                  2. Thêm các giai đoạn đóng BHXH với thời gian và mức lương chính xác<br />
                  3. Đối với BHXH tự nguyện, chọn đúng đối tượng tham gia để tính hỗ trợ từ Nhà nước<br />
                  4. Nhấn nút "Tính BHXH một lần" để xem kết quả
                </p>
              </div>
              
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Lưu ý quan trọng</h3>
                <p className="text-gray-700">
                  • Công cụ áp dụng hệ số điều chỉnh lương theo Thông tư 01/2023/TT-BLĐTBXH<br />
                  • Thời gian tham gia được phân chia chính xác trước/sau năm 2014<br />
                  • Số tháng lẻ trước 2014 được chuyển sang giai đoạn từ 2014<br />
                  • Kết quả tính toán chỉ mang tính chất tham khảo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialInsurancePage;