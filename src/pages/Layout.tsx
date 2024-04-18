import NavBar from "../components/NavBar"
import {Outlet} from 'react-router-dom'
const Layout = () => {
  throw new Error('Sorry You Have an None Subject Error')
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
