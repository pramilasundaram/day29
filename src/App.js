import "./styles.css";
import Component from "./components/Component";
import "./sb-admin-2.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/studentaction/profile";
import Action from "./pages/studentaction/action";
import Student from "./pages/student";
import Teacher from "./pages/teachers";
import Taction from "./pages/teacheraction/action";
import Tprofile from "./pages/teacheraction/profile";
import Provider from "./Provider";
import Students from "./pages/teachers/studentlist";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Component />
          <Routes>
            <Route path="/student" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/action" element={<Action />} />
            <Route path="/action/:id" element={<Action />} />
            <Route path="/taction" element={<Taction />} />
            <Route path="/taction/:id" element={<Taction />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/students/:id" element={<Students />} />
            <Route path="/tprofile/:id" element={<Tprofile />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
