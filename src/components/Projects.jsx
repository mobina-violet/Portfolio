import React, { useState } from "react";
import img1 from "../assets/flowersshop.png";
import img2 from "../assets/pet.png";
import img3 from "../assets/image.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "Flowers Shop",
      description:
        "Complete E-commerce Platform with Product Management & Shopping Cart",
      techStack: ["Javascript", "Css", "Html"],
      image: img1,
      github: "",
      features: [
        "Complete Shopping Cart & Order Management System",
        "Product Catalog with Search & Filters",
      ],
    },
    {
      id: 2,
      title: "Vet Care",
      description:
        " Complete veterinary clinic management platform with appointment scheduling, patient records, and pet care tracking",
      techStack: ["React", "TailwindCSS", "React Router"],
      image: img2,
      github: "",
      features: [
        "Easy online appointment booking",
        "View pet medical history",
        "Digital vaccination certificates",
      ],
    },
    {
      id: 3,
      title: "Heaven",
      description:
        "Modern online furniture store with advanced filtering, shopping cart, and secure checkout system",
      techStack: ["React", "TailwindCSS", "React ", "Router", "Redux"],
      image: img3,
      github: "",
      features: [
        "Advanced product filtering by category & price",
        "Shopping cart with quantity management",
        "User authentication & profile",
        "Order tracking system",
      ],
    },
  ];
  return (
    <div id="project" className="min-h-screen w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-4">
          My project
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          My Portfolio
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-2xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0  opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center text-white transition hover:bg-blue-700">
                    more
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-lg border-2 border-blue-600 p-2 text-blue-600 transition hover:bg-blue-600 hover:text-white">
                    <FaGithub className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*modal */}
      {selectedProject && (
        <div className="inset-0 z-50 fixed flex items-center justify-center bg-black/70 p-4">
          <div className="max-w-lg rounded-xl dark:bg-gray-800 p-6 bg-white">
            <h3 className="font-bold mb-4 text-2xl ">
              {selectedProject.title}
            </h3>
            <ul className="mb-4 space-y-2">
              {selectedProject.features.map((feature, idx) => (
                <li key={idx} className=" flex gap-2 items-center">
                  <span className="text-blue-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedProject(null)}
              className="w-full rounded-lg bg-blue-600 py-2 text-white">
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Projects;
