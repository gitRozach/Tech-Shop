import clsx from "clsx";
import { MouseEventHandler } from "react";
import styles from "./styles/Button.module.scss";

export enum BUTTONKIND {
  success = "SUCCESS",
  warning = "WARNING",
  danger = "DANGER",
  transparent = "TRANSPARENT",
  close = "CLOSE",
  default = "DEFAULT",
}

export type IButtonProps = {
  title?: string;
  kind?: BUTTONKIND;
  children?: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = (props: IButtonProps) => {
  const {
    title,
    kind = BUTTONKIND.default,
    children,
    className = "",
    onClick,
  } = props;
  const retrieveClassNameByKind = (kind: BUTTONKIND): string => {
    switch (kind) {
      case BUTTONKIND.success:
        return "successButton";
      case BUTTONKIND.warning:
        return "warningButton";
      case BUTTONKIND.danger:
        return "dangerButton";
      case BUTTONKIND.transparent:
        return "transparentButton";
      case BUTTONKIND.close:
        return "closeButton";
      case BUTTONKIND.default:
      default:
        return "defaultButton";
    }
  };

  return (
    <button
      className={clsx(
        styles.buttonBase,
        styles[retrieveClassNameByKind(kind)],
        styles[className]
      )}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
};
