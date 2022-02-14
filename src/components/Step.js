import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Step(props) {
  return (
    <div>
        <Row className="mt-2 mb-3">
            <Col xs={1} style={{color:'#5284B8'}}>
                Step {props.number}:
            </Col>
            <Col xs={11}>
                {props.step}
            </Col>
        </Row>
    </div>
  )
}

export default Step