// ** React Imports
import { Fragment, useState, React, forwardRef } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)// ** Icons Imports

// ** Invoice List Sidebar
// import { history } from '../../../history'

// ** Table Columns
import { columns } from './Columns'
import { Link } from 'react-router-dom'
// ** Store & Actions
// import { getAllData, getData } from '../store'
// import { useDispatch } from 'react-redux'
// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Trash, Edit, MoreVertical, Trash2, Archive, Edit2, Plus } from 'react-feather'
// ** Utils
// import { selectThemeColors } from '@utils'
import ComponentSpinner from '../../@core/components/spinner/Loading-spinner'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'
// import { Slack, User, Settings, Database, Edit, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import UserSearch from './userSearch'
// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef((props, ref) => (
    <div className='form-check'>
      <Input type='checkbox' ref={ref} {...props} />
    </div>
  ))

const data = [
    {
        onoff: true,
        campaignpic:'',
        campaignn:'Bluberry cake Campaign',
        campaignd:'Created on 14 july',
        date:'25 jul 2020 - 01 Aug 2020',
        click: '300',
        budget:'INR 3400',
        location : 'chennai',
        platform : 'facebook',
        status : true
}
]
const UsersList = () => {
// const [refresh, setrefresh] = useState(0)
  // const dispatch = useDispatch()

  const handleConfirmText = async() => {
    return MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-outline-danger ms-1'
        },
        buttonsStyling: false
    }).then(async function (result) {
        if (result.value) {
            MySwal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Your product has been deleted.',
                customClass: {
                    confirmButton: 'btn btn-success'
                }
            })
        }
    })
  }
  // ** States
  // const [IsLoading, setIsLoading] = useState(false)
  const [search, setsearch] = useState('')
  const [total, setTotal] = useState(0)
//   const [data, setdata] = useState()

  const [page, setPage] = useState(0)
  const limit = 10
  // setTotal(2)
// const changeStatus = async(id, status) => {
// const res =  await dispatch(UserstatusApiCall(id, status))
// if (res.status === 200) {
//   setrefresh(Math.random() * 10)

// }

// }
// const deleteuserfunc = async(id) => {
//  const res = await dispatch(DeleteUser(id))
//  if (res.status === 200) {
//   setrefresh(Math.random() * 10)

//  }

// }
console.log(data)
  const updateColoum = [
    ...columns,
    {
        name: 'Actions',
        minWidth: '100px',
        cell: row => (
          <div className='column-action text-danger' id={row}>
                <Edit2 size={20} className='me-50 y' /> 
              <Trash2 size={20} className='me-50 ' onClick={ () => { handleConfirmText() } } /> 
          </div>
        )
      }
//     {
//       name: 'delete',
//       minWidth: '100px',
//       cell: row => (
//           <div className='column-action' id={row}>
             
//                       {/* <MoreVertical size={14} className='cursor-pointer' /> */}  
//                           <Trash2 size={14} className='me-50' />
//                           <span className='align-middle'>Delete</span>
          
          
//           </div>
//       )
//   }
  ]

  // ** Function to toggle sidebar


  // ** User filter options


  // ** Function in get data on page change


  // ** Custom Pagination
  const CustomPagination = () => {
    setTotal(2)
    const count = Math.ceil(total / limit)

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 0}
        activeClassName='active'
        forcePage={page}
        onPageChange={(val) => setPage(val.selected)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pe-1'}
      />
    )
  }

  return (
    <Fragment>
         <Row className='mt-2 mb-2'>
            <Col md='6'>
           <h1 className='bold'>Your Campaigns</h1> 
           <span>Check the list of campigns you created </span>
            </Col>
            <Col md='6' className='d-flex justify-content-end'> 
            <Link to='/addcampaign'> <Button className='add-new-user' color='primary'  style={{borderRadius : '10px'}}>
          
         <Plus/>Create new campaign </Button>   </Link>
            </Col>
          </Row>
      <Card className='overflow-hidden'>
        <div className='react-dataTable'>
       
          <DataTable
            noHeader
            subHeader
            sortServer
            pagination
            responsive
            paginationServer
            columns={updateColoum}
            // progressPending={IsLoading}
            progressComponent={<ComponentSpinner />}
            // onSort={handleSort}
            selectableRowsComponent={BootstrapCheckbox} // Pass the Checkbox component only
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            paginationComponent={CustomPagination}
            data={data}

            subHeaderComponent={
              <UserSearch
                search={search}
                setsearch={setsearch}
              />
            }
          />
        </div>
      </Card>

    </Fragment>
  )
}

export default UsersList
