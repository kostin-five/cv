import Styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={Styles.Contacts}>
      <h2 className={Styles.title}>Контакты</h2>
      <p className={Styles.text}>
        Мой GitHub —{" "}
        <a
          href="https://github.com/kostin-five"
          className={Styles.link}
          target={"_blank"}
        >
          https://github.com/kostin-five
        </a>
      </p>
      <p className={Styles.text}>
        Мой telegram:{" "}
        <a
          href="https://t.me/kostin_five"
          className={Styles.link}
          target={"_blank"}
        >
          @kostin_five
        </a>
      </p>
    </div>
  );
}
