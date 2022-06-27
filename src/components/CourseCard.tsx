import { MouseEventHandler } from "react";
import { Button } from "./Button";
import styles from "./styles/CourseCard.module.scss";

// Hier haette ich eher Uebersetzungen verwendet, statt Hardcode-Deutsch zu uebergeben. (useTranslation hook)
export enum COURSEDIFFICULTY {
  entry = "Einsteiger",
  advanced = "Fortgeschritten",
  expert = "Experte",
}

export type ICourseCardProps = {
  title?: string;
  price?: number; // Currency wird hier ausgelassen und von Euro ausgegangen (Bad practice)
  difficulty?: COURSEDIFFICULTY;
  description?: string;
  tags?: Array<string>;
  onOrderHandler?: MouseEventHandler;
  onDeleteHandler?: MouseEventHandler;
};

export const CourseCard = (props: ICourseCardProps) => {
  const {
    title,
    price,
    difficulty,
    description,
    tags,
    onOrderHandler,
    onDeleteHandler,
  } = props;

  // Verwendung von Hardcode-Werten, Bad Practice aber wird zur Demonstration einfach gehalten
  return (
    <div className={styles.courseCardWrapper}>
      <div className={styles.courseCardTitle}>{title ?? "UNKNOWN TITLE"}</div>
      <div className={styles.courseCardPrice}>
        {`${price ? `${price} €` : "UNKNOWN PRICE"}`}
      </div>
      <div className={styles.courseCardDifficulty}>
        {`${difficulty ? `Level: ${difficulty}` : "UNKNOWN PRICE"}`}
      </div>
      <div className={styles.courseCardDescription}>
        {description ?? "UNKNOWN DESCRIPTION"}
      </div>
      <ul className={styles.courseCardTags}>
        {tags?.map((item, index) => (
          <li key={`courseCard${index}`} className={styles.tagItem}>
            {item}
          </li>
        )) ?? "UNKNOWN TAGS"}
      </ul>
      <div className={styles.courseCardActions}>
        <Button title="Jetzt bestellen" onClick={onOrderHandler} />
        <Button title="Kurs entfernen" onClick={onDeleteHandler} />
      </div>
    </div>
  );
};
