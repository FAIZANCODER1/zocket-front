// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)// ** Icons Imports

// ** Invoice List Sidebar
// import { history } from '../../../history'

// ** Table Columns
import { columns } from './columns'
import { Link } from 'react-router-dom'
// ** Store & Actions
// import { getAllData, getData } from '../store'
import { useDispatch } from 'react-redux'
// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Trash, Edit, MoreVertical, Trash2 } from 'react-feather'
// ** Utils
// import { selectThemeColors } from '@utils'
import ComponentSpinner from '../../../@core/components/spinner/Loading-spinner'

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

const UsersList = () => {
const [refresh, setrefresh] = useState(0)
  const dispatch = useDispatch()

  // const handleConfirmText = async(row) => {
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
  //   }).then(async function (result) {
  //    const res =  await dispatch(ProductDeleteApiCall(row))
  
  //    if (res.status === 200) {
  //     setrefresh(row)
      
  //    }
  //       if (result.value) {
  //           MySwal.fire({
  //               icon: 'success',
  //               title: 'Deleted!',
  //               text: 'Your product has been deleted.',
  //               customClass: {
  //                   confirmButton: 'btn btn-success'
  //               }
  //           })
  //       }
  //   })
  // }
  // ** States
  const [IsLoading, setIsLoading] = useState(false)
  const [search, setsearch] = useState('')
  const [total, setTotal] = useState(0)
  const [data, setdata] = useState()

  const [page, setPage] = useState(0)
  const limit = 10
const changeStatus = async(id, status) => {
const res =  await dispatch(UserstatusApiCall(id, status))
if (res.status === 200) {
  setrefresh(Math.random() * 10)

}

}
const deleteuserfunc = async(id) => {
 const res = await dispatch(DeleteUser(id))
 if (res.status === 200) {
  setrefresh(Math.random() * 10)

 }

}

  const updateColoum = [
    ...columns,
    {
      name: 'Actions',
      minWidth: '100px',
      cell: row => (
          <div className='column-action'>
              <UncontrolledDropdown>
                  <DropdownToggle tag='div' className='btn btn-sm'>
                      <MoreVertical size={14} className='cursor-pointer' />
                  </DropdownToggle>
                  <DropdownMenu>
                      <DropdownItem
                          tag='a'
                          className='w-100'
                          onClick={() => { changeStatus(row.id, row.isActive === true ? 'false' : 'true') }}
                      >
                          <FileText size={14} className='me-50' />
                          <span className='align-middle'>{row.isActive === true ? 'Make Inactive' : 'Make Active'}</span>
                      </DropdownItem>
                      <DropdownItem
                          tag='a'
                          className='w-100'
                          onClick={() => deleteuserfunc(row.id)}
                      >
                          <Trash2 size={14} className='me-50' />
                          <span className='align-middle'>Delete</span>
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
          </div>
      )
  }
  ]

  // ** Function to toggle sidebar


  // ** User filter options


  // ** Function in get data on page change


  // ** Custom Pagination
  const CustomPagination = () => {
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
            progressPending={IsLoading}
            progressComponent={<ComponentSpinner />}
            // onSort={handleSort}
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
