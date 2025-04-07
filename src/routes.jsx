import Home from "./assets/pages/home/Home"
import About from "./assets/pages/about/About"
import Blog from "./assets/pages/blog/Blog"
import Course from "./assets/pages/course/Course"
import Login from "./assets/pages/login/Login"
import Panel from "./assets/pages/panel/Panel"

import PrivateRoute from "./assets/pages/PrivateRoute"

// اگر Layoutی برای اشتراک هدر/فوتر داری می‌تونی اینجا ایمپورتش کنی
// در غیر این صورت Home به عنوان Layout موقتی استفاده شده

const routes = [
  {
    path: "/",
    element: <Home />, // می‌تونی بجاش یه Layout کلی بذاری
    children: [
      { index: true, element: <Home /> }, // این مهم‌ترین بخشه برای روت اصلی
      { path: "about", element: <About /> },
      {
        path: "blog",
        element: <Blog />,
        children: [
          { path: "yoga", element: <h4>یوگا</h4> },
          { path: "workout", element: <h4>بدنسازی</h4> },
          { path: "pilates", element: <h4>پیلاتس</h4> },
        ],
      },
      { path: "course/:courseId", element: <Course /> },
      { path: "login", element: <Login /> },
      { path: "panel", element: <PrivateRoute><Panel /></PrivateRoute> },
    ],
  },
]

export default routes