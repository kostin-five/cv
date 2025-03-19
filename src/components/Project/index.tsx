import Styles from "./Project.module.css";

type project = {
  title: string;
  description: string;
  link: string;
  website: string;
};

export default function Project({
  title,
  description,
  link,
  website,
}: project) {
  return (
    <section className={Styles.Project}>
      <h3 className={Styles.Title}>{title}</h3>
      <p className={Styles.Text}>{description}</p>
      <p>
        <a className={Styles.Link} href={link} target={"_blank"}>
          {"Githab"}
        </a>{" "}
        |{" "}
        <a className={Styles.Link} href={website} target={"_blank"}>
          {"Сайт проекта"}
        </a>
      </p>
    </section>
  );
}
