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

const CompoundInterestPage = () => {
  const [principal, setPrincipal] = useState(10000000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000000);
  const [years, setYears] = useState(10);
  const [interestRate, setInterestRate] = useState(10);
  const [compoundingFrequency, setCompoundingFrequency] = useState('yearly');
  
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
    // Remove all non-digit characters
    let numericValue = value.replace(/[^\d]/g, '');
    
    // Remove leading zeros
    numericValue = numericValue.replace(/^0+/, '');
    
    // If empty, set to 0
    if (numericValue === '') numericValue = '0';
    
    // Update state with numeric value
    setter(Number(numericValue));
  };

  // Format value for display
  const formatDisplayValue = (value: number) => {
    return formatNumber(value);
  };

  // Calculate compound interest and generate chart data
  const calculateCompoundInterest = () => {
    const P = principal;
    const r = interestRate / 100;
    const t = years;
    let n = 1;
    switch (compoundingFrequency) {
      case 'daily': n = 365; break;
      case 'monthly': n = 12; break;
      case 'quarterly': n = 4; break;
      case 'yearly': n = 1; break;
      default: n = 1;
    }
    const PMT = monthlyContribution;

    // Calculate values for each year
    const labels = Array.from({ length: t + 1 }, (_, i) => i);

    let balance = P;
    const principalData: number[] = [];
    const contributionData: number[] = [];
    const totalData: number[] = [];

    const i_month = Math.pow(1 + r / n, n / 12) - 1;

    for (let year = 0; year <= t; year++) {
      if (year > 0) {
        for (let m = 0; m < 12; m++) {
          balance = balance * (1 + i_month) + PMT; // lãi + đóng góp cuối kỳ
        }
      }

      const totalContributions = P + PMT * 12 * year;
      const interestEarned = balance - totalContributions;

      principalData.push(totalContributions);  // tổng số tiền tự bỏ vào (gốc + PMT)
      contributionData.push(interestEarned);   // đúng nghĩa là tiền lãi sinh ra
      totalData.push(balance);                 // tổng giá trị cuối kỳ
    }

    // Prepare chart data
    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Tổng vốn tự bỏ',
          data: principalData,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
        {
          label: 'Tiền lãi',
          data: contributionData,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Tổng giá trị',
          data: totalData,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    });

    const finalTotal = totalData[totalData.length - 1];
    const interestEarned = finalTotal - (P + (PMT * 12 * t));
    
    return {
      total: Math.round(finalTotal),
      interestEarned: Math.round(interestEarned),
      contributions: P + (PMT * 12 * t)
    };
  };

  const [result, setResult] = useState({
    total: 0,
    interestEarned: 0,
    contributions: 0
  });

  useEffect(() => {
    const calc = calculateCompoundInterest();
    setResult(calc);
  }, [principal, monthlyContribution, years, interestRate, compoundingFrequency]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Công cụ tính Lãi Kép</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Nhập thông tin</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số tiền gốc ban đầu (VNĐ)
              </label>
              <input
                type="text"
                value={formatDisplayValue(principal)}
                onChange={(e) => handleInputChange(e.target.value, setPrincipal)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số tiền gửi mỗi tháng (VNĐ)
              </label>
              <input
                type="text"
                value={formatDisplayValue(monthlyContribution)}
                onChange={(e) => handleInputChange(e.target.value, setMonthlyContribution)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Thời gian gửi (Năm)
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lãi suất (%)
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Định kỳ gửi
              </label>
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
          
          {/* Results */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Kết quả</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-md">
                <p className="text-sm text-gray-600">Tổng số tiền bạn sẽ nhận được</p>
                <p className="text-2xl font-bold text-blue-600">
                  {formatNumber(result.total)} VNĐ
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-md">
                <p className="text-sm text-gray-600">Tổng lãi kiếm được</p>
                <p className="text-2xl font-bold text-green-600">
                  {formatNumber(result.interestEarned)} VNĐ
                </p>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-md">
                <p className="text-sm text-gray-600">Tổng số tiền bạn đã gửi</p>
                <p className="text-xl font-bold text-yellow-600">
                  {formatNumber(result.contributions)} VNĐ
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Công thức tính lãi kép</h3>
              <p className="text-sm text-gray-600 mb-1">
                F<sub>n</sub> = P × (1 + r/n)<sup>n×t</sup> + PMT × [(1 + r/n)<sup>n×t</sup> - 1] / (r/n)
              </p>
              <p className="text-xs text-gray-500">
                Trong đó: P = Số tiền gốc, r = Lãi suất, t = Thời gian (năm), 
                n = Số lần ghép lãi/năm, PMT = Tiền gửi hàng tháng
              </p>
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
                    text: 'Tăng trưởng đầu tư theo thời gian',
                  },
                },
              }}
            />
          </div>
        </div>
        
        {/* Information Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sức mạnh của lãi suất kép</h2>
          <p className="mb-4">
            Lãi suất kép (Compound Interest) được Einstein nhận định là "kỳ quan thứ 8 của thế giới". 
            Warren Buffett cũng từng chia sẻ lý do mà ông giàu có: "Sự giàu có của tôi kết hợp từ 
            cuộc sống tại Mỹ, gen tốt và Lãi suất kép".
          </p>
          <p>
            Bạn hoàn toàn có thể trở nên giàu có nếu biết tận dụng sức mạnh của lãi kép, kết hợp với 
            việc đầu tư thường xuyên, nhất quán trong một thời gian dài.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestPage;