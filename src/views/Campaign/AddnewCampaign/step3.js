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
  UncontrolledDropdown,
  ButtonGroup,
  Progress
} from 'reactstrap'
import classnames from 'classnames'
import Flatpickr from "react-flatpickr"
import ProgressBar from "@ramonak/react-progress-bar"

import Timeline from '@components/timeline'
const Step3 = ({handleNext}) => {
  const [activeView, setActiveView] = useState('lifetime')
  const [ddate, setddate] = useState()
  console.log(ddate)
  const [picker, setPicker] = useState(new Date())
console.log(setddate)
  return (
    <>
  
<Card>
    <Row>
    <Col md='8'>
    
    <CardHeader className='border-bottom'>
          <CardTitle tag='h1' style={{fontWeight:'700'}}>Campaign Settings <small>(Step 3 of 4)</small></CardTitle>
        </CardHeader>
        <CardBody className='mt-2'>
        <div className=''>
            <p>Budget Timeline</p>
            <ButtonGroup>
                <Button
                  tag='label'
                  className={classnames('btn-icon view-btn grid-view-btn', {
                    active: activeView === 'lifetime'
                  })}
                  color='primary'
                  outline
                //   style={{background : '#0F6EFF'
                // }}
                  onClick={() => setActiveView('lifetime')}
                >

Lifetime                </Button>
                <Button
                  tag='label'
                  className={classnames('btn-icon view-btn list-view-btn', {
                    active: activeView === 'daily'
                  })}
                  color='primary'
                  outline
                  onClick={() => setActiveView('daily')}
                >
Daily                </Button>
              </ButtonGroup>
              <Row className='mt-2'>

             
              <Col md='6'>
              <div>
                <label>start date</label>
                <Flatpickr
                        className="form-control  mb-0 mt-0 border-bottom-n"
                        onChange={(date) => { setPicker(date) }}
                        id="default_picker"
                        name="default_picker"
                        defaultValue={picker}
                        options={{
                          minDate: 'today',
                          dateFormat: "d/m/Y",
                          disableMobile: "true"
                        }}

                         />
              </div>
              </Col>
         
             <Col md = '6'>
             <div>
                <label>End date</label>
                <Flatpickr
                        className="form-control  mb-0 mt-0 border-bottom-n"
                        onChange={(date) => { setPicker(date) }}
                        id="default_picker"
                        name="default_picker"
                        defaultValue={picker}
                        options={{
                          minDate: 'today',
                          dateFormat: "d/m/Y",
                          disableMobile: "true"
                        }}

                         />
              </div></Col>
              </Row>
              <Row className='mt-2'> 
                <div className='demo-vertical-spacing'>

      <div>
        <span>Enter campaign budget
</span>
<ProgressBar completed={60} />
      </div>
    </div>
              </Row>
        </div>
      </CardBody>
       
        </Col>
        </Row>
        <Row>
    <Col md='8'>
    
 
        <CardBody className='mt-2'>
        <div className=''>
            <p>Location info</p>
            <ButtonGroup>
                <Button
                  tag='label'
                  className={classnames('btn-icon view-btn grid-view-btn', {
                    active: activeView === 'lifetime'
                  })}
                  color='primary'
                  outline
                //   style={{background : '#0F6EFF'
                // }}
                  onClick={() => setActiveView('lifetime')}
                >

location                </Button>
                <Button
                  tag='label'
                  className={classnames('btn-icon view-btn list-view-btn', {
                    active: activeView === 'daily'
                  })}
                  color='primary'
                  outline
                  onClick={() => setActiveView('daily')}
                >
Radius                </Button>
              </ButtonGroup>
              <Row className='mt-2'>

             <input type='text' placeholder='Select a place name, address or coordinates' style={{border : '1.5px solid #E9E9E9 ', padding : '1rem'}}/>

              </Row>
              <Row className='mt-2'> 
                <div className='demo-vertical-spacing'>

      <div>
        <span>Select target radius
</span>
<ProgressBar completed={60} />
      </div>
    </div>
              </Row>
        </div>
      </CardBody>
       
        </Col>
        </Row>
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

export default Step3