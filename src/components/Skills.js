import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../utilits";

const Skills = ({ dark }) => {
  const [data, setData] = useState({});
  useEffect(async () => {
    setData(await fatchData("/static/info.json"));
  }, []);
  // useEffect(() => {
  //   window.addEventListener("scroll", activeSkillProgress);
  // }, []);

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>Skills</span>
                <h3>I develop new skills regularly to keep me competitive</h3>
                <p></p>
              </div>
              <div
                className="dodo_progress wow fadeInUp skills"
                data-wow-duration="1s"
              >
                <div className="skill-img">
                  <img src={`img/skills/html.png`} alt="" />
                  <h5>HTML</h5>
                </div>
                <div className="skill-img">
                  <img src={`img/skills/css.png`} alt="" />
                  <h5>CSS</h5>
                </div>
                <div className="skill-img">
                  <img src={`img/skills/javascript.png`} alt="" />
                  <h5>Javascript</h5>
                </div>
                <div className="skill-img">
                  <img src={`img/skills/shopify.png`} alt="" />
                  <h5>Shopify</h5>
                </div>
                <div className="skill-img">
                  <img src={`img/skills/github.png`} alt="" />
                  <h5>Github</h5>
                </div>
                <div className="skill-img">
                  <img src={`img/skills/litmus.png`} alt="" />
                  <h5>Litmus</h5>
                </div>
                <div className="skill-img">
                  <img src={`img/skills/mailchimp.png`} alt="" />
                  <h5>Mailchimp</h5>
                </div>
                <div className="skill-img">
                  <img src={`img/skills/figma.png`} alt="" />
                  <h5>Figma</h5>
                </div>
                <div className="skill-img">
                  <img src={`img/skills/photoshop.png`} alt="" />
                  <h5>Photoshop</h5>
                </div>
                <div className="skill-img">
                  <img src={`img/skills/analytics.png`} alt="" />
                  <h5>Google Analytics</h5>
                </div>

                {/*{data &&
                  data.skills &&
                  data.skills.map((skill, i) => (
                    <div
                      className="progress_inner skillsInner___"
                      data-value={skill.value}
                      data-color={skill.color}
                      key={i}
                    >
                      <span>
                        <span className="label">{skill.name}</span>
                        <span className="number">{skill.value}%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
                  ))}*/}
              </div>
            </div>
            {/* <div className="right">
              <img src={`img/skills/shopify.png`} alt="image" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
