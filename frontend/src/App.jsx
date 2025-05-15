import { BrowserRouter } from "react-router";
import { useRoutes } from 'react-router-dom'
import routes from './routes/routes.jsx'

function App() {
  const routing = useRoutes(routes)
  return routing
}
export default App
