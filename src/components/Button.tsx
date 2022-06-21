import { MouseEventHandler } from "react";
import styles from "./styles/Button.module.scss";

export type IButtonProps = {
  title: string;
  hasColor?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = (props: IButtonProps) => {
  const { title, hasColor = true, onClick } = props;
  return (
    <button
      className={hasColor ? styles.coloredButton : styles.transparentButton}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
