import React, {useState} from 'react'
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
import Avatar from '@components/avatar'

import {FcCallback} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import p1 from '../../../assets/images/avatars/p1.png'
import p2 from '../../../assets/images/avatars/p2.png'
import p3 from '../../../assets/images/avatars/p3.png'
import p4 from '../../../assets/images/avatars/p4.png'
import p5 from '../../../assets/images/avatars/p5.png'
import p6 from '../../../assets/images/avatars/p6.png'
import p7 from '../../../assets/images/avatars/p7.png'
import p8 from '../../../assets/images/avatars/p8.png'


const Step2 = ({handleNext}) => {
  const [checked, setChecked] = useState(false)
  console.log(checked)

  return (
    <>
    <Card>
    <CardHeader className='border-bottom'>
          <CardTitle tag='h1' style={{fontWeight:'700'}}>Choose the Product <small>(Step 2 of 4)</small></CardTitle>
        </CardHeader>
        <CardBody className='pt-1'>
        <Row>
          <Col md ='4' onClick={ () => { setChecked(!checked) } }>
          {/* <Link > */}
    
    <div className='d-flex justify-content-between align-items-center border border-light p-2'>
        <div>  <Avatar className='me-1' img={p1} width='32' height='32' />  </div>
      
     <div className='d-flex flex-column'>
    <span className='fw-bolder'>Bluberry cake with raw toppings</span>
  <small className='text-truncate text-muted mb-0'>Rs: 2,290</small>
</div>
<span >      <input type="checkbox" checked={checked} />

</span>
</div>
</Col>
<Col md ='4' onClick={ () => { setChecked(!checked) } }>

<div className='d-flex justify-content-between align-items-center border border-light p-2'>
<div>  <Avatar className='me-1' img={p2} width='32' height='32' />  </div>
      
     <div className='d-flex flex-column'>
    <span className='fw-bolder'>Chocolate truffle cake</span>
  <small className='text-truncate text-muted mb-0'>Rs: 2,190</small>
</div>
<span >      <input type="checkbox" checked={checked} />

</span>
</div>
</Col>
<Col md ='4' onClick={ () => { setChecked(!checked) } }>

<div className='d-flex justify-content-between align-items-center border border-light p-2'>
<div>  <Avatar className='me-1' img={p3} width='32' height='32' />  </div>
      
     <div className='d-flex flex-column'>
    <span className='fw-bolder'>Browine cake with fluffy cream</span>
  <small className='text-truncate text-muted mb-0'>Rs: 1,222</small>
</div>
<span >      <input type="checkbox" checked={checked} />

</span>
</div>
</Col>
{/* </Link> */}
         
        </Row>
        <Row className='mt-2'>
          <Col md ='4' onClick={ () => { setChecked(!checked) } }>
          {/* <Link > */}
    
    <div className='d-flex justify-content-between align-items-center border border-light p-2'>
        <div>  <Avatar className='me-1' img={p4} width='32' height='32' />  </div>
      
     <div className='d-flex flex-column'>
    <span className='fw-bolder'>Bluberry cake with raw toppings</span>
  <small className='text-truncate text-muted mb-0'>Rs: 2,290</small>
</div>
<span >      <input type="checkbox" checked={checked} />

</span>
</div>
</Col>
<Col md ='4' onClick={ () => { setChecked(!checked) } }>

<div className='d-flex justify-content-between align-items-center border border-light p-2'>
<div>  <Avatar className='me-1' img={p5} width='32' height='32' />  </div>
      
     <div className='d-flex flex-column'>
    <span className='fw-bolder'>Chocolate truffle cake</span>
  <small className='text-truncate text-muted mb-0'>Rs: 2,190</small>
</div>
<span >      <input type="checkbox" checked={checked} />

</span>
</div>
</Col>
<Col md ='4' onClick={ () => { setChecked(!checked) } }>

<div className='d-flex justify-content-between align-items-center border border-light p-2'>
<div>  <Avatar className='me-1' img={p6} width='32' height='32' />  </div>
      
     <div className='d-flex flex-column'>
    <span className='fw-bolder'>Browine cake with fluffy cream</span>
  <small className='text-truncate text-muted mb-0'>Rs: 1,222</small>
</div>
<span >      <input type="checkbox" checked={checked} />

</span>
</div>
</Col>
{/* </Link> */}
         
        </Row>
        <Row className='mt-2'>
          <Col md ='4' onClick={ () => { setChecked(!checked) } }>
          {/* <Link > */}
    
    <div className='d-flex justify-content-between align-items-center border border-light p-2'>
        <div>  <Avatar className='me-1' img={p7} width='32' height='32' />  </div>
      
     <div className='d-flex flex-column'>
    <span className='fw-bolder'>Bluberry cake with raw toppings</span>
  <small className='text-truncate text-muted mb-0'>Rs: 2,290</small>
</div>
<span >      <input type="checkbox" checked={checked} />

</span>
</div>
</Col>
<Col md ='4' onClick={ () => { setChecked(!checked) } }>

<div className='d-flex justify-content-between align-items-center border border-light p-2'>
<div>  <Avatar className='me-1' img={p8} width='32' height='32' />  </div>
      
     <div className='d-flex flex-column'>
    <span className='fw-bolder'>Chocolate truffle cake</span>
  <small className='text-truncate text-muted mb-0'>Rs: 2,190</small>
</div>
<span >      <input type="checkbox" checked={checked} />

</span>
</div>
</Col>
<Col md ='4' onClick={ () => { setChecked(!checked) } }>

<div className='d-flex justify-content-between align-items-center border border-light p-2'>
<div>  <Avatar className='me-1' img={p8} width='32' height='32' />  </div>
      
     <div className='d-flex flex-column'>
    <span className='fw-bolder'>Browine cake with fluffy cream</span>
  <small className='text-truncate text-muted mb-0'>Rs: 1,222</small>
</div>
<span >      <input type="checkbox" checked={checked} />

</span>
</div>
</Col>
{/* </Link> */}
         
        </Row>
          </CardBody>
          </Card>

          <Row>
<Col xs={12} className = 'd-flex align-items-sm-center justify-content-end flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'>
<Button className='add-new-user pe-2 pl-3' color='primary'  style={{borderRadius : '10px'}} onClick ={ () => { handleNext() }}>
          
          Continue </Button>
</Col>
    </Row>
          </>
  )
}

export default Step2