import { BrowserRouter, Routes , Route } from "react-router-dom"
import Home from "./assets/pages/home/Home"
import About from "./assets/pages/about/About"
import Blog from "./assets/pages/blog/Blog"
import Course from "./assets/pages/course/Course"
import Login from "./assets/pages/login/Login"
import Panel from "./assets/pages/panel/Panel"


function App() {
  

  return (
    <>   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/panel" element={<Panel/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
