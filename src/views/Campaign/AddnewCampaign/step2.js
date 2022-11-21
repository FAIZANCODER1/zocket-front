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

import { step2data } from './step2data'
const Step2 = ({handleNext, setstepdata, stepdata}) => {
const [err, seterr] = useState()
const nextpage = () => {
  if (stepdata) {
    handleNext() 
  } else {
    seterr('Please Select One')
  }
}
// console.log(ste)
  return (
    <>
    <Card>
    <CardHeader className='border-bottom'>
          <CardTitle tag='h1' style={{fontWeight:'700'}}>Choose the Product <small>(Step 2 of 4)</small></CardTitle>
        </CardHeader>
        <CardBody className='pt-1'>
<Row>
{
  step2data.map((product, i) => {
return (<Col md ='4' >
{/* <Link > */}

<div className='d-flex justify-content-between align-items-center border border-light p-2'>
<div>  <Avatar className='me-1' img={product.img} width='32' height='32' />  </div>
<div className='d-flex flex-column'>
<span className='fw-bolder'>{product.name}</span>
<small className='text-truncate text-muted mb-0'>Rs: {product.rs}</small>
</div>
<span >      <input type="checkbox" key={i} id = {`custom-checkbox${i}`} onClick={ () => { setstepdata(product) } }/>

</span>
</div>
</Col>
)
  })
}
<p className='text-danger'>{err}</p>
</Row>
          </CardBody>
          </Card>

          <Row>
<Col xs={12} className = 'd-flex align-items-sm-center justify-content-end flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'>
<Button className='add-new-user pe-2 pl-3' color='primary'  style={{borderRadius : '10px'}} onClick ={nextpage}>
          
          Continue </Button>
</Col>
    </Row>
          </>
  )
}

export default Step2