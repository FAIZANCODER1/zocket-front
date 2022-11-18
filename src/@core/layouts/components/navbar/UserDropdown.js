// ** React Imports
import { useEffect, useState } from 'react'
import profile from '../../../../assets/images/avatars/profilepic.png'
// ** Custom Components
import { Avatar } from '@material-ui/core'
// ** Utils
import { isUserLoggedIn } from '@utils'
// ** Store & Actions
// ** Third Party Components
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'

// ** Default Avatar Image
// import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'

const UserDropdown = () => {

  const [userData, setUserData] = useState(null)

  const ADMINUserData = JSON.parse(localStorage.getItem('silencio-user'))
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('silencio-user')))

    }
  }, [])
  // setupdate(userData)
  
// const logoutCall = () => {
//  const res = dispatch(logoutApiCall())
//  console.log(res, 'ew')
// }


  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
    <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
    <Avatar src={profile}  status='online'/>

      <div className='user-nav d-sm-flex d-none'>
        <span className='user-name fw-bold'>{(userData && userData['firstName'])}{''} {(userData && userData['lastName'])} </span>
      </div>
    </DropdownToggle>

  </UncontrolledDropdown>
  )
}

export default UserDropdown
