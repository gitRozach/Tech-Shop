import { MouseEventHandler } from "react";
import styles from "./styles/NoItemsToShow.module.scss";

export type INoItemsToDisplayProps = {
  textNoItemsToDisplay?: string;
  textAddItemsToDisplay?: string;
  onAddItemsHandler?: MouseEventHandler;
};

export const NoItemsToDisplay = (props: INoItemsToDisplayProps) => {
  const {
    textNoItemsToDisplay = "Aktuell haben Sie keinen Kurs gespeichert.",
    textAddItemsToDisplay = "Fügen Sie einen Kurs hinzu, um ihn hier zu sehen.",
    onAddItemsHandler = () => {},
  } = props;

  return (
    <div className={styles.root}>
      <p className={styles.noItemsToDisplay}>{textNoItemsToDisplay}</p>
      <p className={styles.addItemsToDisplay} onClick={onAddItemsHandler}>
        {textAddItemsToDisplay}
      </p>
    </div>
  );
};
