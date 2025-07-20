
import VantaBackground from "./component/VantaBackground";
import Header from "./component/Header";
import ExperienceTimeline from "./component/ExperienceTimeline";
import ContactSection from "./component/ContactPage";
import Footer from "./component/Footer";
import Skills from "./component/Skills";
import About from "./component/About";
import Projects from "./component/Projects";

export default function Page() {
  const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'React Native',
  'Tailwind CSS',
  'Redux',
  'Git',
  'REST APIs',
  'Node.js',
  'Firebase',
  'Figma',
];
const experiences = [
  {
    company: 'Capital Numbers Info Tech.',
    role: 'Software Developer',
    duration: 'June 2022 – Jan 2023',
    description: 'Built front end UI for clients collaborating with backend teams. Led performance optimizations and component libraries.',
  },
  {
    company: 'Regaltusk Pvt Ltd (Classspace)',
    role: 'Software Developer',
    duration: 'May 2020 - June 2022',
    description: 'Worked on classspace web app and mobile appplication, developing features like attendance, assignments, and notifications. Collaborated with designers to implement responsive layouts.',
  },
  // Add more experiences here
];
const education = [
  {
    company: "University of Wollongong",
    role: "Master of Computer Science",
    duration: "Feb 2023 – Dec 2024",
    description:
      "Relevant Coursework: Web Programming, Machine Learning, Cloud Computing, Advanced Algorithms. Studied in Wollongong, NSW, Australia.",
  },
  {
    company: "Sreenidhi Institute of Science & Technology",
    role: "Bachelor of Technology, Computer Science",
    duration: "Aug 2014 – May 2018",
    description:
      "Graduated with First Class. Studied under JNTUH in Hyderabad, India.",
  }
];

const projects = [
  {
    company: "Portfolio",
    role: "Full Stack Developer",
    duration: "Jan 2025 – Apr 2025",
    description: "My personal portfolio showcasing my skills, projects, and experiences. Built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "React"], 
    link: "https://github.com/yourusername/invoice-generator",
    demo: "https://invoice-demo.vercel.app",
    image: "/portfolio.png"
  },
  {
    company: "Real-Time Chat Application",
    role: "Frontend Developer",
    duration: "Oct 2023 – Dec 2023",
    description: "Developed a real-time chat interface using Next.js and Socket.IO with group messaging, emoji reactions, and dark mode toggle.",
    technologies: ["Next.js", "Socket.IO", "Tailwind CSS"],
    link: "https://github.com/yourusername/chat-app",
    demo: "https://chat-app-demo.vercel.app",
    image: "/portfolio.png"
  },
  {
    company: "Restaurant Finder Mobile App",
    role: "React Native Developer",
    duration: "Jul 2023 – Sep 2023",
    description: "Created a location-based food discovery app using React Native and Google Maps API. Users can filter restaurants by cuisine, rating, and proximity.",
    technologies: ["React Native", "Google Maps API", "Firebase"],
    link: "https://github.com/yourusername/restaurant-finder",
    demo: "https://restaurant-finder-demo.vercel.app",
    image: "/portfolio.png"
  },
  {
    company: "E-commerce Admin Dashboard",
    role: "Frontend Developer",
    duration: "Mar 2023 – Jun 2023",
    description: "Built an admin interface to manage products, orders, and analytics using React, Chart.js, and Tailwind. Implemented dynamic tables and export features.",
    technologies: ["React", "Chart.js", "Tailwind CSS"],
    link: "https://github.com/yourusername/admin-dashboard",
    demo: "https://admin-dashboard-demo.vercel.app",
    image: "/portfolio.png"
  },
  {
    company: "Portfolio Website Generator",
    role: "Solo Developer",
    duration: "Dec 2022 – Feb 2023",
    description: "Developed a web app that helps developers generate static portfolio websites from JSON. Includes template switching, theme preview, and GitHub Pages deploy.",
    technologies: ["React", "Tailwind", "GitHub Pages"],
    link: "https://github.com/yourusername/portfolio-generator",
    demo: "https://portfolio-generator-demo.vercel.app",
    image: "/portfolio.png"
  },
  {
    company: "Learning Management System",
    role: "Frontend Developer",
    duration: "Aug 2022 – Nov 2022",
    description: "Collaborated with a team to build an LMS platform for online courses. Integrated video lessons, progress tracking, and quizzes.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    link: "https://github.com/yourusername/lms-platform",
    demo: "https://lms-platform.vercel.app",
    image: "/portfolio.png"
  }, 
];
  return (
    <div  >
       
      <Header />
        
          <section id="home" className="h-screen flex items-center justify-center "> 
           <VantaBackground/>
        </section>
        <section id="about" className="h-screen flex items-center justify-center "> 
           <About/>
        </section>

        <section id="skills" className="h-screen flex   justify-center items-center">
           <Skills skills={skills}/>
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center scroll-mt-12">
          
            <div>
              <ExperienceTimeline experiences={experiences} title="Experiences"/> <br/>
          <ExperienceTimeline experiences={education} title="Education"/>
            </div>
        
        </section>
        <div className="mt-48"/>
         <section id="projects" className="min-h-screen flex items-center justify-center scroll-mt-16">
          <Projects projects={projects}/> 
        </section>
        <section id="contact" className="h-screen flex items-center justify-center ">
          <ContactSection />
        </section>
        <Footer />
    </div>
  );
}
