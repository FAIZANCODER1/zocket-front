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
    const [status, setstatus] = useState(false)
  return (
    <>
    <Card>
    <CardHeader className='border-bottom'>
          <CardTitle tag='h1' style={{fontWeight:'700'}}>What you want to do? <span className='fs-6'>(Step 1 of 4)</span></CardTitle>
        </CardHeader>
        <CardBody className='pt-1'>
         <Row>
            <Col md = '4'>
                <Link>
    
            <div className='d-flex justify-content-left align-items-center border border-light p-2'>
                <div>  <FcCallback size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Get Leads as calls</span>
          <small className='text-truncate text-muted mb-0'>Reach broad audience and get leads through calls</small>
        </div>
      </div>
      </Link>
            </Col>
            <Col md = '4'>
                <Link>
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' >
                <div>  <BiMessageAltDetail size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Get Leads as Facebook messages</span>
          <small className='text-truncate text-muted mb-0'>Get more FB messages from Leads</small>
        </div>
      </div>
      </Link>
            </Col>
            <Col md = '4'>
            <Link>
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' >
                <div>  <SlUserFollow size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Increase page followers</span>
          <small className='text-truncate text-muted mb-0'>Encourage customers to follow your page</small>
        </div>
      </div>
      </Link>
            </Col>

         </Row>
         <Row className='mt-1'>
            <Col md = '4'>
            <Link>
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' >
                <div>  <MdPeople size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Get Customer Leads</span>
          <small className='text-truncate text-muted mb-0'>Encourage customers to take action</small>
        </div>
      </div>
      </Link>
            </Col>
            <Col md = '4'>
            <Link>
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' >
                <div>  <GrView size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Get more youtube views</span>
          <small className='text-truncate text-muted mb-0'>Increase organic views by obtaining  </small>
        </div>
      </div>
      </Link>
            </Col>
            <Col md = '4'>
            <Link>
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' >
                <div>  <GiClick size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Get more website traffic</span>
          <small className='text-truncate text-muted mb-0'>Get the right people to visit your website</small>
        </div>
      </div>
      </Link>
            </Col>

         </Row>
         <Row className='mt-1'>
            <Col md = '4' onClick={ () => { setstatus(!status) } }>
            <Link >
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' >
                <div>  <BiStore size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Increase Live store traffic</span>
          <small className='text-truncate text-muted mb-0'>Drive visits to local stores, restaurants</small>
        </div>
      </div>
      </Link>
            </Col>
            <Col md = '4'>
            <Link>
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' >
                <div>  <FaAppStore size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Increase your App installs</span>
          <small className='text-truncate text-muted mb-0'>Get more installs, interactions for your app</small>
        </div>
      </div>
      </Link>
            </Col>
            <Col md = '4'>
            <Link>
            <div className='d-flex justify-content-left align-items-center border-light p-2 ' >
                <div>  <GrCatalog size={30}/>   </div>
              
             <div className='d-flex flex-column'>
            <span className='fw-bolder'>Increase the catalogue sales</span>
          <small className='text-truncate text-muted mb-0'>Drive the sales of your catalogue and get</small>
        </div>
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