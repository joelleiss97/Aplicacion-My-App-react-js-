
import './Body.css';
import Card from './Card';


function Body() {
  return(
    <section className='productosCard'>
        <Card img='imag1.jpg' product='Sernova Vodka Italian Style' descrip='elegante y delicado que su nombre conlleva el lema de Fratelli Branca destilerías: “Novare Serbando”' price='$ 830' button= 'Agregar' />
        <Card img='imag1.jpg' product='Sernova Vodka Italian Style ' descrip='elegante y delicado que su nombre conlleva el lema de Fratelli Branca destilerías: “Novare Serbando”' price='$ 850'  button= 'Agregar' />
        <Card img='imag1.jpg' product='Sernova Vodka Italian Style' descrip='elegante y delicado que su nombre conlleva el lema de Fratelli Branca destilerías: “Novare Serbando”' price='$ 900'  button= 'Agregar'/>
    </section>
    
  );
}

export default Body;

