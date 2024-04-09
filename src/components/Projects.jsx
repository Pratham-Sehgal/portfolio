import React from "react";
import project from "./data/projects.json";
function Projects() {
  return (
    <>
      <div className="container projects my-3" id="project">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => {
            return (
              <>
                <div
                  key={data.id}
                  className="my-4 col-sm-6 col-md-4 mx-4 col-lg-3"
                >
                  <div
                    className="card bg-dark text-light"
                    style={{
                      width: "18rem",
                      boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5)",
                      border: "1px solid yellow",
                    }}
                    data-aos="flip-right"
      data-aos-duration="1000"
                  >
                    <div className="img d-flex p-3 justify-content-center align-content-center">
                      <img
                        src={`/assets/${data.imageSrc}`}
                        className="card-img-top"
                        alt="..."
                        style={{
                          width: "250px",
                          height: "200px",
                          border: "2px solid yellow",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
                      <a href={data.demo} className="btn btn-primary mx-3">
                        demo
                      </a>
                      <a href={data.source} className="btn btn-warning">
                        code
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
