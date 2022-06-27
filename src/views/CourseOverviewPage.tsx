import { ResponsiveCardLayout } from "../components/ResponsiveCardLayout";

export type ICourseOverviewPageProps = {
  children?: React.ReactNode;
};

export const CourseOverviewPage = (props: ICourseOverviewPageProps) => {
  const { children } = props;

  return <ResponsiveCardLayout>{children}</ResponsiveCardLayout>;
};
