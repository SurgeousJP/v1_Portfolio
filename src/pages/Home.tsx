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
      icon: <SquareCode />,
      label: "Programming languages",
      skillItem: ["C#", "JavaScript", "TypeScript", "HTML/CSS", "Python"],
    },
    {
      icon: <Ellipsis />,
      label: "Additional skills",
      skillItem: ["Git", "Github", "CI/CD", "Github Action"],
    },
    {
      icon: <UserRoundCog />,
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
      time: "September 2024 – November 2024",
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
    <div className="min-h-screen flex flex-col">
      <aside id="navigator" className="">
        <span className="block">Nguyen Tuan Bao</span>
        <span className="block">Backend Developer</span>
        <div id="nav-steps" className="flex flex-col gap-2">
          {steps.map((step) => {
            return <span>{step}</span>;
          })}
        </div>
        <div id="contacts" className="flex flex-row gap-2">
          <Github />
          <Linkedin />
          <MailPlus />
          <FileUser />
        </div>
      </aside>
      <main className="flex flex-col gap-4">
        <article id="about">
          <p>
            I am an upcoming graduate pursuing a Bachelor’s degree in Software
            Engineering at the University of Information Technology (UIT), with
            an expected graduation date of June 2025. Currently, I have achieved
            a GPA of 8.71/10. Apart from my academic achievements, I possess
            strong English proficiency, with an IELTS Academic Band Score of
            7.5, including a perfect score of 9.0 in Reading.
          </p>
          <p>
            I have hands-on experience in building RESTful APIs using .NET Core
            and developing front-end applications with React and Typescript.
            Additionally, I have a basic understanding of Python, which I have
            applied to several projects.
          </p>
        </article>
        <section id="skills">
          {skills.map((skill) => {
            return (
              <div className="flex flex-row gap-2">
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
        <section id="experience">
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
          {projects.map((project) => {
            return (
              <Project
                imgSrc={project.image}
                name={project.name}
                position={project.position}
                description={project.description}
                technologies={project.technologies}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default Home;
