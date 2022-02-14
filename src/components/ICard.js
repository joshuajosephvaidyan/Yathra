import React from 'react'
import { useState,useRef } from 'react';
import { Button,Overlay } from 'react-bootstrap';
function ICard() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
        <Button className='d-block' variant="dark" style={{borderRadius:'100px',fontSize:'10px',fontWeight:'bold'}} ref={target} onClick={() => setShow(!show)}>
          i
        </Button>
        <Overlay target={target.current} show={show} placement="left">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: '#FFF',
                padding: '2px 10px',
                color: '#000',
                marginRight: '22px',
                border:'1px',
                borderStyle:'solid',
                borderWidth:'2px',
                borderRadius: 3,
                borderColor:'#C4C4C4',
                ...props.style,
              }}
            >
              This info is required for your co-passengers to identify your vehicle. 
            </div>
          )}
        </Overlay>
      </>
    );
}

export default ICard