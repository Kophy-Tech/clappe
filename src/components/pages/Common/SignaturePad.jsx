import React, {useRef} from 'react'
import { Row } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'


export default function Signature(){
    let sigPad = useRef({})
    let data = ``;
    function clear(){
        sigPad.current.clear()
    }
    function save(){
      data = sigPad.current.toDataURL()
    }
    function show(){
sigPad.current.fromDataURL(data);
    }
    
    return(
        <div>

<SignatureCanvas
ref={sigPad}
penColor='green'
    canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />

   <div className='d-flex justify-content-space-between'>
   <button className='btn btn-danger mx-2' onClick={clear}> 
Clear
</button>

<button className='btn btn-success mx-2' onClick={save}> 
Save
</button>
<button className='btn btn-primary' onClick={show}> 
Show
</button>

   </div>


</div>
    )
}

