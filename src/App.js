import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChooseLanguageScreen from "./screens/ChooseLanguageScreen";
import LanguagesListScreen from "./screens/LanguagesListScreen";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChooseLanguageScreen />,
  },
  {
    path: "/languages_list",
    element: <LanguagesListScreen />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
