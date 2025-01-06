import {
  Ellipsis,
  FileUser,
  Github,
  Linkedin,
  MailPlus,
  SquareCode,
  UserRoundCog,
} from "lucide-react";
import { Experience, Project } from "@/components";

function Home() {
  const steps = ["ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS"];

  const skills = [
    {
      icon: <SquareCode size={18} className="hidden md:inline" />,
      label: "Programming languages",
      skillItem: ["C#", "JavaScript", "TypeScript", "HTML/CSS", "Python"],
    },
    {
      icon: <Ellipsis size={18} className="hidden md:inline"  />,
      label: "Additional skills",
      skillItem: ["Git", "Github", "CI/CD", "Github Action"],
    },
    {
      icon: <UserRoundCog size={18} className="hidden md:inline" />,
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

  return (
    <div className="min-h-screen max-w-6xl flex flex-col md:flex-row scroll-smooth smooth-transition px-6 py-6 mx-auto">
      <aside id="navigator" className="">
        <span className="block text-4xl font-bold leading-tight">Nguyen Tuan Bao</span>
        <span className="block text-xl leading-snug text-secondary opacity-75 mb-4 mt-1 font-medium">Backend Developer</span>
        <div id="nav-steps" className="hidden md:flex flex-col gap-2">
          {steps.map((step) => {
            return <span className="font-bold text-xs">{step}</span>;
          })}
        </div>
        <div id="contacts" className="hidden md:flex flex-row gap-2">
          <Github size={24} />
          <Linkedin size={24}/>
          <MailPlus size={24}/>
          <FileUser size={24} />
        </div>
      </aside>
      <main className="flex flex-col gap-8">
        <article id="overview" className="leading-normal flex-1">
          <span className="block mb-4 font-bold text-secondary text-lg md:hidden">Overview</span>
          <p className="flex-1">
            I am an upcoming graduate pursuing a Bachelor’s degree in Software
            Engineering at the University of Information Technology (UIT). I have hands-on experience in building RESTful APIs using .NET Core
            and developing front-end applications with React and Typescript.
            Additionally, I have a basic understanding of Python, which I have
            applied to several projects.
          </p>
        </article>
        <section id="skills">
        <span className="block mb-4 font-bold text-secondary text-lg md:hidden">Skills</span>
          {skills.map((skill) => {
            return (
              <div className="flex flex-row gap-2 items-center">
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
        <section id="experience" className="mb-4">
        <span className="block mb-4 font-bold text-secondary text-lg md:hidden">Experience</span>
          {experiences.map((experience) => {
            return (
              <Experience
                time={experience.time}
                position={experience.position}
                company={experience.company}
                description={experience.description}
                technologies={experience.technologies}
              />
            );
          })}
        </section>
        <section id="projects">
        <span className="block mb-4 font-bold text-secondary text-lg md:hidden">Projects</span>
          {projects.map((project, index) => {
            return (
              <Project
                imgSrc={project.image}
                name={project.name}
                position={project.position}
                description={project.description}
                technologies={project.technologies}
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
