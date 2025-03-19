interface IExperiance {
  title: string;
  description: string;
  link: string;
  website: string;
}

export const experiances: IExperiance[] = [
  {
    title: "Интернет магазин - Device",
    description: "Самостоятельный проект по курсу HTML Academy по HTML, CSS",
    link: "https://github.com/kostin-five/shop-device",
    website: "https://kostin-five.github.io/shop-device/",
  },
  {
    title: "Макет музыкального плеера",
    description:
      "Макет плеера из Stepik для закрепления начальных знаний по HTML, CSS",
    link: "https://github.com/kostin-five/maket-player",
    website: "https://kostin-five.github.io/maket-player/",
  },
  {
    title: "Калькулятор",
    description:
      "Приложение, позволяющее выполнять базовые математические операции, такие как сложение, вычитание, умножение и деление.",
    link: "https://github.com/kostin-five/calculator",
    website: "https://kostin-five.github.io/calculator/",
  },
];

interface IEducation {
  title: string;
  firstGrade: string;
  secondGrade: string;
}

export const education: IEducation = {
  title: "Образование",
  firstGrade: "МАОУ СОШ №4, г.Лангепас 2013 — 2024",
  secondGrade: "РТУ МИРЭА, г.Москва 2024 — н.в.",
};

interface IAbout {
  title: string;
  city: string;
  tel: string;
  email: string;
}

export const about: IAbout = {
  title: "О себе",
  city: "г.Москва",
  tel: "+79324108838",
  email: "kostin052006@gmail.com",
};

interface ISkills {
  title: string;
  skills: string[];
}

export const skills: ISkills = {
  title: "Навыки",
  skills: ["HTML", "CSS", "JavaScript", "Git", "React", "TypeScript"],
};
