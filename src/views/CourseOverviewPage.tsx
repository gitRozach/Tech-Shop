import { ResponsiveCardLayout } from "../components/ResponsiveCardLayout";
import styles from "./styles/CourseOverviewPage.module.scss";

export type ICourseOverviewPageProps = {
  children?: React.ReactNode;
};

export const CourseOverviewPage = (props: ICourseOverviewPageProps) => {
  const { children } = props;

  return (
    <div className={styles.overviewPageWrapper}>
      <ResponsiveCardLayout>{children}</ResponsiveCardLayout>
    </div>
  );
};
