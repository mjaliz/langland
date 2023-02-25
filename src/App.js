import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChooseLanguageScreen from "./screens/ChooseLanguageScreen";
import LanguagesListScreen from "./screens/LanguagesListScreen";
import MotivationScreen from "./screens/MotivationScreen";
import PastExperienceScreen from "./screens/PastExperienceScreen";
import TimeGoalScreen from "./screens/TimeGoalScreen";
import AgeScreen from "./screens/AgeScreen";
import FirstNameScreen from "./screens/FirstNameScreen";

import "./index.css";
import SignUpScreen from "./screens/SignUpScreen";

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
  {
    path: "/sign_up",
    element: <SignUpScreen />,
  },
  {
    path: "/sign_up/first_name",
    element: <FirstNameScreen />,
  },
]);

function App() {
  return (
    <div className="bg-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
