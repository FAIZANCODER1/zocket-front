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
  UncontrolledDropdown,
  ButtonGroup,
  Progress
} from 'reactstrap'
import { GrLike } from 'react-icons/gr'
import { history } from '../../../history'
import img from '../../../assets/images/avatars/av.png'
import Avatar from '@components/avatar'
import c1 from '../../../assets/images/avatars/c1.png'
import c2 from '../../../assets/images/avatars/c2.png'
import c3 from '../../../assets/images/avatars/c3.png'
import c4 from '../../../assets/images/avatars/c4.png'
const Step4 = () => {
  return (
    <>
    <Card>
    <CardHeader className='border-bottom'>
          <CardTitle tag='h1' style={{fontWeight:'700'}}>Ready to go <small>(Step 4 of 4)</small></CardTitle>
        </CardHeader>
<Row>
  <Col md='3' className='m-2 p-2' style={{ width: '300px', marginLeft :'2px', border: '1.5px solid #F5F5F5'}}>
  <div className='d-flex justify-content-left align-items-center ' >
  <Avatar className='me-1' img={img} width='32' height='32' />
        <div className='d-flex flex-column'>
            <span className='fw-bolder'>Mukund Cake Shop</span>
          <small className='text-truncate text-muted mb-0'>Sponsored</small>
        </div>
      </div>
      <div className='mt-1'>
        <p>We are the best bakery around you. <br/>Please like my page to get updates <br/> on exciting  offers and discounts</p>      </div>
        <img src={c1} />
        <div className='d-flex justify-content-between align-items-center  pe-1'>

        <p>Mukund Cake Shop</p>
        <button><GrLike/> Like</button>
        </div>
  </Col>
  <Col md='3' className='m-2 p-2' style={{ width: '300px', marginLeft :'2px', border: '1.5px solid #F5F5F5'}}>
  <div className='d-flex justify-content-left align-items-center ' >
  <Avatar className='me-1' img={img} width='32' height='32' />
        <div className='d-flex flex-column'>
            <span className='fw-bolder'>Mukund Cake Shop</span>
          <small className='text-truncate text-muted mb-0'>Sponsored</small>
        </div>
      </div>
      <div className='mt-1'>
        <p>We are the best bakery around you. <br/>Please like my page to get updates <br/> on exciting  offers and discounts</p>      </div>
        <img src={c2} />
        <div className='d-flex justify-content-between align-items-center  pe-1'>

        <p>Mukund Cake Shop</p>
        <button><GrLike/> Like</button>
        </div>
  </Col>
  <Col md='3' className='m-2 p-2' style={{ width: '300px', marginLeft :'2px', border: '1.5px solid #F5F5F5'}}>
  <div className='d-flex justify-content-left align-items-center ' >
  <Avatar className='me-1' img={img} width='32' height='32' />
        <div className='d-flex flex-column'>
            <span className='fw-bolder'>Mukund Cake Shop</span>
          <small className='text-truncate text-muted mb-0'>Sponsored</small>
        </div>
      </div>
      <div className='mt-1'>
        <p>We are the best bakery around you. <br/>Please like my page to get updates <br/> on exciting  offers and discounts</p>      </div>
        <img src={c3} />
        <div className='d-flex justify-content-between align-items-center  pe-1'>

        <p>Mukund Cake Shop</p>
        <button><GrLike/> Like</button>
        </div>
  </Col>
  <Col md='3' className='m-2 p-2' style={{ width: '300px', marginLeft :'2px', border: '1.5px solid #F5F5F5'}}>
  <div className='d-flex justify-content-left align-items-center ' >
  <Avatar className='me-1' img={img} width='32' height='32' />
        <div className='d-flex flex-column'>
            <span className='fw-bolder'>Mukund Cake Shop</span>
          <small className='text-truncate text-muted mb-0'>Sponsored</small>
        </div>
      </div>
      <div className='mt-1'>
        <p>We are the best bakery around you. <br/>Please like my page to get updates <br/> on exciting  offers and discounts</p>      </div>
        <img src={c4} />
        <div className='d-flex justify-content-between align-items-center  pe-1'>

        <p>Mukund Cake Shop</p>
        <button><GrLike/> Like</button>
        </div>
  </Col>
</Row>
        </Card>
        {/* Start campaign */}
        <Row>
<Col xs={12} className = 'd-flex align-items-sm-center justify-content-end flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'>
 <Button className='add-new-user pe-2 pl-3' color='primary'  style={{borderRadius : '10px'}} onClick = {() => { history.push('/campaign') } }>
          
 Start campaign </Button>
</Col>
    </Row>
        </>
          )
}

export default Step4