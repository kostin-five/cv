import Styles from "./Experiance.module.css";
import Project from "../Project";
import { experiances } from "../../data";

export default function Experiance() {
  return (
    <>
      <div className={Styles.Experiance}>
        <h2 className={Styles.title}>Учебные проекты</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-evenly",
          }}
        >
          {experiances.map((experiance, index) => (
            <Project key={index} {...experiance} />
          ))}
        </div>
      </div>
    </>
  );
}
