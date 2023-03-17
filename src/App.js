import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
import HomeScreen from "./screens/HomeScreen";
import VideoScreen from "./screens/VideoScreen";

import { PrivateRoute } from "./components/PrivateRoutes";

import "./index.css";

function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomeScreen />} />
          </Route>
          <Route exact path="/start" element={<ChooseLanguageScreen />} />
          <Route exact path="/my_languages" element={<LanguagesListScreen />} />
          <Route exact path="/motivation" element={<MotivationScreen />} />
          <Route
            exact
            path="/past_experience"
            element={<PastExperienceScreen />}
          />
          <Route path="/time_goal" element={<TimeGoalScreen />} />
          <Route path="/age" element={<AgeScreen />} />
          <Route path="/sign_up" element={<SignUpScreen />} />
          <Route path="/sign_up/first_name" element={<NameScreen />} />
          <Route path="/sign_up/email" element={<EmailScreen />} />
          <Route path="/sign_up/password" element={<PasswordScreen />} />
          <Route path="/video" element={<VideoScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
