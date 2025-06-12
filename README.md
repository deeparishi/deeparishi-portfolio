# Deeparishi A - Portfolio Resume

A modern, responsive portfolio-resume built with React, TypeScript, and TailwindCSS. Features a clean, professional design optimized for both web viewing and PDF generation.

## 🚀 Features

- **Responsive Design**: Adapts seamlessly across all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **PDF Export**: Download resume as PDF with print-optimized styling
- **Smooth Animations**: Framer Motion powered animations
- **ATS-Friendly**: Clean structure for applicant tracking systems
- **Modern UI**: Professional design with subtle shadows and hover effects
- **Sticky Header**: Contact info stays visible while scrolling

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **React Icons** for iconography
- **React-to-Print** for PDF generation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd deeparishi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Customization

### Personal Data
All personal information is centralized in `src/data/portfolioData.ts`. Update this file to customize:

- Contact information
- Professional experience
- Skills and proficiency levels
- Certifications
- Education details

### Styling
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font imports in `index.html` and `tailwind.config.js`
- **Layout**: Adjust component layouts in individual component files

### Components Structure
```
src/
├── components/
│   ├── Header.tsx              # Sticky header with contact info
│   ├── ContactSection.tsx      # Contact details and social links
│   ├── ExperienceSection.tsx   # Professional experience timeline
│   ├── SkillsSection.tsx       # Technical skills with proficiency
│   ├── CertificationsSection.tsx # Certifications and credentials
│   ├── EducationSection.tsx    # Educational background
│   ├── ThemeToggle.tsx         # Dark/light mode toggle
│   └── PrintButton.tsx         # PDF download functionality
├── contexts/
│   └── ThemeContext.tsx        # Theme management
├── data/
│   └── portfolioData.ts        # Centralized data store
└── App.tsx                     # Main application component
```

## 🎨 Design Features

- **Spacious layout** with wide content distribution (max-width: 7xl)
- **Professional typography** with clear hierarchy and generous spacing
- **Subtle animations** that enhance user experience
- **Enhanced hover effects** with scale and shadow transitions
- **Modern card design** with rounded corners and gradient backgrounds
- **Grid-based layouts** that utilize full screen width effectively
- **Print-optimized** styling for PDF generation
- **Accessibility** considerations with proper contrast ratios

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🖨️ Print Optimization

The resume is optimized for printing with:
- A4 page size formatting
- Proper page breaks
- Print-specific CSS rules
- Color-adjusted elements for better printing

## 🚀 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

For any questions or suggestions, please reach out through the contact information provided in the portfolio.