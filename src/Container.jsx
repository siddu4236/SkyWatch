
import './Container.css'
import Card1 from './containercard/Card1/Card1';
import Card2 from './containercard/Card2/Card2';
import Card3 from './containercard/Card3/Card3';


export default function container(){
    return(
        <div  className="main-container">
            <Card1 />
            <div className="moveleft1"><Card2 /></div>
            
        </div>
        
    );
}