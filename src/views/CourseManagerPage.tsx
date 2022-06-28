import { MouseEventHandler, useState } from "react";
import styles from "./styles/CourseManagerPage.module.scss";
import { Button, BUTTONKIND } from "../components/Button";
import { VBoxLayout } from "../components/VBoxLayout";
import { COURSEDIFFICULTY } from "../components/CourseCard";

export type ICourseManagerPageProps = {
  children?: React.ReactNode;
  onCreateHandler?: MouseEventHandler;
};

export const CourseManagerPage = (props: ICourseManagerPageProps) => {
  const { onCreateHandler } = props;
  const [titleInput, setTitleInput] = useState<string>("");
  const [priceInput, setPriceInput] = useState<number>(0);
  const [levelInput, setLevelInput] = useState<string>(COURSEDIFFICULTY.entry);
  const [descriptionInput, setDescriptionInput] = useState<string>("");
  const [tagsInput, setTagsInput] = useState<string>("");

  return [
    titleInput,
    priceInput,
    levelInput,
    descriptionInput,
    tagsInput,
    <div className={styles.managerPageWrapper}>
      <VBoxLayout>
        <label>
          <p className={styles.inputLabel}>Kursname:</p>
          <input
            className={styles.inputText}
            type="text"
            id="courseNameInput"
            name="courseNameInput"
            onChange={(e) => setTitleInput(e.target.value)}
            required
          />
        </label>
        <label>
          <p className={styles.inputLabel}>Preis:</p>
          <input
            className={styles.inputText}
            type="text"
            id="coursePriceInput"
            name="coursePriceInput"
            onChange={(e) => setPriceInput(parseInt(e.target.value))}
            required
          />
        </label>
        <label>
          <p className={styles.inputLabel}>Level:</p>
          <select
            className={styles.inputSelect}
            id="courseDifficultyInput"
            name="courseDifficultyInput"
            defaultValue={COURSEDIFFICULTY.entry}
            onChange={(e) => setLevelInput(e.target.value)}
            required
          >
            {Object.values(COURSEDIFFICULTY).map((item, index) => (
              <option key={`option-${index}`}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          <p className={styles.inputLabel}>Beschreibung:</p>
          <input
            className={styles.inputText}
            type="text"
            id="courseDescriptionInput"
            name="courseDescriptionInput"
            onChange={(e) => setDescriptionInput(e.target.value)}
            required
          />
        </label>
        <label>
          <p className={styles.inputLabel}>Tags:</p>
          <input
            className={styles.inputText}
            type="text"
            id="courseTagsInput"
            name="courseTagsInput"
            onChange={(e) => setTagsInput(e.target.value)}
          />
        </label>
        <br />
        <Button
          title="Kurs erstellen"
          kind={BUTTONKIND.success}
          onClick={onCreateHandler}
        />
      </VBoxLayout>
    </div>,
  ];
};
