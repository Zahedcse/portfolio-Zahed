export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const profileData = {
  name: "Zahed Alam",
  role: "Senior Software QA Engineer",
  location: "Dhaka, Bangladesh",
  email: "zahedalam1001@gmail.com",
  summary:
    "Senior QA Engineer with 4+ years of hands-on experience owning the quality strategy for large SaaS ERP ecosystems, global sporting events, and consumer mobile products. I combine exploratory rigor with automation depth to ship resilient releases, scale CI/CD coverage, and coach hybrid QA teams.",
  social: {
    linkedin: "https://www.linkedin.com/in/zahed-alam/",
    github: "https://github.com/Zahedcse",
  },
  heroMetrics: [
    { label: "Regression time saved", value: "30%" },
    { label: "Release stability boost", value: "+25%" },
    { label: "Peak load validated", value: "10M+ users" },
  ],
  highlights: [
    "Lead QA for Empathika’s 8-module ERP serving 1K+ daily users across UK care homes.",
    "Architected Selenium + Playwright suites with BDD, Allure, and CI orchestration.",
    "Mentored and scaled a five-member QA squad across mobile, API, and WCAG testing.",
  ],
  projects: [
    {
      title: "Empathika — Healthcare ERP",
      badge: "Lead QA Engineer",
      period: "2023 - Present",
      description:
        "Owned the complete QA lifecycle for an 8-module care home ERP (web + mobile) and evolved automation depth to secure mission-critical operations.",
      impact: [
        "Rolled out Selenium + Playwright suites covering smoke, regression, and UI parity.",
        "Cut release regressions by 25% via risk-based coverage and tighter CI metrics.",
        "Validated native iOS/Android builds with TestFlight, cloud sims, and real devices.",
      ],
      stack: ["Selenium", "Playwright", "Python", "BDD", "TestRail", "Jenkins"],
      link: "https://empathika.com",
    },
    {
      title: "The World Games Chengdu 2025",
      badge: "QA Lead",
      period: "Apr 2025 - Sep 2025",
      description:
        "Stressed a global event platform across web, mobile, and CMS surfaces to guarantee an uninterrupted fan experience during 10M+ concurrent sessions.",
      impact: [
        "Designed large-scale performance suites (JMeter + k6) to guarantee zero downtime.",
        "Instituted quality dashboards and shift-left pairing to unblock engineering faster.",
        "Mentored junior QA engineers on exploratory heuristics and accessibility coverage.",
      ],
      stack: ["k6", "CI/CD", "Accessibility", "Observability"],
      link: "https://live.theworldgames.org/",
    },
    {
      title: "GlowConnect Marketplace",
      badge: "QA Engineer",
      period: "2024 - Present",
      description:
        "Omnichannel marketplace for beauty professionals spanning responsive web and mobile apps with complex booking flows and payments.",
      impact: [
        "Executed regression + cross-browser suites across Chromium, Safari, and Firefox.",
        "Validated API integrations using Postman, Swagger, and Newman collections.",
        "Partnered with design to ensure Figma-perfect UI delivery on every iteration.",
      ],
      stack: ["Postman", "Swagger", "Cross-browser", "Mobile QA"],
      link: "https://www.tuliptech.com",
    },
    {
      title: "StuCommunify & BanglaTalent",
      badge: "QA Engineer",
      period: "2023 - 2024",
      description:
        "Student community and talent marketplace deployed on both Play Store and App Store with heavy emphasis on reliability and accessible UX.",
      impact: [
        "Built 500+ reusable cases and automated smoke packs for rapid release cadence.",
        "Led API validation and production issue triage during UAT + hypercare windows.",
        "Set up Zephyr/TestRail hygiene and sprint-ready documentation practice.",
      ],
      stack: ["Manual QA", "API", "Mobile", "Zephyr"],
      link: "https://play.google.com",
    },
  ],
  experiences: [
    {
      role: "Sr. Software QA Engineer",
      company: "TulipTech LTD (HQ - Leicester, UK)",
      period: "Jan 2025 – Present",
      location: "Dhaka(Onsite)",
      bullets: [
        "Lead and mentor a five-member QA pod spanning automation, API, and performance testing streams.",
        "Designed Selenium + Playwright frameworks with BDD, Allure, and reusable page objects for multi-product coverage.",
        "Set up Jenkins + GitHub Actions pipelines integrating smoke, regression, and reporting dashboards for every commit.",
        "Drove accessibility, risk-based testing, and quality metrics adoption across product squads.",
      ],
    },
    {
      role: "Software QA Engineer",
      company: "TulipTech LTD",
      period: "Jan 2024 – Dec 2024",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Executed end-to-end validation for Empathika (web, iOS, Android) with 1K+ daily active users.",
        "Collaborated with developers through pair testing/debugging to shrink defect resolution time by 20%.",
        "Strengthened documentation via refined test plans, coverage maps, and multi-environment regression checklists.",
      ],
    },
    {
      role: "Associate Software QA Engineer",
      company: "TulipTech LTD",
      period: "Jun 2023 – Dec 2023",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Produced 500+ reusable manual test cases and executed comprehensive mobile + web cycles.",
        "Ran API validations with Postman/Swagger/Insomnia to ensure data integrity and backend resilience.",
        "Supported UAT planning, production issue analysis, and TestRail governance for regression runs.",
      ],
    },
  ],
  skills: [
    {
      title: "Quality Engineering",
      items: [
        "Manual, regression, exploratory, API, and mobile QA",
        "Risk-based test strategy & coverage analytics",
        "Accessibility (WCAG) & security heuristics",
        "Performance, load, and scalability planning",
      ],
    },
    {
      title: "Automation & Tooling",
      items: [
        "Selenium WebDriver & Playwright (JS/TS/Python)",
        "BDD + Allure reporting & Page Object Model",
        "Mocha, Chai, Pytest, Newman suites",
        "Postman, Swagger, Insomnia, REST/SOAP",
      ],
    },
    {
      title: "DevOps & Delivery",
      items: [
        "CI/CD orchestration with Jenkins & GitHub Actions",
        "Git/GitHub, code review, and release readiness",
        "Metrics dashboards & shift-left pairing",
        "Cloud device labs: BrowserStack, TestFlight",
      ],
    },
    {
      title: "Collaboration",
      items: [
        "Agile/Scrum ceremonies & in-sprint testing",
        "Cross-functional communication & coaching",
        "UAT coordination & stakeholder reporting",
        "Process improvement & knowledge sharing",
      ],
    },
  ],
  education: {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "Premier University, Chittagong",
    period: "2018 – 2022",
    highlights: [
      "Graduated with strong focus on software engineering fundamentals and systems thinking.",
      "Led multiple academic QA projects focusing on SDLC, STLC, and automation practices.",
    ],
  },
  awards: [
    {
      title: "Employee of the Year",
      org: "TulipTech LTD",
      year: "2023",
      description:
        "Honored for exceptional QA craftsmanship, automation leadership, and process improvements that elevated release quality.",
    },
  ],
  certifications: [
    {
      title: "Advanced Certificate for Management Professionals (ACMP 4.0)",
      org: "IBA, University of Dhaka",
      year: "2025",
      description:
        "Executive leadership curriculum covering strategy, operations, and data-driven decision frameworks.",
    },
    {
      title: "Selenium WebDriver with Python — Framework",
      org: "Udemy",
      year: "2024",
      description:
        "Advanced automation bootcamp on building reusable Selenium frameworks, CI-ready reporting, and best practices.",
    },
    {
      title: "Cypress Web Automation Testing (Zero to Hero)",
      org: "Udemy",
      year: "2024",
      description:
        "Hands-on Cypress labs for component, API, and end-to-end suites with parallel CI orchestration.",
    },
    {
      title: "Agile Testing with TestRail",
      org: "TestRail Academy",
      year: "2023",
      description:
        "Focused certification on structuring agile QA plans, coverage maps, and executive-ready reporting inside TestRail.",
    },
    {
      title: "Crash Course with Python",
      org: "Google / Coursera",
      year: "2022",
      description:
        "Foundational Python specialization emphasizing automation fundamentals, scripting discipline, and debugging habits.",
    },
  ],
  contact: {
    availability: "Open to remote-friendly Sr. QA / SDET roles",
    responseTime: "Replies within 24 hours",
    note: "Let’s discuss how to accelerate quality for your next release.",
  },
};

