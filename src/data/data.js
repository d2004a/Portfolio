// ============================================================
//  data.js — All portfolio content in one editable file
//  Replace placeholder values with your real info as needed.
// ============================================================

export const personalInfo = {
  name: "Divyanshu Agarwal",
  role: "MERN Stack Developer",
  tagline: "Engineering Scalable Full-Stack Solutions",
  email: "agarwaldivyanshu824@gmail.com",
  phone: "+91 7375933937",
  location: "Jaipur",
  bio: `Software Engineer specializing in high-performance Full-Stack development and Cloud architecture. With deep expertise in the MERN stack and Microsoft Azure certifications, I focus on building scalable, user-centric applications that bridge the gap between elegant design and robust backend infrastructure.`,
  resumeUrl: "/Divyanshu_Agarwal_Resume.pdf", // place your resume.pdf in /public folder
  avatar: "/avatar.jpg",
  social: {
    github: "https://github.com/d2004a",
    linkedin: "https://linkedin.com/in/divyanshuagarwal02",
    twitter: "https://twitter.com/divyanshudev",
  },
  roles: [
    "MERN Stack Developer", 
    "Full Stack Engineer",
    "React Specialist",
    "Cloud Enthusiast",
    "Open Source Contributor",
  ],
};

// ─────────────────────────────────────────────
//  SKILLS
// ─────────────────────────────────────────────
export const skills = {
  frontend: [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "JavaScript", level: 88, icon: "🟨" },
    { name: "Tailwind CSS", level: 85, icon: "🎨" },
    { name: "HTML5 / CSS3", level: 92, icon: "🌐" },
  ],
  backend: [
    { name: "Node.js", level: 82, icon: "🟩" },
    { name: "Express.js", level: 80, icon: "🚂" },
    { name: "REST APIs", level: 85, icon: "🔌" },
    { name: "MongoDB", level: 78, icon: "🍃" },
  ],
  tools: [
    { name: "Git / GitHub", level: 88, icon: "🐙" },
    { name: "Docker (Basic)", level: 55, icon: "🐳" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Postman", level: 80, icon: "📮" },
  ],
};

export const skillIcons = [
  { name: "React", color: "#61DAFB", icon: "SiReact" },
  { name: "Node.js", color: "#68A063", icon: "SiNodedotjs" },
  { name: "MongoDB", color: "#4DB33D", icon: "SiMongodb" },
  { name: "Express", color: "#ffffff", icon: "SiExpress" },
  { name: "JavaScript", color: "#F7DF1E", icon: "SiJavascript" },
  { name: "Tailwind", color: "#38BDF8", icon: "SiTailwindcss" },
  { name: "Git", color: "#F05032", icon: "SiGit" },
  { name: "Docker", color: "#2496ED", icon: "SiDocker" },
];

// ─────────────────────────────────────────────
//  PROJECTS  (replace with your real projects)
// ─────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Chatify — Real-Time Chat Application",
    description:
      "A real-time chat application using MERN stack supporting 100+ concurrent users with low-latency messaging. Features JWT-based authentication and REST APIs.",
    longDesc:
      "Built with MERN stack, Zustand, Resend, and Socket.io. Features include image sharing via Cloudinary, real-time notifications, and a responsive UI using Tailwind CSS. Improved security by 30% via robust auth.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Zustand", "Cloudinary"],
    github: "https://github.com/d2004a/chatify.git",
    live: "https://chatify-eta-two.vercel.app/",
    image: "/projects/chatify.png",
    color: "#7c3aed",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Get Me a Coffee — Crowdfunding Platform",
    description:
      "A crowdfunding platform enabling 50+ users to support creators through secure payments via Razorpay. Built with Next.js and MongoDB.",
    longDesc:
      "Developed using Next.js and MongoDB. Integrated Razorpay payment gateway with real-time verification (95% success rate). Features SEO-friendly dynamic pages and creator dashboards.",
    tech: ["Next.js", "MongoDB", "Mongoose", "Razorpay", "Tailwind CSS"],
    github: "https://github.com/d2004a/get-me-a-coffee.git",
    live: "https://get-me-a-coffee-wine.vercel.app/",
    image: "/projects/coffee.png",
    color: "#0ea5e9",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "HRMS — Human Resource Management System",
    description:
      "A full-stack HRMS platform streamlining employee management, attendance tracking, and leave workflows for organizations.",
    longDesc:
      "Built using the MERN stack with a scalable architecture, this system provides role-based access for Admin and Employees. It includes features like attendance tracking, leave management, task monitoring, and real-time dashboard insights. The admin panel enables employee management, leave approvals, and performance monitoring, while the employee portal supports profile management and request handling. Designed with Vite and Tailwind CSS for a fast, responsive, and modern UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vite"],
    github: "https://github.com/d2004a/chatify.git", 
    live: "https://hr-ms-frontend-ten.vercel.app/", 
    image: "/projects/hrms.png",
    color: "#6366f1",
    featured: true,
    category: "Full Stack", 
  },
  {
    id: 4,
    title: "EduNex — Learning Management System (LMS)",
    description:
      "An LMS platform enabling 200+ users to browse and enroll in courses with secure authentication and Stripe payment integration.",
    longDesc:
      "Full-stack MERN application with Clerk authentication and Stripe integration. Features role-based access control (Admin, Instructor, Student) and optimized data retrieval.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Clerk"],
    github: "https://github.com/d2004a/LMS.git",
    live: "https://lms-psi-plum.vercel.app/",
    image: "/projects/lms.png",
    color: "#22d3ee",
    featured: false,
    category: "Full Stack",
  } 
];

// ─────────────────────────────────────────────
//  EXPERIENCE
// ─────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    company: "Etelligens Technologies",
    role: "Full Stack Developer Intern",
    period: "Feb 2026 – May 2026 ",
    description:
      "Built and maintained MERN stack features for the HR Management System used by 200+ employees. Implemented leave management, attendance tracking, and admin dashboards. Reduced API response time by 40% via query optimisation.",
    tech: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
    type: "internship",
  },
  // {
  //   id: 2,
  //   company: "Freelance / Self-Directed",
  //   role: "MERN Stack Developer",
  //   period: "Jun 2023 – Present",
  //   description:
  //     "Designed and delivered 4 full-stack web applications end-to-end. Specialised in e-commerce platforms, SaaS tools, and enterprise dashboards. Maintained a 5-star client satisfaction record.",
  //   tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Docker"],
  //   type: "freelance",
  // },
];

// ─────────────────────────────────────────────
//  EDUCATION
// ─────────────────────────────────────────────
export const education = [
  {
    id: 1,
    institution: "JECRC University — Jaipur",
    degree: "B.Tech — Computer Science & Engineering",
    specialization: "Cloud Computing",
    period: "2022 – 2026",
    description:
      "Specialized track in Cloud Computing. Coursework: Data Structures, Operating Systems, DBMS, Computer Networks, Cloud Architecture.",
    grade: "CGPA: 7.5 / 10",
    icon: "🎓",
  },
  {
    id: 2,
    institution: "D.A.V. Sr. Sec. School — Jaipur",
    degree: "Higher Secondary (12th) — Science Stream",
    period: "2021 – 2022",
    description:
      "Physics, Chemistry, Mathematics with Computer Science. Active in coding club and competitive programming.",
    grade: "Percentage: 81%",
    icon: "📚",
  },
];

// ─────────────────────────────────────────────
//  RESUME HIGHLIGHTS (for Resume section)
// ─────────────────────────────────────────────
export const resumeHighlights = [
  { label: "Projects Built", value: "10+", icon: "🚀" },
  { label: "Technologies", value: "15+", icon: "🛠️" },
  { label: "GitHub Commits", value: "200+", icon: "💻" },
  { label: "Internship", value: "1 (4 months)", icon: "🏢" },
];

export const certifications = [
  { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", year: "2024" },
  { name: "Microsoft Azure AI Fundamentals", issuer: "Microsoft", year: "2024" },
  { name: "Microsoft Dynamics 365 Fundamentals", issuer: "Microsoft", year: "2024" },
];
