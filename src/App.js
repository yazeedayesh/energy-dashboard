import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

const EuropeanEnergyDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);

  const electricityPricesData = [
    { country: 'Germany', domestic: 0.39, industrial: 0.18 },
    { country: 'Slovakia', domestic: 0.18, industrial: 0.13 },
    { country: 'France', domestic: 0.21, industrial: 0.14 },
    { country: 'Netherlands', domestic: 0.30, industrial: 0.21 },
    { country: 'Norway', domestic: 0.15, industrial: 0.09 }
  ];

  const energyMixData = [
    { country: 'Germany', renewable: 50, nuclear: 6, fossil: 44 },
    { country: 'Slovakia', renewable: 25, nuclear: 60, fossil: 15 },
    { country: 'France', renewable: 28, nuclear: 63, fossil: 9 },
    { country: 'Netherlands', renewable: 35, nuclear: 3, fossil: 62 },
    { country: 'Norway', renewable: 98, nuclear: 0, fossil: 2 }
  ];

  const priceComponentsData = [
    { country: 'Germany', energyCost: 32, networkCost: 25, taxesLevies: 43 },
    { country: 'Slovakia', energyCost: 42, networkCost: 28, taxesLevies: 30 },
    { country: 'France', energyCost: 40, networkCost: 32, taxesLevies: 28 },
    { country: 'Netherlands', energyCost: 30, networkCost: 25, taxesLevies: 45 },
    { country: 'Norway', energyCost: 60, networkCost: 25, taxesLevies: 15 }
  ];

  const seasonalData = [
    { country: 'Germany', winter: 78, summer: 65 },
    { country: 'Netherlands', winter: 82, summer: 68 },
    { country: 'France', winter: 68, summer: 54 },
    { country: 'Slovakia', winter: 72, summer: 62 },
    { country: 'Norway', winter: 45, summer: 35 }
  ];

  const extremePriceData = [
    { country: 'Germany', price: 570 },
    { country: 'Netherlands', price: 550 },
    { country: 'France', price: 470 },
    { country: 'Slovakia', price: 380 },
    { country: 'Norway', price: 290 }
  ];

  const monthly2022Data = [
    { month: 'Jan', Germany: 150, France: 120, Netherlands: 140, Slovakia: 110, Norway: 80 },
    { month: 'Feb', Germany: 180, France: 150, Netherlands: 170, Slovakia: 140, Norway: 100 },
    { month: 'Mar', Germany: 280, France: 250, Netherlands: 270, Slovakia: 220, Norway: 150 },
    { month: 'Apr', Germany: 190, France: 160, Netherlands: 180, Slovakia: 150, Norway: 110 },
    { month: 'May', Germany: 180, France: 140, Netherlands: 170, Slovakia: 130, Norway: 90 },
    { month: 'Jun', Germany: 200, France: 170, Netherlands: 190, Slovakia: 160, Norway: 120 },
    { month: 'Jul', Germany: 320, France: 280, Netherlands: 310, Slovakia: 250, Norway: 180 },
    { month: 'Aug', Germany: 480, France: 420, Netherlands: 460, Slovakia: 380, Norway: 280 },
    { month: 'Sep', Germany: 570, France: 520, Netherlands: 550, Slovakia: 480, Norway: 350 },
    { month: 'Oct', Germany: 320, France: 280, Netherlands: 300, Slovakia: 250, Norway: 180 },
    { month: 'Nov', Germany: 190, France: 160, Netherlands: 180, Slovakia: 140, Norway: 100 },
    { month: 'Dec', Germany: 280, France: 250, Netherlands: 270, Slovakia: 220, Norway: 160 }
  ];

  const priceEvolutionData = [
    { year: '2020', Germany: 40, Netherlands: 50, France: 35, Slovakia: 45, Norway: 25 },
    { year: '2021', Germany: 95, Netherlands: 110, France: 75, Slovakia: 85, Norway: 70 },
    { year: '2022', Germany: 240, Netherlands: 230, France: 160, Slovakia: 190, Norway: 140 },
    { year: '2023', Germany: 110, Netherlands: 105, France: 95, Slovakia: 90, Norway: 75 },
    { year: '2024', Germany: 75, Netherlands: 80, France: 70, Slovakia: 65, Norway: 50 },
    { year: '2025', Germany: 65, Netherlands: 70, France: 60, Slovakia: 55, Norway: 45 }
  ];

  const renewableImpactData = [
    { country: 'Germany', electricityPrice: 75, renewableShare: 45 },
    { country: 'Netherlands', electricityPrice: 77, renewableShare: 42 },
    { country: 'France', electricityPrice: 62, renewableShare: 25 },
    { country: 'Slovakia', electricityPrice: 65, renewableShare: 15 },
    { country: 'Norway', electricityPrice: 38, renewableShare: 95 }
  ];

  const priceStabilityData = [
    { country: 'Germany', stabilityIndex: 32 },
    { country: 'Netherlands', stabilityIndex: 35 },
    { country: 'France', stabilityIndex: 26 },
    { country: 'Slovakia', stabilityIndex: 24 },
    { country: 'Norway', stabilityIndex: 14 }
  ];

  const negativePricingData = [
    { year: '2020', Germany: 100, Slovakia: 15, France: 8, Netherlands: 25, Norway: 0 },
    { year: '2021', Germany: 140, Slovakia: 20, France: 12, Netherlands: 35, Norway: 0 },
    { year: '2022', Germany: 45, Slovakia: 8, France: 5, Netherlands: 15, Norway: 0 },
    { year: '2023', Germany: 280, Slovakia: 65, France: 85, Netherlands: 120, Norway: 35 },
    { year: '2024', Germany: 350, Slovakia: 95, France: 110, Netherlands: 150, Norway: 180 },
    { year: '2025', Germany: 180, Slovakia: 45, France: 55, Netherlands: 75, Norway: 35 }
  ];

  const hourlyNegativeData = [
    { hour: '01:00', Germany: -50, Netherlands: -30 },
    { hour: '02:00', Germany: -80, Netherlands: -60 },
    { hour: '03:00', Germany: -120, Netherlands: -90 },
    { hour: '04:00', Germany: -150, Netherlands: -120 },
    { hour: '05:00', Germany: -180, Netherlands: -150 },
    { hour: '06:00', Germany: -200, Netherlands: -170 },
    { hour: '07:00', Germany: -180, Netherlands: -160 },
    { hour: '08:00', Germany: -160, Netherlands: -140 },
    { hour: '09:00', Germany: -200, Netherlands: -180 },
    { hour: '10:00', Germany: -250, Netherlands: -220 },
    { hour: '11:00', Germany: -300, Netherlands: -270 },
    { hour: '12:00', Germany: -380, Netherlands: -350 },
    { hour: '13:00', Germany: -420, Netherlands: -400 },
    { hour: '14:00', Germany: -480, Netherlands: -450 },
    { hour: '15:00', Germany: -500, Netherlands: -480 },
    { hour: '16:00', Germany: -450, Netherlands: -420 },
    { hour: '17:00', Germany: -380, Netherlands: -350 },
    { hour: '18:00', Germany: -280, Netherlands: -250 },
    { hour: '19:00', Germany: -180, Netherlands: -150 },
    { hour: '20:00', Germany: -120, Netherlands: -100 },
    { hour: '21:00', Germany: -80, Netherlands: -70 },
    { hour: '22:00', Germany: -60, Netherlands: -50 },
    { hour: '23:00', Germany: -40, Netherlands: -30 },
    { hour: '24:00', Germany: -30, Netherlands: -20 }
  ];

  const productionGermanyData = [
    { year: '2020', renewable: 250, nonRenewable: 250, nuclear: 75 },
    { year: '2021', renewable: 235, nonRenewable: 240, nuclear: 75 },
    { year: '2022', renewable: 255, nonRenewable: 220, nuclear: 75 },
    { year: '2023', renewable: 270, nonRenewable: 200, nuclear: 65 },
    { year: '2024', renewable: 285, nonRenewable: 185, nuclear: 65 },
    { year: '2025', renewable: 300, nonRenewable: 170, nuclear: 60 }
  ];

  const productionFranceData = [
    { year: '2020', renewable: 120, nonRenewable: 40, nuclear: 380 },
    { year: '2021', renewable: 115, nonRenewable: 45, nuclear: 360 },
    { year: '2022', renewable: 65, nonRenewable: 60, nuclear: 280 },
    { year: '2023', renewable: 85, nonRenewable: 55, nuclear: 320 },
    { year: '2024', renewable: 95, nonRenewable: 50, nuclear: 330 },
    { year: '2025', renewable: 105, nonRenewable: 45, nuclear: 340 }
  ];

  const productionNorwayData = [
    { year: '2020', renewable: 156, nonRenewable: 2, nuclear: 0 },
    { year: '2021', renewable: 160, nonRenewable: 2, nuclear: 0 },
    { year: '2022', renewable: 158, nonRenewable: 2, nuclear: 0 },
    { year: '2023', renewable: 162, nonRenewable: 2, nuclear: 0 },
    { year: '2024', renewable: 165, nonRenewable: 2, nuclear: 0 },
    { year: '2025', renewable: 168, nonRenewable: 2, nuclear: 0 }
  ];

  const productionSlovakiaData = [
    { year: '2020', renewable: 12, nonRenewable: 18, nuclear: 15 },
    { year: '2021', renewable: 13, nonRenewable: 17, nuclear: 15 },
    { year: '2022', renewable: 14, nonRenewable: 16, nuclear: 15 },
    { year: '2023', renewable: 15, nonRenewable: 15, nuclear: 16 },
    { year: '2024', renewable: 16, nonRenewable: 14, nuclear: 16 },
    { year: '2025', renewable: 17, nonRenewable: 13, nuclear: 17 }
  ];

  const productionNetherlandsData = [
    { year: '2020', renewable: 35, nonRenewable: 85, nuclear: 4 },
    { year: '2021', renewable: 38, nonRenewable: 82, nuclear: 4 },
    { year: '2022', renewable: 42, nonRenewable: 78, nuclear: 4 },
    { year: '2023', renewable: 45, nonRenewable: 75, nuclear: 4 },
    { year: '2024', renewable: 48, nonRenewable: 72, nuclear: 4 },
    { year: '2025', renewable: 52, nonRenewable: 68, nuclear: 4 }
  ];

  const futurePredictionsData = [
    { year: '2026', price: 75 },
    { year: '2027', price: 74 },
    { year: '2028', price: 73 },
    { year: '2029', price: 72 },
    { year: '2030', price: 71 }
  ];

  const hourlyFranceData = [
    { hour: '01:00', price: 250 }, { hour: '02:00', price: 220 }, { hour: '03:00', price: 200 },
    { hour: '04:00', price: 180 }, { hour: '05:00', price: 160 }, { hour: '06:00', price: 200 },
    { hour: '07:00', price: 280 }, { hour: '08:00', price: 350 }, { hour: '09:00', price: 420 },
    { hour: '10:00', price: 480 }, { hour: '11:00', price: 520 }, { hour: '12:00', price: 580 },
    { hour: '13:00', price: 620 }, { hour: '14:00', price: 590 }, { hour: '15:00', price: 550 },
    { hour: '16:00', price: 520 }, { hour: '17:00', price: 480 }, { hour: '18:00', price: 450 },
    { hour: '19:00', price: 480 }, { hour: '20:00', price: 520 }, { hour: '21:00', price: 480 },
    { hour: '22:00', price: 420 }, { hour: '23:00', price: 350 }, { hour: '24:00', price: 300 }
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const NavButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? darkMode 
            ? 'bg-blue-600 text-white shadow-lg transform scale-105'
            : 'bg-blue-500 text-white shadow-lg transform scale-105'
          : darkMode
          ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {label}
    </button>
  );

  const ChartCard = ({ title, children }) => (
    <div className={`p-8 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
      darkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/90 border border-gray-200'
    }`}>
      <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <div style={{ width: '100%', height: '400px' }}>
        {children}
      </div>
    </div>
  );

  const tooltipStyle = {
    backgroundColor: darkMode ? '#1F2937' : 'white',
    border: darkMode ? '1px solid #374151' : '1px solid #ccc',
    borderRadius: '8px',
    color: darkMode ? '#fff' : '#000'
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-300'
        } animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        } animate-pulse`}></div>
      </div>

      <div className="relative z-10">
        <header className={`backdrop-blur-md border-b transition-all duration-300 ${
          darkMode ? 'bg-gray-900/50 border-gray-700' : 'bg-white/50 border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-xl ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                  <div className="text-white text-2xl">⚡</div>
                </div>
                <div>
                  <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    European Energy Analytics
                  </h1>
                  <p className={`text-lg mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Comprehensive electricity market insights & analysis
                  </p>
                </div>
              </div>
              
              <button
                onClick={toggleDarkMode}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-md'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </header>

        <nav className={`backdrop-blur-md border-b ${
          darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex gap-3 flex-wrap justify-center">
              <NavButton id="overview" label="Overview" isActive={activeSection === 'overview'} onClick={setActiveSection} />
              <NavButton id="prices" label="Price Analysis" isActive={activeSection === 'prices'} onClick={setActiveSection} />
              <NavButton id="energy-mix" label="Energy Mix" isActive={activeSection === 'energy-mix'} onClick={setActiveSection} />
              <NavButton id="components" label="Price Components" isActive={activeSection === 'components'} onClick={setActiveSection} />
              <NavButton id="temporal" label="Time Series" isActive={activeSection === 'temporal'} onClick={setActiveSection} />
              <NavButton id="negative" label="Negative Pricing" isActive={activeSection === 'negative'} onClick={setActiveSection} />
              <NavButton id="production" label="Production" isActive={activeSection === 'production'} onClick={setActiveSection} />
              <NavButton id="forecast" label="Forecasting" isActive={activeSection === 'forecast'} onClick={setActiveSection} />
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto p-8">
          
          {activeSection === 'overview' && (
            <div className="space-y-8">
              <div>
                <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  European Electricity Market Overview
                </h2>
                <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Real-time insights into electricity pricing, energy mix, and market dynamics across Europe
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartCard title="Electricity Prices Comparison in Europe (€/kWh)">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={electricityPricesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="country" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Bar dataKey="domestic" name="Domestic" fill="#8B5CF6" />
                      <Bar dataKey="industrial" name="Industrial" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Energy Mix Comparison (%, 2023)">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={energyMixData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="country" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Bar dataKey="renewable" stackId="a" name="Renewable" fill="#4ECDC4" />
                      <Bar dataKey="nuclear" stackId="a" name="Nuclear" fill="#4A90E2" />
                      <Bar dataKey="fossil" stackId="a" name="Fossil Fuels" fill="#F97316" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>
            </div>
          )}

          {activeSection === 'prices' && (
            <div className="space-y-8">
              <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Electricity Price Analysis
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartCard title="1. Seasonal Variation of Electricity Prices (2024)">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={seasonalData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="country" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Bar dataKey="winter" name="Winter (December)" fill="#3B82F6" />
                      <Bar dataKey="summer" name="Summer (July)" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="2. Extreme Electricity Price Increase in 2022">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={extremePriceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="country" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Bar dataKey="price" name="€/MWh" fill="#F97316" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="3. Monthly Peaks in Electricity Prices During 2022">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthly2022Data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="month" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Line type="monotone" dataKey="Germany" stroke="#666" strokeWidth={2} />
                      <Line type="monotone" dataKey="Netherlands" stroke="#10B981" strokeWidth={2} />
                      <Line type="monotone" dataKey="France" stroke="#F97316" strokeWidth={2} />
                      <Line type="monotone" dataKey="Slovakia" stroke="#3B82F6" strokeWidth={2} />
                      <Line type="monotone" dataKey="Norway" stroke="#EF4444" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="4. Electricity Price Comparison (2020-2025)">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceEvolutionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="year" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Line type="monotone" dataKey="Germany" stroke="#3B82F6" strokeWidth={2} />
                      <Line type="monotone" dataKey="Netherlands" stroke="#10B981" strokeWidth={2} />
                      <Line type="monotone" dataKey="France" stroke="#F97316" strokeWidth={2} />
                      <Line type="monotone" dataKey="Slovakia" stroke="#8B5CF6" strokeWidth={2} />
                      <Line type="monotone" dataKey="Norway" stroke="#EF4444" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="5. Impact Of Renewable Energy Share On Electricity Prices (2024)">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={renewableImpactData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="country" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Bar dataKey="electricityPrice" name="Electricity Price (€/MWh)" fill="#8B5CF6" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="6. Price Stability Comparison (2023-2025)">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={priceStabilityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="country" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Bar dataKey="stabilityIndex" name="Standard Deviation" fill="#F97316" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>
            </div>
          )}

          {activeSection === 'energy-mix' && (
            <div className="space-y-8">
              <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Energy Mix Analysis
              </h2>
              
              <ChartCard title="Energy Mix Comparison (%, 2023)">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={energyMixData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                    <XAxis dataKey="country" stroke={darkMode ? '#9CA3AF' : '#666'} />
                    <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Legend />
                    <Bar dataKey="renewable" stackId="a" name="Renewable" fill="#4ECDC4" />
                    <Bar dataKey="nuclear" stackId="a" name="Nuclear" fill="#4A90E2" />
                    <Bar dataKey="fossil" stackId="a" name="Fossil Fuels" fill="#F97316" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>
          )}

          {activeSection === 'components' && (
            <div className="space-y-8">
              <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Electricity Price Components
              </h2>
              
              <ChartCard title="Electricity Price Components (%, 2023)">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={priceComponentsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                    <XAxis dataKey="country" stroke={darkMode ? '#9CA3AF' : '#666'} />
                    <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Legend />
                    <Bar dataKey="energyCost" stackId="a" name="Energy Cost" fill="#4ECDC4" />
                    <Bar dataKey="networkCost" stackId="a" name="Network Cost" fill="#4A90E2" />
                    <Bar dataKey="taxesLevies" stackId="a" name="Taxes & Levies" fill="#F97316" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>
          )}

          {activeSection === 'temporal' && (
            <div className="space-y-8">
              <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Temporal Analysis
              </h2>
              
              <ChartCard title="Electricity Price Comparison (2020-2025)">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceEvolutionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                    <XAxis dataKey="year" stroke={darkMode ? '#9CA3AF' : '#666'} />
                    <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Legend />
                    <Line type="monotone" dataKey="Germany" stroke="#3B82F6" strokeWidth={2} />
                    <Line type="monotone" dataKey="Netherlands" stroke="#10B981" strokeWidth={2} />
                    <Line type="monotone" dataKey="France" stroke="#F97316" strokeWidth={2} />
                    <Line type="monotone" dataKey="Slovakia" stroke="#8B5CF6" strokeWidth={2} />
                    <Line type="monotone" dataKey="Norway" stroke="#EF4444" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>
          )}

          {activeSection === 'negative' && (
            <div className="space-y-8">
              <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Negative Pricing Analysis
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartCard title="Number of Hours with Negative Electricity Price (2020-2025)">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={negativePricingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="year" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Bar dataKey="Germany" name="Germany" fill="#3B82F6" />
                      <Bar dataKey="Slovakia" name="Slovakia" fill="#10B981" />
                      <Bar dataKey="France" name="France" fill="#F97316" />
                      <Bar dataKey="Netherlands" name="Netherlands" fill="#EF4444" />
                      <Bar dataKey="Norway" name="Norway" fill="#8B5CF6" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Hourly Negative Electricity Prices - July 2, 2023">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={hourlyNegativeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="hour" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Bar dataKey="Germany" name="Germany" fill="#3B82F6" />
                      <Bar dataKey="Netherlands" name="Netherlands" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>
            </div>
          )}

          {activeSection === 'production' && (
            <div className="space-y-8">
              <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Electricity Production by Source
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartCard title="Electricity Production by Source (TWh) - Germany">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={productionGermanyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="year" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Area type="monotone" dataKey="renewable" stackId="1" stroke="#10B981" fill="#10B981" name="Renewable" />
                      <Area type="monotone" dataKey="nonRenewable" stackId="1" stroke="#666" fill="#666" name="Non-Renewable" />
                      <Area type="monotone" dataKey="nuclear" stackId="1" stroke="#EF4444" fill="#EF4444" name="Nuclear" />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Electricity Production by Source (TWh) - France">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={productionFranceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="year" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Area type="monotone" dataKey="renewable" stackId="1" stroke="#10B981" fill="#10B981" name="Renewable" />
                      <Area type="monotone" dataKey="nonRenewable" stackId="1" stroke="#666" fill="#666" name="Non-Renewable" />
                      <Area type="monotone" dataKey="nuclear" stackId="1" stroke="#EF4444" fill="#EF4444" name="Nuclear" />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Electricity Production by Source (TWh) - Norway">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={productionNorwayData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="year" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Area type="monotone" dataKey="renewable" stackId="1" stroke="#10B981" fill="#10B981" name="Renewable" />
                      <Area type="monotone" dataKey="nonRenewable" stackId="1" stroke="#666" fill="#666" name="Non-Renewable" />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Electricity Production by Source (TWh) - Slovakia">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={productionSlovakiaData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="year" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Area type="monotone" dataKey="renewable" stackId="1" stroke="#10B981" fill="#10B981" name="Renewable" />
                      <Area type="monotone" dataKey="nonRenewable" stackId="1" stroke="#666" fill="#666" name="Non-Renewable" />
                      <Area type="monotone" dataKey="nuclear" stackId="1" stroke="#EF4444" fill="#EF4444" name="Nuclear" />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Electricity Production by Source (TWh) - Netherlands">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={productionNetherlandsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="year" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Legend />
                      <Area type="monotone" dataKey="renewable" stackId="1" stroke="#10B981" fill="#10B981" name="Renewable" />
                      <Area type="monotone" dataKey="nonRenewable" stackId="1" stroke="#666" fill="#666" name="Non-Renewable" />
                      <Area type="monotone" dataKey="nuclear" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" name="Nuclear" />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>
            </div>
          )}

          {activeSection === 'forecast' && (
            <div className="space-y-8">
              <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Price Forecasting
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ChartCard title="Predikcia vývoja cien elektriny v Európe (2026 – 2030)">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={futurePredictionsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="year" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Bar dataKey="price" name="Priemerná cena (odhad)" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Hourly Price Development – France, August 29, 2022">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={hourlyFranceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#f0f0f0'} />
                      <XAxis dataKey="hour" stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <YAxis stroke={darkMode ? '#9CA3AF' : '#666'} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Area type="monotone" dataKey="price" stroke="#F97316" fill="#F97316" name="Electricity Price" />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartCard>
              </div>
            </div>
          )}

        </main>

        <footer className={`mt-16 backdrop-blur-md border-t ${
          darkMode ? 'bg-gray-900/50 border-gray-700' : 'bg-white/50 border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto p-8">
            <div className="text-center">
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2024 European Energy Analytics Dashboard
              </p>
              <p className={`text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                Data sources: Eurostat, EEA, National Grid Operators | Built with React & Recharts
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EuropeanEnergyDashboard;