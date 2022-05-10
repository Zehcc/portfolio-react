import "./styles/main.scss";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import Home from "./pages/Home/Home";
import DetailedProjectPage from "./pages/DetailedProject/DetailedProjectPage";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='project/:name' element={<DetailedProjectPage />} />
          <Route path='*' element={<Navigate to='home' />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
