import React from 'react'
import classnames from 'classnames'
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
    ButtonGroup
  } from 'reactstrap'
  import Select from 'react-select'

  import { Grid, List } from 'react-feather'
// const [activeView, setActiveView] = useState('lifetime')
export const basicData = [
    {
      title: 'Budget and dates info',
      customContent: (
        <div className=''>
            <p>Budget Timeline</p>
            <ButtonGroup>
                <Button
                  tag='label'
                  className={classnames('btn-icon view-btn grid-view-btn', {
                    // active: activeView === 'lifetime'
                  })}
                  color='light'
                  outline
                  style={{background : '#0F6EFF'
                }}
                //   onClick={() => setActiveView('lifetime')}
                >

Lifetime                </Button>
                <Button
                  tag='label'
                  className={classnames('btn-icon view-btn list-view-btn', {
                    // active: activeView === 'daily'
                  })}
                  color='primary'
                  outline
                //   onClick={() => setActiveView('daily')}
                >
Daily                </Button>
              </ButtonGroup>
              <div>
                <label>start date</label>
                <input
            type='date'
                  
                //   options={countryOptions}
                //   theme={selectThemeColors}
                //   defaultValue={countryOptions[0]}
                />
              </div>
       
        </div>
      )
    }

]
