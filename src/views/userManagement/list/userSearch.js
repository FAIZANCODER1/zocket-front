import React from 'react'
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
import { Link } from 'react-router-dom'
const UserSearch = ({ search, setsearch }) => {
  return (
    <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
      <Row>

        <Col
          xl='12'
          className='d-flex align-items-sm-center justify-content-xl-end justify-content-end flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
        >
          <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
            <Input
              id='search-invoice'
              className='ms-50 w-100'
              type='text'
              placeholder='Search'
              value={search}
              onChange={e => setsearch(e.target.value)}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserSearch