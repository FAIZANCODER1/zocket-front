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
  import {FcCallback} from 'react-icons/fc'
  import {BiMessageAltDetail, BiStore} from 'react-icons/bi'
  import {SlUserFollow} from 'react-icons/sl'
  import { Link } from 'react-router-dom'
  import {MdPeople} from 'react-icons/md'
  import {GrView, GrCatalog} from 'react-icons/gr'
  import {GiClick} from 'react-icons/gi'
import {FaAppStore} from 'react-icons/fa'
  //   import {} from 'react-feather'
const Step1 = ({handleNext}) => {
    const [check1, setcheck1] = useState(false)
const [check2, setcheck2] = useState(false)
const [check3, setcheck3] = useState(false)
const [check4, setcheck4] = useState(false)
const [check5, setcheck5] = useState(false)
const [check6, setcheck6] = useState(false)
const [check7, setcheck7] = useState(false)
const [check8, setcheck8] = useState(false)
const [check9, setcheck9] = useState(false)
  return (
    <>
    <Card>
    <CardHeader className='border-bottom'>
          <CardTitle tag='h1' style={{fontWeight:'700'}}>What you want to do? <span className='fs-6'>(Step 1 of 4)</span></CardTitle>
        </CardHeader>
        <CardBody className='pt-1'>
         <Row>
            <Col md = '4' onClick={ () =>  { setcheck1(!check1) } } >
           
    
            <div className='d-flex justify-content-left align-items-center border border-light p-2' style={{position : 'relative'}}>
                <div>  <FcCallback size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Get Leads as calls</span>
          <small className='text-truncate text-muted mb-0'>Reach broad audience and get leads through calls</small>
        </div>
        <span >      <input type="checkbox" checked={check1} style={{position : 'absolute', top : '0px', right : "0px"}} />

</span>
      </div>
   
            </Col>
            <Col md = '4' onClick={ () =>  { setcheck2(!check2) } } >
          
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' style={{position : 'relative'}}>
                <div>  <BiMessageAltDetail size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Get Leads as Facebook messages</span>
          <small className='text-truncate text-muted mb-0'>Get more FB messages from Leads</small>
        </div>
        <span >      <input type="checkbox" checked={check2} style={{position : 'absolute', top : '0px', right : "0px"}} />

</span>
      </div>
 
            </Col>
            <Col md = '4' onClick={ () =>  { setcheck3(!check3) } }>
        
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' style={{position : 'relative'}}>
                <div>  <SlUserFollow size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Increase page followers</span>
          <small className='text-truncate text-muted mb-0'>Encourage customers to follow your page</small>
        </div>
        <span >      <input type="checkbox" checked={check3} style={{position : 'absolute', top : '0px', right : "0px"}} />

</span>
      </div>
  
            </Col>

         </Row>
         <Row className='mt-1'>
            <Col md = '4' onClick={ () =>  { setcheck4(!check4) } }>
         
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' style={{position : 'relative'}}>
                <div>  <MdPeople size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Get Customer Leads</span>
          <small className='text-truncate text-muted mb-0'>Encourage customers to take action</small>
        </div>
        <span >      <input type="checkbox" checked={check4} style={{position : 'absolute', top : '0px', right : "0px"}} />

</span>
      </div>
   
            </Col>
            <Col md = '4' onClick={ () =>  { setcheck5(!check5) } }>
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' style={{position : 'relative'}}>
                <div>  <GrView size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Get more youtube views</span>
          <small className='text-truncate text-muted mb-0'>Increase organic views by obtaining  </small>
        </div>
        <span >      <input type="checkbox" checked={check5} style={{position : 'absolute', top : '0px', right : "0px"}} />

</span>
      </div>
            </Col>
            <Col md = '4' onClick={ () =>  { setcheck6(!check6) } }>
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' style={{position : 'relative'}}>
                <div>  <GiClick size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Get more website traffic</span>
          <small className='text-truncate text-muted mb-0'>Get the right people to visit your website</small>
        </div>
        <span >      <input type="checkbox" checked={check6} style={{position : 'absolute', top : '0px', right : "0px"}} />

</span>
      </div>
            </Col>

         </Row>
         <Row className='mt-1'>
            <Col md = '4' onClick={ () => { setcheck7(!check7)  } }>
         
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' style={{position : 'relative'}}>
                <div>  <BiStore size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Increase Live store traffic</span>
          <small className='text-truncate text-muted mb-0'>Drive visits to local stores, restaurants</small>
        </div>
        <span >      <input type="checkbox" checked={check7} style={{position : 'absolute', top : '0px', right : "0px"}} />

</span>
      </div>
            </Col>
            <Col md = '4' onClick={ () => { setcheck8(!check8)  } }>
        
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' style={{position : 'relative'}}>
                <div>  <FaAppStore size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Increase your App installs</span>
          <small className='text-truncate text-muted mb-0'>Get more installs, interactions for your app</small>
        </div>
        <span >      <input type="checkbox" checked={check8} style={{position : 'absolute', top : '0px', right : "0px"}} />

</span>
      </div>
   
            </Col>
            <Col md = '4' onClick={ () => { setcheck9(!check9)  } }>
            <Link>
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' style={{position : 'relative'}}>
                <div>  <GrCatalog size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Increase the catalogue sales</span>
          <small className='text-truncate text-muted mb-0'>Drive the sales of your catalogue and get</small>
        </div>
        <span >      <input type="checkbox" checked={check9} style={{position : 'absolute', top : '0px', right : "0px"}} />

</span>
      </div>
      </Link>
            </Col>

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

export default Step1