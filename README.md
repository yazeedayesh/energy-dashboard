# 🌍 European Energy Analytics Dashboard

A comprehensive, interactive dashboard for analyzing electricity markets across 5 European countries.

## 🎯 Live Demo
**[View Dashboard](https://your-deployment-url-here.com)**

## 📊 Features

### 🔋 8 Interactive Sections
- **Overview**: Market summary and key insights with quick stats
- **Price Analysis**: 6 detailed pricing charts and trends
- **Energy Mix**: Renewable vs non-renewable energy sources  
- **Price Components**: Breakdown of electricity cost factors
- **Time Series**: Historical price evolution (2020-2025)
- **Negative Pricing**: Analysis of negative electricity prices
- **Production**: Electricity generation by source for all 5 countries ✨
- **Forecasting**: Future predictions and 24-hour hourly patterns ✨

### 🌍 5 European Countries
- 🇩🇪 **Germany**: Energy transition leader
- 🇫🇷 **France**: Nuclear power dominance  
- 🇳🇱 **Netherlands**: Natural gas dependence
- 🇸🇰 **Slovakia**: Nuclear and renewable mix
- 🇳🇴 **Norway**: Hydroelectric powerhouse (98% renewable)

### ✨ User Experience
- 🌙 **Dark/Light Mode**: Toggle between themes with persistence
- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **Fast Loading**: Optimized performance with loading states
- 🎨 **Modern UI**: Beautiful glassmorphism design with animations
- 📈 **Interactive Charts**: Hover for detailed data
- 🔄 **Smooth Transitions**: Fluid animations throughout

## 🛠️ Technologies Used

- **Frontend**: React 18 with Hooks
- **Charts**: Recharts library for data visualization
- **Styling**: Tailwind CSS with custom animations
- **State Management**: React useState and useEffect
- **Local Storage**: Dark mode preference persistence
- **Build Tool**: Create React App
- **Icons**: Unicode emojis for lightweight design

## 📈 Data Sources

- **Eurostat**: Official EU statistics
- **EEA**: European Environment Agency
- **National Grid Operators**: Real-time electricity data
- **Academic Research**: Peer-reviewed energy studies

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/energy-dashboard.git

# Navigate to project directory
cd energy-dashboard

# Install dependencies
npm install

# Install required packages
npm install recharts
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS
npx tailwindcss init -p

# Start development server
npm start
```

### Project will open at `http://localhost:3000`

## 📁 Project Structure

```
energy-dashboard/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA manifest
│   └── favicon.ico         # App icon
├── src/
│   ├── App.js              # Main dashboard component
│   ├── App.css             # Component-specific styles
│   ├── index.js            # React app entry point
│   ├── index.css           # Global styles with Tailwind
│   └── reportWebVitals.js  # Performance monitoring
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── README.md              # Project documentation
```

## 📊 Data Insights

### Key Findings
- **Norway** has the lowest electricity prices (€0.15/kWh domestic)
- **Germany** shows highest price volatility during energy crisis
- **France** relies heavily on nuclear power (63% of energy mix)
- **Negative pricing** events increased 400% in 2024
- **Renewable energy** correlation with price stability

### Price Trends
- 2022: Energy crisis peak (€570/MWh in Germany)
- 2023-2025: Market stabilization period
- Future: Gradual price normalization expected

## 🎓 Academic Use

Perfect for:
- **Energy Economics** courses and research
- **Policy Analysis** and government reports
- **Data Visualization** projects and tutorials
- **Renewable Energy** studies and presentations
- **Market Analysis** and investment decisions

## 🔧 Customization Guide

### Adding New Countries
```javascript
// Add to data arrays in src/App.js
const newCountryData = {
  country: 'Spain',
  domestic: 0.25,
  industrial: 0.15
};
```

### Changing Chart Colors
```javascript
// Modify fill colors in chart components
<Bar dataKey="renewable" fill="#YourColorHere" />
```

### Adding New Sections
1. Create new data array
2. Add navigation button
3. Create chart component
4. Add conditional rendering

### Customizing Animations
```css
/* Add to src/index.css */
@keyframes yourAnimation {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## 🚀 Deployment Options

### Netlify (Recommended)
1. Run `npm run build`
2. Drag `build` folder to netlify.com
3. Get instant URL

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts: `"deploy": "npm run build && gh-pages -d build"`
3. Run `npm run deploy`

### Vercel
1. Connect GitHub repository to Vercel
2. Auto-deploy on every push
3. Get custom domain

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly navigation
- Optimized chart sizing
- Efficient loading on mobile networks

## ⚡ Performance Features

- Lazy loading for charts
- Optimized re-renders with React.memo
- Efficient state management
- Minimal bundle size with tree shaking

## 🧪 Testing

```bash
# Run tests
npm test

# Build for production
npm run build

# Analyze bundle size
npm run build && npx webpack-bundle-analyzer build/static/js/*.js
```

## 📧 Contact & Support

- **Author**: [Your Name]
- **Email**: [your.email@university.edu]
- **University**: [Your University]
- **Course**: [Energy Economics / Data Analytics]
- **GitHub**: [https://github.com/yourusername](https://github.com/yourusername)

## 📄 License

MIT License - Feel free to use for academic and commercial purposes.

## 🙏 Acknowledgments

- **Professor**: [Dr. Professor Name] - Course guidance and feedback
- **Data Sources**: Eurostat, EEA, National Grid Operators
- **Libraries**: React, Recharts, Tailwind CSS teams
- **Design Inspiration**: Modern data visualization principles

## 📚 References

1. European Environment Agency. (2024). Energy Transition Indicators
2. Eurostat. (2024). Energy Statistics Database  
3. International Energy Agency. (2024). Europe Energy Outlook
4. Academic Research Papers (add your specific sources)

## 🔄 Version History

- **v1.0.0**: Initial release with 8 sections
- **v1.1.0**: Added dark mode and animations
- **v1.2.0**: Enhanced mobile responsiveness
- **v1.3.0**: Added all 5 countries to production section
- **v1.4.0**: Complete 24-hour data for France forecasting

---

**⭐ If this dashboard helped with your research, please give it a star!**

**🔗 Live Demo**: [https://your-deployment-url.com](https://your-deployment-url.com)