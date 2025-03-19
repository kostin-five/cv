import Styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.heading}>Богдан Костин</h1>
      <p className={Styles.grade}>Frontend Developer</p>
    </header>
  );
}
