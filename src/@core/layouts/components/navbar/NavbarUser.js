// ** Dropdowns Imports
import IntlDropdown from './IntlDropdown'
import CartDropdown from './CartDropdown'
import UserDropdown from './UserDropdown'
import NavbarSearch from './NavbarSearch'
import NotificationDropdown from './NotificationDropdown'
// import BuyPlan from './BuyPlan'
// ** Third Party Components
import { Sun, Moon, Gift, ShoppingCart } from 'react-feather'

// ** Reactstrap Imports
import { NavItem, NavLink, Button } from 'reactstrap'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <ul className='nav navbar-nav align-items-center ms-auto'>
      <span className='me-2'>Free trial ends in 2 days</span>
      <Button className='me-2'> <ShoppingCart/> Buy Plan</Button>
      <Gift className='me-2'/>
      <NotificationDropdown className='me-3' /> 
      <UserDropdown  className='me-2'/>
    </ul>
  )
}
export default NavbarUser
