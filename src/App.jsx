import { useRoutes } from "react-router-dom"


import routes from "./routes"


function App() {
  let route = useRoutes(routes)

  return (
    route
  )
}

export default App
