import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChooseLanguage from "./screens/ChooseLanguage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChooseLanguage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
