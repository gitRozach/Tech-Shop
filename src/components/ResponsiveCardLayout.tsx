import React from "react";
import styles from "./styles/ResponsiveCardLayout.module.scss";

export type IResponsiveCardLayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

export const ResponsiveCardLayout = (props: IResponsiveCardLayoutProps) => {
  const { children } = props;
  return <div className={styles.responsiveCardLayout}>{children}</div>;
};
