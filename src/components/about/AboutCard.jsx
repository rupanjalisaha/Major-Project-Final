import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome" style={{marginBottom:"200px"}}>
        <div className="container flexSB">
          <div className="left row" style={{top:"95px"}}>
            <img src="./images/about.webp" alt="" />
          </div>
          <div className="right row" style={{top:"100px", color:"black", fontFamily:"times-new-roman"}}>
            <Heading
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning Expertise"
            />
            <ol style={{lineHeight: "1cm", padding:"5px", color:"royalblue", fontFamily:"sans-serif"}}>
              <li>
              1. Flexibility: Online learning offers flexibility in scheduling, allowing learners to access materials and participate in classes at their own convenience.
              </li>
              <li>
              2. Accessibility: It provides access to education for individuals who may not have easy access to traditional brick-and-mortar institutions due to geographical or physical constraints.
              </li>
              <li>
              3. Diverse Learning Opportunities: Online platforms offer a wide range of courses and subjects, allowing learners to explore diverse topics tailored to their interests and goals.
              </li>
              <li>
              4. Cost-effectiveness: Online learning often eliminates expenses associated with commuting, accommodation, and traditional textbooks, making education more affordable for many learners.
              </li>
              <li>5. Self-paced Learning: Learners can progress at their own pace, reviewing materials as needed and taking the time required to fully understand concepts.
                </li>
                <li>6. Skill Development: Online courses often focus on practical skills relevant to today's workforce, offering opportunities for career advancement and personal development.</li>
                <li>7. Continuous Learning: Online platforms provide opportunities for lifelong learning, allowing individuals to acquire new knowledge and skills throughout their lives.</li>
            </ol>
            </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;

