import Home from "./assets/pages/home/Home"
import About from "./assets/pages/about/About"
import Blog from "./assets/pages/blog/Blog"
import Course from "./assets/pages/course/Course"
import Login from "./assets/pages/login/Login"
import Panel from "./assets/pages/panel/Panel"
import Setting from "./assets/pages/Setting"
import PrivateRoute from "./assets/pages/PrivateRoute"

const routes =[
    {path:'/', element:<Home/>},
    {path:'/about', element:<About/>},
    {path:'/blog/', element: <Blog/> , children:[
      {path:'yoga', element:<h4>یوگا</h4>},
      {path:'workout', element:<h4>بدنسازی</h4>},
      {path:'pilates', element:<h4>پیلاتس</h4>},
    ]},
    {path:'/course/:courseId', element:<Course/>},    
    {path:'/login', element:<Login/>},
    {path:'/panel', element:<PrivateRoute> <Panel/></PrivateRoute>},
    {path:'/setting', element:<PrivateRoute><Setting/></PrivateRoute>}


  ]

  export default routes;