import React from "react";


//links to projects go here
function Projects() {
  const projects = [
    {
      id: 1,
      name: "",
      img: "",
      link: "",
    },
  ];

  return (
    <div>
      <div>
        <h3>My Projects</h3>
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <div>
                <div>
                  <img
                    src={project.img}
                    alt={project.name}
                  />
                  <h3>{project.name}</h3>
                </div>
                <div>
                  <a
                    href={`${project.link}`}
                    className="hover:underline ml-4">
                    Project link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;