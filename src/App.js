import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import BlogPage from "./components/blog/BlogPage";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Pracsec from "./components/practicesection/Pracsec";
import Quiz from "./components/quiz/Quiz";
import Aptitude from "./components/aptitude/Aptitude";
import Compre from "./components/compre/compre";
import Array from "./components/DSA/Array";
import Stack from "./components/DSA/Stack";
import Queue from "./components/DSA/Queue";
import LinkedList from "./components/DSA/LinkedList";
import Tree from "./components/DSA/Tree";
import Graph from "./components/DSA/Graph";
import Blog from "./components/blog/Blog";
import Team from "./components/team/Team";
import ResumeGenerator from "./components/ResumeGenerator/ResumeGenerator";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pracsec" element={<Pracsec />} />{" "}
        <Route exact path="/pracsec/compre" element={<Compre />} />
        <Route exact path="/pracsec/DSA/Array" element={<Array/>}/>
        <Route exact path="/pracsec/DSA/Stack" element={<Stack/>}/>
        <Route exact path="/pracsec/DSA/Queue" element={<Queue/>}/>
        <Route exact path="/pracsec/DSA/LinkedList" element={<LinkedList/>}/>
        <Route exact path="/pracsec/DSA/Tree" element={<Tree/>}/>
        <Route exact path="/pracsec/DSA/Graph" element={<Graph/>}/>
        <Route exact path="/pracsec/aptitude" element={<Aptitude />} /> {""}
        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/courses" element={<CourseHome />} />
        <Route exact path="/blog" element={<Blog />} />{" "}
        <Route exact path="/blog/BlogPage" element={<BlogPage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/ResumeGenerator" element={<ResumeGenerator />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
