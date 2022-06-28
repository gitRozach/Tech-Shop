import styles from "./styles/App.module.scss";
import { HeaderBar } from "./HeaderBar";
import { CourseCard, COURSEDIFFICULTY, ICourseCardProps } from "./CourseCard";
import { Button, BUTTONKIND } from "./Button";
import { useEffect, useState } from "react";
import { CourseOverviewPage } from "../views/CourseOverviewPage";
import { CourseManagerPage } from "../views/CourseManagerPage";
import { NoItemsToDisplay } from "./NoItemsToDisplay";

const App = () => {
  const LOCALSTORAGEACCESSOR = "storedCards";
  const [storedCards, setStoredCards] = useState<Array<ICourseCardProps>>([]);
  const [formShowing, setFormShowing] = useState<boolean>(false);
  const [
    titleInput,
    priceInput,
    levelInput,
    descriptionInput,
    tagsInput,
    CourseManager,
  ] = CourseManagerPage({
    children: storedCards.map((item, index) => (
      <CourseCard
        cardId={item.cardId}
        title={item.title}
        description={item.description}
        difficulty={item.difficulty}
        price={item.price}
        tags={item.tags}
      />
    )),
    onCreateHandler: () => {
      setFormShowing(false);
      addNewCard({
        cardId: Date.now().toString(),
        description: descriptionInput.toString(),
        difficulty: levelInput.toString() as COURSEDIFFICULTY,
        price: parseInt(priceInput.toString()),
        tags: tagsInput
          ?.toString()
          .split(",")
          .map((val) => val.trim()),
        title: titleInput.toString(),
      });
    },
  });

  const addNewCard = (item: ICourseCardProps): boolean => {
    storedCards.forEach((currentItem) => {
      if (currentItem.title === item.title) {
        return false;
      }
    });

    const newStorageList = storedCards.concat([item]);
    setStoredCards(newStorageList);
    return true;
  };

  const deleteCard = (cardId: string): boolean => {
    const ITEMNOTFOUNDINDEXVAL = -1;
    let deleteIndex: number = ITEMNOTFOUNDINDEXVAL;

    storedCards.forEach((item, currentIndex) => {
      if (item.cardId === cardId) {
        deleteIndex = currentIndex;
      }
    });
    if (deleteIndex === ITEMNOTFOUNDINDEXVAL) return false;

    const newStorageList = [...storedCards];
    newStorageList.splice(deleteIndex, 1);
    setStoredCards(newStorageList);
    return true;
  };

  useEffect(() => {
    if (localStorage.getItem(LOCALSTORAGEACCESSOR)) {
      try {
        setStoredCards(
          JSON.parse(localStorage.getItem(LOCALSTORAGEACCESSOR) ?? "")
        );
        storedCards.forEach((i) => console.log(i));
      } catch (e) {
        setStoredCards([]);
      }
      console.log("Stored items: ", storedCards);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGEACCESSOR, JSON.stringify(storedCards));
    console.log("Storage: " + localStorage.getItem(LOCALSTORAGEACCESSOR));
  }, [storedCards]);

  return (
    <div className={styles.appWrapper}>
      <HeaderBar>
        <Button
          title="Kursübersicht"
          kind={BUTTONKIND.transparent}
          onClick={(_) => setFormShowing(false)}
        />
        <Button
          title="Kurs hinzufügen"
          kind={BUTTONKIND.transparent}
          onClick={(_) => {
            setFormShowing(true);
          }}
        />
      </HeaderBar>
      {formShowing ? (
        CourseManager
      ) : storedCards.length === 0 ? (
        <NoItemsToDisplay onAddItemsHandler={() => setFormShowing(true)} />
      ) : (
        <CourseOverviewPage
          children={storedCards.map((item, index) => (
            <CourseCard
              cardId={`card-${index}`}
              key={item.cardId}
              title={item.title}
              description={item.description}
              difficulty={item.difficulty}
              price={item.price}
              tags={item.tags}
              onDeleteHandler={() => deleteCard(item.cardId ?? "")}
            />
          ))}
        />
      )}
    </div>
  );
};

export default App;
