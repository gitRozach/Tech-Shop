import styles from "./styles/App.module.scss";
import { HeaderBar } from "./HeaderBar";
import { CourseCard, COURSEDIFFICULTY, ICourseCardProps } from "./CourseCard";
import { ResponsiveCardLayout } from "./ResponsiveCardLayout";
import { Button } from "./Button";
import { useEffect, useMemo, useState } from "react";
import { VBoxLayout } from "./VBoxLayout";

const App = () => {
  const LOCALSTORAGEACCESSOR = "storedCards";
  const [storedCards, setStoredCards] = useState(new Array());
  const [formShowing, setFormShowing] = useState<boolean>(false);

  const addNewCard = (item: ICourseCardProps) => {
    const newStorageList = storedCards?.concat([item]);
    setStoredCards(storedCards.concat([item]));
  };

  const [titleInput, setTitleInput] = useState<string>("");
  const [priceInput, setPriceInput] = useState<number>(0);
  const [levelInput, setLevelInput] = useState<string>("");
  const [descriptionInput, setDescriptionInput] = useState<string>("");
  const [tagsInput, setTagsInput] = useState<string>("");

  const createSampleCards = () => (
    <>
      <CourseCard
        title="ASP .NET Core"
        price={40}
        difficulty={COURSEDIFFICULTY.entry}
        description="This course is awesome!"
        tags={["SPA", "Komponentenbasiert", "Typescript", "Web Development"]}
      />
      <CourseCard
        title="ASP .NET Core"
        price={80}
        difficulty={COURSEDIFFICULTY.advanced}
        description="This course is awesome!"
        tags={["SPA", "Komponentenbasiert", "Typescript", "Web Development"]}
      />
      <CourseCard
        title="ASP .NET Core"
        price={120}
        difficulty={COURSEDIFFICULTY.expert}
        description="This course is awesome!"
        tags={["SPA", "Komponentenbasiert", "Typescript", "Web Development"]}
      />
      <CourseCard
        title="Vue.js"
        price={40}
        difficulty={COURSEDIFFICULTY.entry}
        description="This course is awesome!"
        tags={["RESTful", "Stark typisiert"]}
      />
      <CourseCard
        title="Vue.js"
        price={80}
        difficulty={COURSEDIFFICULTY.advanced}
        description="This course is awesome!"
        tags={["RESTful", "Stark typisiert"]}
      />
      <CourseCard
        title="Vue.js"
        price={120}
        difficulty={COURSEDIFFICULTY.expert}
        description="This course is awesome!"
        tags={["RESTful", "Stark typisiert"]}
      />
    </>
  );

  useEffect(() => {
    if (localStorage.getItem(LOCALSTORAGEACCESSOR)) {
      try {
        setStoredCards(
          JSON.parse(localStorage.getItem(LOCALSTORAGEACCESSOR) ?? "")
        );
        storedCards.forEach((i) => console.log(i));
      } catch (e) {
        setStoredCards(new Array());
      }
      console.log("Stored items: ", storedCards);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGEACCESSOR, JSON.stringify(storedCards));
    console.log("Storage: " + localStorage.getItem(LOCALSTORAGEACCESSOR));
  }, [storedCards]);

  const renderOverviewPage = useMemo(
    () => <ResponsiveCardLayout>{createSampleCards()}</ResponsiveCardLayout>,
    []
  );

  const renderFormPage = useMemo(() => {
    return (
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
          />
        </label>
        <label>
          <p>Beschreibung:</p>
          <input
            type="text"
            id="courseDescriptionInput"
            name="courseDescriptionInput"
          />
        </label>
        <label>
          <p>Tags:</p>
          <input type="text" id="courseTagsInput" name="courseTagsInput" />
        </label>
        <br />
        <Button
          title="Kurs erstellen"
          hasColor
          onClick={() =>
            addNewCard({
              title: titleInput,
              price: priceInput,
              difficulty: levelInput as COURSEDIFFICULTY,
              description: descriptionInput,
              tags: [],
            })
          }
        />
      </VBoxLayout>
    );
  }, []);

  return (
    <div className={styles.appWrapper}>
      <HeaderBar>
        <Button
          title="Kursübersicht"
          hasColor={false}
          onClick={(_) => setFormShowing(false)}
        />
        <Button
          title="Kurs hinzufügen"
          hasColor={false}
          onClick={(_) => {
            setFormShowing(true);
          }}
        />
      </HeaderBar>
      {formShowing ? renderFormPage : renderOverviewPage}
    </div>
  );
};

export default App;
