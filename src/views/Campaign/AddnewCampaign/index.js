// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'

// ** Reactstrap Imports
import { Row, Col, TabContent, TabPane } from 'reactstrap'
import { Stepper, Step, StepLabel, Button } from "@material-ui/core"

// ** Demo Components
import Tabs from './Tabs'
import Breadcrumbs from '@components/breadcrumbs'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'
function getSteps() {
  return ["What you want to do", "Choose product", "Campaign settings", "Ready to go"]
}
const Addcampaign = () => {
  // ** States
  const [activeTab, setActiveTab] = useState(1)
  const [data, setData] = useState(null)
  const [s_date, sets_date] = useState()
  const [e_date, sete_date] = useState()
  const [budget, setbudget] = useState()
  const [locations, setlocations] = useState()
  const [radius, setradius] = useState()
  const [stepdata, setstepdata] = useState()
  const steps = getSteps()

  // const toggleTab = tab => {
  //   setActiveTab(tab)
  // }
  const handleNext = () => {
    setActiveTab(activeTab + 1)
  }
  const handlePre = () => {
    setActiveTab(activeTab - 1)
  }
  useEffect(() => {
    axios.get('/account-setting/data').then(response => setData(response.data))
  }, [])
console.log(stepdata)
  return (
    <Fragment>
        <Row className='mb-2 mt-2'>   
    <Col md='6'>
           <h1 className='bold'>Your Ad Campaigns</h1> 
           <span>Launch your ad in just 4 easy steps </span>
            </Col>
            </Row>
            <Stepper activeTab={activeTab} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      {data !== null ? (
        <Row>

          <Col xs={12}>
       
            <TabContent activeTab={activeTab}>
              <TabPane tabId={1}>
                <Step1 data={data.general}
                   handleNext={handleNext}
                   handlePre={handlePre}
                />
              </TabPane>
              <TabPane tabId={2}>
                <Step2 
                   setstepdata = {setstepdata}
                   stepdata = {stepdata}
                   handleNext={handleNext}
                   handlePre={handlePre}
                />
              </TabPane>
              <TabPane tabId={3}>
                <Step3 
                   handleNext= {handleNext}
                   handlePre=  {handlePre}
                   sets_date = {sets_date}
                   sete_date = {sete_date}
                   setbudget = {setbudget}
                   setlocations = {setlocations}
                   setradius = {setradius}
                   stepdata = {stepdata}
               />
              </TabPane>
              <TabPane tabId={4}>
                <Step4 
                s_date = {s_date}
                e_date = {e_date}
                budget = {budget}
                locations = {locations}
                radius = {radius}
                stepdata = {stepdata}
                   handleNext={handleNext}
                   handlePre={handlePre}
                />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default Addcampaign
