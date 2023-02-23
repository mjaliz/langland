import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChooseLanguageScreen from "./screens/ChooseLanguageScreen";
import LanguagesListScreen from "./screens/LanguagesListScreen";
import MotivationScreen from "./screens/MotivationScreen";
import PastExperienceScreen from "./screens/PastExperienceScreen";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
