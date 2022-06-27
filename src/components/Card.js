import './Card.css';
import ItemCount from './ItemCount';

function Card(props){ 
    return(
        
        <div className='container'>
            <div className='card'>
                <div className='icons'>
                    <img src={props.img} alt=""/>
                    <h2>{props.product}</h2>
                    <h3>{props.descrip}</h3>
                    <p>{props.price}</p>
                   
                    <ItemCount></ItemCount>
                </div>
               
            </div>
        </div>
        
     
        

    );
}
export default Card;


/*
color: #fff;
    width: 300px;
    height: 400px;
    border-radius: 30px;
    box-shadow: #333;
    overflow: hidden;
    text-align: center;
    margin: 20px;
    padding: 15px;
    transition:  all 30s ease;
    border-color: #fff;
    */