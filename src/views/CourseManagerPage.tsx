import { MouseEventHandler, useState } from "react";
import { Button } from "../components/Button";
import { VBoxLayout } from "../components/VBoxLayout";

export type ICourseManagerPageProps = {
  children?: React.ReactNode;
  onCreateHandler?: MouseEventHandler;
};

export const CourseManagerPage = (props: ICourseManagerPageProps) => {
  const { onCreateHandler } = props;
  const [titleInput, setTitleInput] = useState<string>("");
  const [priceInput, setPriceInput] = useState<number>(0);
  const [levelInput, setLevelInput] = useState<string>("");
  const [descriptionInput, setDescriptionInput] = useState<string>("");
  const [tagsInput, setTagsInput] = useState<string>("");

  return [
    titleInput,
    priceInput,
    levelInput,
    descriptionInput,
    tagsInput,
    <VBoxLayout>
      <label>
        <p>Kursname:</p>
        <input
          type="text"
          id="courseNameInput"
          name="courseNameInput"
          onChange={(e) => setTitleInput(e.target.value)}
        />
      </label>
      <label>
        <p>Preis:</p>
        <input
          type="text"
          id="coursePriceInput"
          name="coursePriceInput"
          onChange={(e) => setPriceInput(parseInt(e.target.value))}
        />
      </label>
      <label>
        <p>Level:</p>
        <input
          type="text"
          id="courseDifficultyInput"
          name="courseDifficultyInput"
          onChange={(e) => setLevelInput(e.target.value)}
        />
      </label>
      <label>
        <p>Beschreibung:</p>
        <input
          type="text"
          id="courseDescriptionInput"
          name="courseDescriptionInput"
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
      </label>
      <label>
        <p>Tags:</p>
        <input
          type="text"
          id="courseTagsInput"
          name="courseTagsInput"
          onChange={(e) => setTagsInput(e.target.value)}
        />
      </label>
      <br />
      <Button title="Kurs erstellen" hasColor onClick={onCreateHandler} />
    </VBoxLayout>,
  ];
};
