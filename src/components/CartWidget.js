import './CartWidget.css';
import { FaCartArrowDown } from "react-icons/fa";

function CardWidget(props){ 
    return(
        <section>
            <div className='nav-logo'>
                <span>{props.widget}<FaCartArrowDown/></span>
            </div>

            
        </section>
         
      );
   
}
export default CardWidget;