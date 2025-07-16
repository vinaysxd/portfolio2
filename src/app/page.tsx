
import VantaBackground from "./component/VantaBackground";
import Header from "./component/Header";
import ExperienceTimeline from "./component/ExperienceTimeline";
import ContactSection from "./component/ContactPage";
import Footer from "./component/Footer";
import Skills from "./component/Skills";
import About from "./component/About";
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
    company: 'Gameloft Brisbane',
    role: 'Frontend Developer',
    duration: 'Feb 2023 – Present',
    description: 'Built UI for mobile games using React Native. Led performance optimizations and component libraries.',
  },
  {
    company: 'Sanico Software',
    role: 'Junior Web Developer',
    duration: 'Jul 2022 – Jan 2023',
    description: 'Assisted in developing responsive web interfaces using React and Tailwind CSS.',
  },
  // Add more experiences here
];
const projects = [
  {
    company: "Smart Invoice Generator",
    role: "Full Stack Developer",
    duration: "Jan 2024 – Apr 2024",
    description:
      "Built a web app for freelancers to generate, download, and email invoices. Integrated MongoDB for storage, PDFKit for exports, and role-based authentication.",
  },
  {
    company: "Real-Time Chat Application",
    role: "Frontend Developer",
    duration: "Oct 2023 – Dec 2023",
    description:
      "Developed a real-time chat interface using Next.js and Socket.IO with group messaging, emoji reactions, and dark mode toggle.",
  },
  {
    company: "Restaurant Finder Mobile App",
    role: "React Native Developer",
    duration: "Jul 2023 – Sep 2023",
    description:
      "Created a location-based food discovery app using React Native and Google Maps API. Users can filter restaurants by cuisine, rating, and proximity.",
  },
  {
    company: "E-commerce Admin Dashboard",
    role: "Frontend Developer",
    duration: "Mar 2023 – Jun 2023",
    description:
      "Built an admin interface to manage products, orders, and analytics using React, Chart.js, and Tailwind. Implemented dynamic tables and export features.",
  },
  {
    company: "Portfolio Website Generator",
    role: "Solo Developer",
    duration: "Dec 2022 – Feb 2023",
    description:
      "Developed a web app that helps developers generate static portfolio websites from JSON. Includes template switching, theme preview, and auto-deploy via GitHub Pages.",
  },
];

export default function Home() {
  return (
    <div  >
       
      <Header />
        <VantaBackground/>
          
        
        <section id="about" className="h-screen flex items-center justify-center "> 
           <About/>
        </section>

        <section id="skills" className="h-screen flex   justify-center ">
           <Skills skills={skills}/>
        </section>

        <section id="projects" className="  flex items-center justify-center ">
          <div>
            <ExperienceTimeline experiences={experiences} title="Experiences"/> <br/>
          <ExperienceTimeline experiences={projects} title="Projects"/>
          </div>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center ">
          <ContactSection />
        </section>
        <Footer />
    </div>
  );
}
