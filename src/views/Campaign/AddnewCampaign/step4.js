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
// import { useDispatch } from 'react-redux'
// import { history } from '../../../history'
import { state4data } from './state4data'
// import { addcampaignApi } from '../../../redux/action/campaignAction'
// import img from '../../../assets/images/avatars/av.png'
import Avatar from '@components/avatar'

const Step4 = ({
  // s_date, e_date, budget, locations, radius, stepdata
}) => {
  // const dispatch = useDispatch()
  const addcapaignbtn = async() => {
    // const formData = new FormData()
    // formData.append("start_date", s_date)
    // formData.append("end_date", e_date)
    // formData.append("budget", budget)
    // formData.append("location", locations)
    // formData.append("location_radius", radius)
    // formData.append("productName", stepdata.name)
    // formData.append("productimg", stepdata.img)

    // const res = await dispatch(addcampaignApi(formData))
    // console.log(res)
  }
// const [check1, setcheck1] = useState(false)
// const [check2, setcheck2] = useState(false)
// const [check3, setcheck3] = useState(false)
// const [check4, setcheck4] = useState(false)
  return (
    <>
    <Card>
    <CardHeader className='border-bottom'>
          <CardTitle tag='h1' style={{fontWeight:'700'}}>Ready to go <small>(Step 4 of 4)</small></CardTitle>
        </CardHeader>
<Row>
  {state4data.map((p) => {
    return (<Col md='3' className='m-2 p-2' style={{ width: '300px', marginLeft :'2px', border: '1.5px solid #F5F5F5', position : 'relative'}} >
    <span >      <input type="checkbox"  style={{position : 'absolute', top : '0px', right : "0px"}} />
  
  </span>
    <div className='d-flex justify-content-left align-items-center ' >
    <Avatar className='me-1' img={p.pro} width='32' height='32' />
          <div className='d-flex flex-column'>
              <span className='fw-bolder'>{p.name}</span>
            <small className='text-truncate text-muted mb-0'>Sponsored</small>
          </div>
        </div>
        <div className='mt-1'>
          <p>{p.desc}</p>      </div>
          <img src={p.img} />
          <div className='d-flex justify-content-between align-items-center  pe-1'>
  
          <p>Mukund Cake Shop</p>
          <button><GrLike/> Like</button>
          </div>
    </Col>
    )
  })}


</Row>
        </Card>
        {/* Start campaign */}
        <Row>
<Col xs={12} className = 'd-flex align-items-sm-center justify-content-end flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'>
 <Button className='add-new-user pe-2 pl-3' color='primary'  style={{borderRadius : '10px'}} onClick = {addcapaignbtn}>
          
 Start campaign </Button>
</Col>
    </Row>
        </>
          )
}

export default Step4