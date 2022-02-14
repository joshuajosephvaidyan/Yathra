import React from 'react'
import { Button } from 'react-bootstrap'

function RideCard(props) {
  return (
    <Button variant="dark" style={{width:'100%',backgroundColor:'#fff',borderColor:'#5B5252',}} className="mt-2 mb-2">
      <div className="d-flex">
          <div style={{width:'80%'}} className="d-flex flex-column align-items-start">
              <span style={{fontSize:'large',color:'#5B5252'}}>{props.name}</span>
              <span style={{fontSize:'small',color:'#5B5252'}}>{props.type}</span>
          </div>
          <div style={{width:'20%'}} className="d-flex align-items-center justify-content-end">
              <span style={{fontSize:'larger',color:'#5B5252'}}>Rs.{props.sharep}</span>
          </div>
      </div>
    </Button>
  )
}

export default RideCard