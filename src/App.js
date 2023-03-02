import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChooseLanguageScreen from "./screens/ChooseLanguageScreen";
import LanguagesListScreen from "./screens/LanguagesListScreen";
import MotivationScreen from "./screens/MotivationScreen";
import PastExperienceScreen from "./screens/PastExperienceScreen";
import TimeGoalScreen from "./screens/TimeGoalScreen";
import AgeScreen from "./screens/AgeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import NameScreen from "./screens/NameScreen";
import EmailScreen from "./screens/EmailScreen";
import PasswordScreen from "./screens/PasswordScreen";

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
  {
    path: "/sign_up",
    element: <SignUpScreen />,
  },
  {
    path: "/sign_up/first_name",
    element: <NameScreen />,
  },
  {
    path: "/sign_up/email",
    element: <EmailScreen />,
  },
  {
    path: "/sign_up/password",
    element: <PasswordScreen />,
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
