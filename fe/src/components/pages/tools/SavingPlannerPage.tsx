import React, { useState, useEffect } from 'react';
import Navbar from "@/components/shared/Navbar";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SavingPlannerPage = () => {
  const [targetAmount, setTargetAmount] = useState(100000000);
  const [initialInvestment, setInitialInvestment] = useState(10000000);
  const [years, setYears] = useState(1);
  const [interestRate, setInterestRate] = useState(10);
  const [compoundingFrequency, setCompoundingFrequency] = useState('yearly');
  const [requiredMonthlySaving, setRequiredMonthlySaving] = useState(0);
  
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    labels: [],
    datasets: [],
  });

  // Format number with dots as thousand separators
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Handle input change with formatting
  const handleInputChange = (value: string, setter: React.Dispatch<React.SetStateAction<number>>) => {
    let numericValue = value.replace(/[^\d]/g, '');
    numericValue = numericValue.replace(/^0+/, '');
    if (numericValue === '') numericValue = '0';
    setter(Number(numericValue));
  };

  // Format value for display
  const formatDisplayValue = (value: number) => {
    return formatNumber(value);
  };

  // Calculate required monthly savings to reach target
  const calculateRequiredSavings = () => {
    const A = targetAmount;     
    const P = initialInvestment;  // Initial investment
    const r = interestRate / 100; // Annual interest rate (decimal)
    const t = years;              // Number of years

    // Number of compounding periods per year
    const n = compoundingFrequency === 'daily' ? 365
            : compoundingFrequency === 'monthly' ? 12
            : compoundingFrequency === 'quarterly' ? 4
            : 1; // yearly

    // 1) Future value of initial investment with compound interest
    const fvP = P * Math.pow(1 + r / n, n * t);

    // 2) Effective monthly interest rate
    const i_m = Math.pow(1 + r / n, n / 12) - 1;

    const m = 12 * t; // total number of months
    let PMT = 0;

    if (A <= fvP) {
      PMT = 0;
    } else if (i_m === 0) {
      PMT = (A - fvP) / m;
    } else {
      const factor = (Math.pow(1 + i_m, m) - 1) / i_m;
      PMT = (A - fvP) / factor;
    }

    PMT = Math.max(0, PMT);

    // === CHART DATA ===
    const labels = Array.from({ length: t + 1 }, (_, i) => `Năm ${i}`);

    let balance = P;
    const principalData: number[] = [P];   // Initial investment + interest (no contributions)
    const interestData: number[] = [0];    // Interest earned
    const totalData: number[] = [P];       // Total value (initial + contributions + interest)
    const contributionsData: number[] = [0]; // Total contributions

    for (let year = 1; year <= t; year++) {
      let yearlyContributions = 0;
      
      for (let month = 1; month <= 12; month++) {
        const monthlyInterest = balance * i_m;
        balance = balance + monthlyInterest + PMT;
        yearlyContributions += PMT;
      }

      principalData.push(P * Math.pow(1 + r / n, n * year));
      interestData.push(balance - P - yearlyContributions * year);
      totalData.push(balance);
      contributionsData.push(yearlyContributions * year);
    }

    setChartData({
      labels,
      datasets: [
        {
          label: 'Vốn ban đầu + lãi',
          data: principalData,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          tension: 0.3,
        },
        {
          label: 'Tiền lãi từ góp hàng tháng',
          data: interestData,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          tension: 0.3,
        },
        {
          label: 'Tổng giá trị',
          data: totalData,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          tension: 0.3,
        },
      ],
    });

    return Math.round(PMT);
  };

  useEffect(() => {
    const PMT = calculateRequiredSavings();
    setRequiredMonthlySaving(PMT);
  }, [targetAmount, initialInvestment, years, interestRate, compoundingFrequency]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Công cụ lập kế hoạch tiết kiệm</h1>
        <p className="text-center mb-8 text-gray-600">
          Ứng dụng lãi suất kép để xây dựng kế hoạch tiết kiệm dựa trên mục tiêu và số năm tích lũy một cách chính xác
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Nhập thông tin</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2 text-blue-600">Bước 1: Mục tiêu tiết kiệm</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mục tiêu tiết kiệm (VNĐ)
                  </label>
                  <p className="text-xs text-gray-500 mb-2">Số tiền tiết kiệm cuối cùng mong muốn.</p>
                  <input
                    type="text"
                    value={formatDisplayValue(targetAmount)}
                    onChange={(e) => handleInputChange(e.target.value, setTargetAmount)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-blue-600">Bước 2: Khoản đầu tư ban đầu</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số tiền ban đầu (VNĐ)
                  </label>
                  <p className="text-xs text-gray-500 mb-2">Khoản tiền đầu tư lúc ban đầu bạn có.</p>
                  <input
                    type="text"
                    value={formatDisplayValue(initialInvestment)}
                    onChange={(e) => handleInputChange(e.target.value, setInitialInvestment)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-blue-600">Bước 3: Khoảng thời gian ước tính</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Thời gian tiết kiệm (Năm)
                  </label>
                  <p className="text-xs text-gray-500 mb-2">Khoảng thời gian, tính bằng năm, mà bạn dự định tiết kiệm.</p>
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-blue-600">Bước 4: Lãi suất</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lãi suất (%)
                  </label>
                  <p className="text-xs text-gray-500 mb-2">Lãi suất ước tính theo kỳ hạn gửi của bạn.</p>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-blue-600">Bước 5: Kỳ hạn</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Định kỳ gửi
                  </label>
                  <p className="text-xs text-gray-500 mb-2">Kỳ hạn nhận lãi tiền gửi của bạn.</p>
                  <select
                    value={compoundingFrequency}
                    onChange={(e) => setCompoundingFrequency(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="daily">Hàng ngày</option>
                    <option value="monthly">Hàng tháng</option>
                    <option value="quarterly">Hàng quý</option>
                    <option value="yearly">Hàng năm</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Kết quả</h2>
            
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-md">
                <p className="text-sm text-gray-600 mb-2">
                  Để đạt được {formatNumber(targetAmount)} (VNĐ) sau {years} năm với vốn đầu tư ban đầu {formatNumber(initialInvestment)} (VNĐ) và mức lãi suất kỳ vọng {interestRate} (%/năm) thì bạn cần tiết kiệm:
                </p>
                <p className="text-2xl font-bold text-blue-600 text-center py-4">
                  {formatNumber(requiredMonthlySaving)} VNĐ mỗi tháng
                </p>
                <p className="text-sm text-gray-500 text-center">
                  (Tần suất ghép lãi: {compoundingFrequency === 'yearly' ? 'hàng năm' : 
                   compoundingFrequency === 'quarterly' ? 'hàng quý' : 
                   compoundingFrequency === 'monthly' ? 'hàng tháng' : 'hàng ngày'})
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-md">
                <h3 className="font-medium mb-2">Chi tiết theo năm</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Năm</th>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Vốn ban đầu + lãi</th>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tổng giá trị</th>
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tổng tiền bổ sung</th>
                      </tr>
                    </thead>
                    <tbody>
                      {chartData.labels?.map((label, index) => (
                        <tr key={index}>
                          <td className="py-2 px-4 border-b border-gray-200">{String(label)}</td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {formatNumber(Math.round(chartData.datasets[0]?.data[index] as number || 0))}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {formatNumber(Math.round(chartData.datasets[2]?.data[index] as number || 0))}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {index === 0 ? '0' : formatNumber(Math.round(
                              (chartData.datasets[2]?.data[index] as number || 0) - 
                              (chartData.datasets[0]?.data[index] as number || 0)
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-md">
                <h3 className="font-medium mb-2">Công thức tính</h3>
                <p className="text-sm text-gray-600 mb-2">
                  PMT = (A - P × (1 + r/n)<sup>n×t</sup>) / [((1 + i)<sup>12t</sup> - 1) / i]
                </p>
                <p className="text-xs text-gray-500">
                  Trong đó: A = Số tiền mục tiêu, P = Số tiền ban đầu, r = Lãi suất năm, 
                  t = Thời gian (năm), n = Số lần ghép lãi/năm, i = Lãi suất hiệu dụng theo tháng = (1 + r/n)<sup>n/12</sup> - 1
                </p>
              </div>
              
              <div className="text-center text-sm text-gray-500">
                <p>Nếu bạn thấy hữu ích, hãy like Fanpage VieJobs để ủng hộ chúng tôi</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chart Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Biểu đồ tăng trưởng theo thời gian</h2>
          <div className="h-96">
            <Line
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    ticks: {
                      callback: function(value) {
                        return formatNumber(Number(value));
                      }
                    }
                  }
                },
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                          label += ': ';
                        }
                        label += formatNumber(Number(context.raw));
                        return label + ' VNĐ';
                      }
                    }
                  },
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Tăng trưởng tiết kiệm theo thời gian',
                  },
                },
              }}
            />
          </div>
        </div>
        
        {/* Information Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Lời khuyên dành cho bạn: Nên tiết kiệm bao nhiêu mỗi tháng?</h2>
          <p className="mb-4">
            Một trong những phương pháp quản lý ngân sách được các chuyên gia tài chính đề xuất là phương pháp 50-30-20. 
            Nguyên tắc 50-30-20 sẽ phân chia thu nhập của bạn vào 3 nhóm chính, với tỷ lệ 50% - 30% - 20%. 
            Trong đó, 50% thu nhập nên dành cho các khoản cần thiết như tiền nhà, tiền ăn,... 30% thu nhập nên được 
            chi tiêu cho nhu cầu cá nhân như học tập, sở thích,... Còn 20% còn lại nên được dành cho tiết kiệm hoặc 
            đầu tư cho tương lai.
          </p>
          
          <h3 className="font-medium mb-2 mt-4">Một số cách tiết kiệm / đầu tư mà bạn có thể tham khảo</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Tiết kiệm bằng cách "Trả cho mình trước" - Pay yourself first</li>
            <li>Gửi tiết kiệm ngân hàng</li>
            <li>Đầu tư chứng khoán, vàng, bất động sản</li>
            <li>Tham gia bảo hiểm nhân thọ</li>
            <li>Kiểm tra tình trạng "sức khỏe tài chính" định kỳ</li>
          </ul>
          
          <p className="mt-4 font-medium">
            Và quan trọng, thương vụ đầu tư hời nhất chính là đầu tư vào bản thân mình!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SavingPlannerPage;