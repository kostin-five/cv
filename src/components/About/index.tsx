import Styles from "./About.module.css";
// import { about } from "../../data";

interface IAbout {
  title: string;
  city: string;
  tel: string;
  email: string;
}

export default function About({ title, city, tel, email }: IAbout) {
  return (
    <div className={Styles.About}>
      <h2 className={Styles.title}>{title}</h2>
      <p className={Styles.text}>{city}</p>
      <p className={Styles.text}>{tel}</p>
      <p className={Styles.text}>{email}</p>
    </div>
  );
}
