import {
  Ellipsis,
  FileUser,
  Github,
  Linkedin,
  MailPlus,
  SquareCode,
  Sun,
  SunMoon,
  UserRoundCog,
} from "lucide-react";
import { Experience, Project } from "@/components";
import { useEffect, useState } from "react";

function Home() {
  const steps = ["OVERVIEW", "SKILLS", "EXPERIENCE", "PROJECTS"];

  const skills = [
    {
      icon: <SquareCode size={18} className="hidden md:inline md:mt-1" />,
      label: "Programming languages",
      skillItem: ["C#", "JavaScript", "TypeScript", "HTML/CSS", "Python"],
    },
    {
      icon: <Ellipsis size={18} className="hidden md:inline md:mt-1" />,
      label: "Additional skills",
      skillItem: ["Git", "Github", "CI/CD", "Github Action"],
    },
    {
      icon: <UserRoundCog size={18} className="hidden md:inline md:mt-1" />,
      label: "Soft skills",
      skillItem: [
        "Problem Solving",
        "Adaptability",
        "Communication",
        "Teamwork",
        "Attention to Detail",
      ],
    },
  ];

  const experiences = [
    {
      time: "Sep 2024 – Nov 2024",
      position: ".NET Developer Intern",
      company: "HQSoft",
      description:
        "Worked under the guidance of a Senior Developer and Team Leader in the Back Office division, developing UI screens with forms and grids using Ext.NET and implementing logic through JavaScript to ensure seamless user interactions. Designed and integrated SQL Server stored procedures into projects utilizing Entity Framework for efficient database operations. Responsibilities included handling tasks such as UI modifications, bug fixes, and feature enhancements.",
      technologies: [".NET Framework", "JavaScript", "Ext.NET", "SQL Server"],
    },
  ];

  const projects = [
    {
      image:
        "https://upload-os-bbs.hoyolab.com/upload/2022/08/20/179440628/f90aff5620395aa7d52cba5caa8ef935_5317349950595887244.jpg",
      name: "Bookstore",
      position: "Backend Developer",
      description:
        "Developed a simplified backend for a bookstore application following Microservice Architecture. The project involved the creation of multiple services using .NET Core (Identity, Order, Basket and Catalog APIs) and containerized by Docker. Utlized Python to build a recommendation API for book recommendation.",
      technologies: [
        "Docker",
        ".NET Core",
        "Python",
        "RabbitMQ",
        "Stripe",
        "PostgreSQL",
        "Redis",
      ],
    },
    {
      image: "https://static.zerochan.net/Elysia.full.3894734.jpg",
      name: "Recommendation Project with MoviesLen Dataset",
      position: "Backend Developer",
      description:
        "Collaborated in a team of two to develop a movie review website and integrated recommendation algorithms with Python. Built a robust RESTful backend server in Go, wrote unit tests, and performed mutation testing to ensure code quality. Applied and implemented advanced recommendation algorithms, including Content-Based, Collaborative Filtering, Matrix Factorization, and Hybrid Recommender.",
      technologies: ["React", "Go", "Python", "MongoDB"],
    },
    {
      image: "https://images5.alphacoders.com/127/1273369.jpg",
      name: "Titanic ‑ Machine Learning from Disaster",
      position: "Developer",
      description:
        "Trained a model to predict survival outcomes for a Kaggle ML competition (link). Handled the provided dataset and applied a linear regression model using scikit-learn, achieving accurate predictions when tested with input data",
      technologies: ["Python"],
    },
  ];

  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const sectionEls = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      sectionEls.forEach((sectionEl) => {
        if (window.scrollY >= sectionEl.offsetTop - 20) {
          setActiveSection(sectionEl.id);
        }
      });
    });
  }, []);

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark' || false);

  const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem("theme", "dark");
  }

  const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem("theme", "light");
  }

  const toggleDarkMode = () => {
    console.log(!isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    isDarkMode ? enableDarkMode() : disableDarkMode();
  }, [isDarkMode]);

  return (
    <div className="min-h-screen max-w-7xl flex flex-col md:flex-row scroll-smooth smooth-transition px-6 py-6 pt-12 mx-auto relative">
      <aside
        id="navigator"
        className="h-full md:w-[280px] md:fixed md:z-1 md:top-0 md:pr-6 md:pt-12 relative"
      >
        <button
          className="w-9 h-9 bg-white border-1 border-gray-300 rounded-lg absolute top-0 right-0 md:bottom-[20px] md:left-0 md:top-auto md:right-auto flex items-center cursor-pointer z-50 outline-none "
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <SunMoon className="w-[24px] h-[24px] text-black  mx-auto cursor-pointer md:hover:opacity-50" />
          ) : (
            <Sun className="w-[24px] h-[24px] text-[#888888] mx-auto cursor-pointer md:hover:text-white" />
          )}
        </button>
        <span className="block text-3xl font-bold leading-tight">
          Nguyen Tuan Bao
        </span>
        <span className={`block text-xl leading-snug text-secondary opacity-75 mb-[60px] mt-1 font-medium ${isDarkMode ? "tertiary-dark-mode-text" : ""}`}>
          Backend Developer
        </span>
        <div id="nav-steps" className="hidden md:flex flex-col gap-2 mb-[60px]">
          <div className="">
            <ul className="vertical-steps smooth-transition">
              {steps.map((step) => {
                return (
                  <a className="nav-link" href={`#${step.toLowerCase()}`}>
                    <li
                      className={`font-bold text-xs ${
                        activeSection === step.toLowerCase() ? "active" : ""
                      }`}
                    >
                      {step}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
        <div id="contacts" className="hidden md:flex flex-row gap-4 mt-4">
          <a href="https://github.com/SurgeousJP" target="_blank">
            <Github
              size={24}
              className="cursor-pointer hover:text-secondary md:hover:opacity-75"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tuanbaonguyen2311"
            target="_blank"
          >
            <Linkedin
              size={24}
              className="cursor-pointer hover:text-secondary md:hover:opacity-75"
            />
          </a>
          <a href="mailto:baosurgeous@gmail.com" target="_blank">
            <MailPlus
              size={24}
              className="cursor-pointer hover:text-secondary md:hover:opacity-75"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1ninJQWzDxiBrimO2HEijklqAtmgrY_4u/view?usp=sharing"
            target="_blank"
          >
            <FileUser
              size={24}
              className="cursor-pointer hover:text-secondary md:hover:opacity-75"
            />
          </a>
        </div>
      </aside>
      <main className="relative md:ml-[280px] flex flex-col gap-8 md:pl-6">
        <section id="overview" className="leading-normal flex-1 mb-8">
          <span className={`block mb-4 font-bold text-secondary text-lg md:hidden ${isDarkMode ? "section-heading-dark-mode-text" : ""}`}>
            Overview
          </span>
          <p className="flex-1">
            I am an upcoming graduate pursuing a Bachelor’s degree in Software
            Engineering at the University of Information Technology (UIT). I
            have hands-on experience in building RESTful APIs using .NET Core
            and developing front-end applications with React and Typescript.
            Additionally, I have a basic understanding of Python, which I have
            applied to several projects.
          </p>
        </section>
        <section id="skills" className="mb-8">
          <span className={`block mb-4 font-bold text-secondary text-lg md:hidden ${isDarkMode ? "section-heading-dark-mode-text" : ""}`}>
            Skills
          </span>
          {skills.map((skill) => {
            return (
              <div className="flex flex-row gap-2 md:items-start lg:items-center">
                {skill.icon}
                <p>
                  {skill.label}:{" "}
                  {skill.skillItem.map((skillItem, index) => {
                    return (
                      <span>
                        <strong>{skillItem}</strong>
                        {index < skill.skillItem.length - 1 && <span>, </span>}
                      </span>
                    );
                  })}
                </p>
              </div>
            );
          })}
        </section>
        <section id="experience" className="mb-8">
          <span className={`block mb-4 font-bold text-secondary text-lg md:hidden ${isDarkMode ? "section-heading-dark-mode-text" : ""}`}>
            Experience
          </span>
          {experiences.map((experience) => {
            return (
              <Experience
                time={experience.time}
                position={experience.position}
                company={experience.company}
                description={experience.description}
                technologies={experience.technologies}
                isDarkMode={isDarkMode}
              />
            );
          })}
        </section>
        <section id="projects" className="mb-8">
          <span className={`block mb-4 font-bold text-secondary text-lg md:hidden ${isDarkMode ? "section-heading-dark-mode-text" : ""}`}>
            Projects
          </span>
          {projects.map((project, index) => {
            return (
              <Project
                imgSrc={project.image}
                name={project.name}
                position={project.position}
                description={project.description}
                technologies={project.technologies}
                isDarkMode={isDarkMode}
                isLastItem={index === projects.length - 1}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default Home;
