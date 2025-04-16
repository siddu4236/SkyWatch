import './Container.css';
import Card1 from './containercard/Card1/Card1';
import Card2 from './containercard/Card2/Card2';
import Card3 from './containercard/Card3/Card3';
import Card4 from './containercard/Card4/Card4';



export default function Container({main}) {
  console.log(main)
  return (
    <div className="main-container">
      <div className="left-section">
        <Card1 main={main}/>
        <Card3 />
      </div>
      <div className="moveleft1">
        <Card2 />
        <Card4 />
      </div>
    </div>
  );
}
