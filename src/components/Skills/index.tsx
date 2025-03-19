import Styles from "./Skills.module.css";
import { skills } from "../../data";

interface ISkills {
  title: string;
  skills: string[];
}

export default function Skills({ title, skills }: ISkills) {
  return (
    <div className={Styles.Skills}>
      <h2 className={Styles.title}>{title}</h2>
      <div style={{ display: "flex", paddingTop: "10px" }}>
        <p className={Styles.skill}>{skills[0]}</p>
        <p className={Styles.skill}>{skills[1]}</p>
        <p className={Styles.skill}>{skills[2]}</p>
        <p className={Styles.skill}>{skills[3]}</p>
        <p className={Styles.skill}>{skills[4]}</p>
        <p className={Styles.skill}>{skills[5]}</p>
      </div>
    </div>
  );
}
