// ** React Imports
import { Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs'

// ** Custom Components
import Avatar from '@components/avatar'
// import { useDispatch } from 'react-redux'
// ** Store & Actions
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)// ** Icons Imports
import { Slack, User, Settings, Database, Edit, MoreVertical, FileText, Trash2, Archive } from 'react-feather'
// ** Reacatstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import cart from '../../assets/images/avatars/cart.png'
import Switch from "react-switch"

// ** Renders Client Columns
// const renderClient = row => {
//   const stateNum = Math.floor(Math.random() * 6),
//     states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
//     color = states[stateNum]

//   if (row.avatar.length) {
//     return <Avatar className='me-1' img={row.avatar} width='32' height='32' />
//   } else {
//     return <Avatar color={color || 'primary'} className='me-1' content={row.fullName || 'John Doe'} initials />
//   }
// }

// ** Renders Role Columns
// const renderRole = row => {
//   const roleObj = {
//     subscriber: {
//       class: 'text-primary',
//       icon: User
//     },
//     maintainer: {
//       class: 'text-success',
//       icon: Database
//     },
//     editor: {
//       class: 'text-info',
//       icon: Edit2
//     },
//     author: {
//       class: 'text-warning',
//       icon: Settings
//     },
//     admin: {
//       class: 'text-danger',
//       icon: Slack
//     }
//   }

//   const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

//   return (
//     <span className='text-truncate text-capitalize align-middle'>
//       <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} me-50`} />
//       {row.role}
//     </span>
//   )
// }
// const handleConfirmText = (row) => {
//   console.log(row, 'this is user deletes')
//   return MySwal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       customClass: {
//           confirmButton: 'btn btn-primary',
//           cancelButton: 'btn btn-outline-danger ms-1'
//       },
//       buttonsStyling: false
//   }).then(function (result) {
//       if (result.value) {
//           MySwal.fire({
//               icon: 'success',
//               title: 'Deleted!',
//               text: 'Your category has been deleted.',
//               customClass: {
//                   confirmButton: 'btn btn-success'
//               }
//           })
//       }
//   })
// }

const statusObj = {
    Live_now: 'light-success',
    Paused: 'light-warning',
    Exhausted:'light-warning'
}

export const columns = [
  {
    name: 'On/Off',
    minWidth: '138px',
    sortField: 'On/Off',
    selector: row => row.onoff,
    cell: row => <span className='text-capitalize'> <Switch onChange={!row.onoff} checked={row.onoff} /></span>
  },
  {
    name: 'Campaign',
    sortable: true,
    minWidth: '300px',
    sortField: 'Campaign',
    selector: row => row.campaignn,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
  <Avatar className='me-1' img={cart} width='32' height='32' />
        <div className='d-flex flex-column'>
            <span className='fw-bolder'>{row.campaignn}</span>
          <small className='text-truncate text-muted mb-0'>{row.campaignd}</small>
        </div>
      </div>
    )
  },
    {
    name: 'Date ',
    minWidth: '230px', 
    sortField: 'Date ',
    selector: row => row.date,
    cell: row => <span className='text-capitalize '>{row.date ? row.date  : "-"}</span>
  },
    {
    name: 'Click',
    minWidth: '110px', 
    sortField: 'Click',
    selector: row => row.click,
    cell: row => <span className='text-capitalize text-center'>{row.click ? row.click  : "-"}</span>
  },
  {
    name: 'Budget',
    minWidth: '130px', 
    sortField: 'Budget',
    selector: row => row.click,
    cell: row => <span className='text-capitalize text-center'>{row.budget ? row.budget  : "-"}</span>
  },
  {
    name: 'location',
    minWidth: '130px', 
    sortField: 'location',
    selector: row => row.location,
    cell: row => <span className='text-capitalize text-center'>{row.location ? row.location  : "-"}</span>
  },
  {
    name: 'platform',
    minWidth: '130px', 
    sortField: 'platform',
    selector: row => row.platform,
    cell: row => <span className='text-capitalize text-center' id={row}>{<BsFacebook size={20}/>}</span>
  },
  {
    name: 'Status',
    minWidth: '138px',
    
    sortField: 'status',
    selector: row => row.isActive,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.isActive === true ? 'Live now' : 'Paused']}  pill>
      {row.isActive === true ? 'Live now' : 'Paused'}
      </Badge>
    )
  }
]


  // {
  //   name: 'Count Of Record',
  //   minWidth: '230px',
  //   
  //   sortField: 'Count Of Record',
  //   selector: row => row.quantity,
  //   cell: row => <span className='text-capitalize text-center'>{row.quantity ? row.quantity  : "-"}</span>
  // },
  // {
  //   name: 'Status',
  //   minWidth: '138px',
  //   
  //   sortField: 'status',
  //   selector: row => row.category_id.isActive,
  //   cell: row => (
  //     <Badge className='text-capitalize' color={statusObj[row.status]} pill>
  //       {row.isActive === true ? 'Active' : 'Inactive'}
  //     </Badge>
  //   )
  // }

//   {
//     name: 'Actions',
//     minWidth: '100px',
//     cell: row => (
//         <div className='column-action'>
//             <UncontrolledDropdown>
//                 <DropdownToggle tag='div' className='btn btn-sm'>
//                     <MoreVertical size={14} className='cursor-pointer' />
//                 </DropdownToggle>
//                 <DropdownMenu>
//                     <DropdownItem tag='a' className='w-100' >
//                     <Link  to='/editproduct'>
//                         <Edit size={14} className='me-50' />
//                         <span className='align-middle' >Edit</span>
//                         </Link>
//                     </DropdownItem>
//                     <DropdownItem
//                         tag='a'
//                         className='w-100'
                      
//                     >
//                         <FileText size={14} className='me-50' />
//                         <span className='align-middle' onClick={ () => {  } }>{row.status ? 'Make Inactive' : 'Make Active'}</span>
//                     </DropdownItem>
//                     <DropdownItem
//                         tag='a'
//                         className='w-100'
//                         onClick={() => handleConfirmText(row)}
//                     >
//                         <Trash2 size={14} className='me-50' />
//                         <span className='align-middle'>Delete</span>
//                     </DropdownItem>
//                 </DropdownMenu>
//             </UncontrolledDropdown>
//         </div>
//     )
// }

