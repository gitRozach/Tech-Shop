import styles from "./styles/Header.module.scss";

export type IHeaderBarProps = {
  children?: React.ReactNode;
};

export const HeaderBar = (props: IHeaderBarProps) => {
  const { children } = props;

  return <div className={styles.headerBar}>{children}</div>;
};
