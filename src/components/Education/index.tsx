import Styles from "./Education.module.css";

interface IEducation {
  title: string;
  firstGrade: string;
  secondGrade: string;
}

export default function Education({
  title,
  firstGrade,
  secondGrade,
}: IEducation) {
  return (
    <div className={Styles.Education}>
      <h2 className={Styles.title}>{title}</h2>
      <p className={Styles.text}> {firstGrade}</p>
      <p className={Styles.text}>{secondGrade}</p>
    </div>
  );
}
