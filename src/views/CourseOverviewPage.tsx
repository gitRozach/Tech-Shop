import { CourseCard, COURSEDIFFICULTY } from "../components/CourseCard";
import { ResponsiveCardLayout } from "../components/ResponsiveCardLayout";

export type ICourseOverviewPageProps = {
  children?: React.ReactNode;
};

export const CourseOverviewPage = (props: ICourseOverviewPageProps) => {
  const { children } = props;
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

  return (
    <ResponsiveCardLayout>
      {createSampleCards()}
      {children}
    </ResponsiveCardLayout>
  );
};
