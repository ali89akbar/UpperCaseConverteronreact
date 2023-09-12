import { Link } from "react-router-dom";

const Footer =(props)=>{
    return(
        <div>
            <center>
<h1>{props.footer}</h1>
<footer>
  <p>Author: Syed Ali Akbar </p>
  
  <p >ali59.aa96@gmail.com</p>
 
</footer>
</center>
        </div>
    )
}
export default Footer;