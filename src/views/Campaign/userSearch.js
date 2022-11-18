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
import Select from 'react-select'
import { selectThemeColors } from '@utils'

const UserSearch = ({ search, setsearch }) => {
  return (
    <>

    <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
      <Row>
        <Col
          md='6'
          className='d-flex align-items-sm-center justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
        >
          <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
            <Input
              id='search-invoice'
              className='ms-50 w-100 rounded'
              placeholder='Search for the campaign'
              type='text'
              value={search}
              onChange={e => setsearch(e.target.value)}
            />
          </div>

       
        </Col>
        <Col md='6' className='d-flex justify-content-between'>
<div  className='d-flex align-items-center'>
    <span className='me-1'>Platform:</span>
    <Select
                isClearable={false}
                // value={currentRole}
                // options={roleOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
                placeholder='All'
                />
</div>
<div  className='d-flex align-items-center'>
    <span className='me-1'>Status:</span>
    <Select
                isClearable={false}
                // value={currentRole}
                // options={roleOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
                placeholder='true'
                />
</div>
<div  className='d-flex align-items-center'>
    <Select
                isClearable={false}
                // value={currentRole}
                // options={roleOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
                placeholder= 'Last 30day'
                />
</div>

        </Col>
      </Row>
    </div>
    </>
  )
}

export default UserSearch