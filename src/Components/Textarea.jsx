import React , {useState} from 'react';

const Text=()=>{
    const [text,setText] = useState("Enter Your Text");
    const Onhandleclick = () =>{
    let a = text.toUpperCase();
    setText(a)
    }
const onhandle=(event)=>{
setText(event.target.value)
}
    return(
        <>
        <div className="container">
            <textarea name="" value={text} onChange={onhandle} id="" cols="182" rows="20"></textarea>
        </div>
        <button onClick={Onhandleclick}> Convert</button>
        </>
    )
}
export default Text;