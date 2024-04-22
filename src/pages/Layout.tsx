import NavBar from "../components/NavBar"
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <div>
          <NavBar/>
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout
