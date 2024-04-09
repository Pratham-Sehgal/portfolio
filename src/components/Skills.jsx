import skills from "./data/skills.json";

function Skills() {
  return (
    <>
      <div className="container skills" id="Skills">
        <h1>SKILLS</h1>
        <div className="items" >
        {skills.map((data) => {
          return (
            <>
              
                <div className="item" key={data.id}
                data-aos="flip-down"
                data-aos-duration="1000">
                    <img src={`/assets/${data.imageSrc}`} alt="" />
                    <h3>{data.title}</h3>
                </div>
              
            </>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default Skills;
