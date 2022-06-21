import styles from "./styles/VBoxLayout.module.scss";

export type IVBoxLayoutProps = {
  children?: React.ReactNode;
};

export const VBoxLayout = (props: IVBoxLayoutProps) => {
  const { children } = props;
  return <div className={styles.vBoxLayout}>{children}</div>;
};
