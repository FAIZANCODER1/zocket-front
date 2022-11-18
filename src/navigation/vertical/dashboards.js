// ** Icons Import
import { Home, Activity, ShoppingCart, Music, Mic, User, Circle, Speaker, Radio, Users } from 'react-feather'

export default [
  {
    id: 'Home',
    title: 'Home',
    icon: <Home />,
    navLink: '/home'
  },
  {
    id: 'campaign',
    title: 'campaign',
    icon: <Radio size={20} />,
    navLink: '/campaign'
  }, 
  {
    id : 'products',
    title : 'Products',
    icon: <ShoppingCart />,
    navLink : '/products'
  },
  {
    id : 'customers',
    title : 'Customers',
    icon: <Users />,
    navLink : '/customers'
  }
]
