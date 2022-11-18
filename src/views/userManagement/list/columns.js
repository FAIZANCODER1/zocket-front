// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
// import { useDispatch } from 'react-redux'
// ** Store & Actions
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)// ** Icons Imports
import { Slack, User, Settings, Database, Edit, MoreVertical, FileText, Trash2, Archive } from 'react-feather'
// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

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
  active: 'light-success',
  inactive: 'light-warning'
}

export const columns = [
  {
    name: 'Name',
    minWidth: '138px',
    sortField: 'First Name',
    selector: row => row.firstName,
    cell: row => <span className='text-capitalize'>{row.firstName}{' '} {row.lastName}</span>
  },
    {
    name: 'Apple ID',
    minWidth: '230px', 
    sortField: 'Apple ID',
    selector: row => row.appleId,
    cell: row => <span className='text-capitalize '>{row.appleId ? row.appleId  : "-"}</span>
  },
    {
    name: 'Phone',
    minWidth: '230px', 
    sortField: 'Phone',
    selector: row => row.phone,
    cell: row => <span className='text-capitalize text-center'>{row.phone ? row.phone  : "-"}</span>
  },
  {
    name: 'Status',
    minWidth: '138px',
    
    sortField: 'status',
    selector: row => row.isActive,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.isActive === true ? 'active' : 'false']}  pill>
      {row.isActive === true ? 'Active' : 'inActive'}
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

