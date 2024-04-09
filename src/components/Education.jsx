
import education from './data/education.json'
function Education() {
  return (
    <>
    <div className="container ed"
    id='education'>
        <h1>EDUCATION</h1>
        {education.map((data) => {
          return (
            <>
              <div 
              key={data.id} className="ed-items text-center my-5"
              data-aos="zoom-in"
      data-aos-duration="1000">
                <div className="right">
                  <h2>{data.role}</h2>
                  <h3>{data.organisation}</h3>
                  <h4>
                    <span style={{color:"yellowgreen"}}>&nbsp; 
                        {data.startDate} to &nbsp; 
                    {data.endDate}</span>
                  
                  </h4>
                 
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default Education