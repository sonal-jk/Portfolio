import ghost from '../images/Rectangle 3.png'
import '../style.scss'
const About = () => {

    return(  <div> <div className='about'>
      <div id='me2'>
        <img src={ghost} alt="hello"></img>
      </div>
      <div id='me'>
      
        <div>
        <h1>ABOUT ME</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
      </div>
      </div>
      <div className='skillset'>
<h1>SKILL SET</h1>  
<div>
   <div>
    <div>1</div>
    <div>2</div></div> 
</div>
      </div>
      </div>);
  };
  
  export default About;
  