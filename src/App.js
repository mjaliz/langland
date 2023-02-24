import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChooseLanguageScreen from "./screens/ChooseLanguageScreen";
import LanguagesListScreen from "./screens/LanguagesListScreen";
import MotivationScreen from "./screens/MotivationScreen";
import PastExperienceScreen from "./screens/PastExperienceScreen";
import TimeGoalScreen from "./screens/TimeGoalScreen";
import AgeScreen from "./screens/AgeScreen";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChooseLanguageScreen />,
  },
  {
    path: "/my_languages",
    element: <LanguagesListScreen />,
  },
  {
    path: "/motivation",
    element: <MotivationScreen />,
  },
  {
    path: "/past_experience",
    element: <PastExperienceScreen />,
  },
  {
    path: "/time_goal",
    element: <TimeGoalScreen />,
  },
  {
    path: "/age",
    element: <AgeScreen />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
