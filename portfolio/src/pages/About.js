import ghost from '../images/Rectangle 3.png'
import '../style.scss'
import { Link } from 'react-router-dom';
import git from '../images/git.png'
import sql from '../images/sql.png'
import program from '../images/Program.png'
import web from '../images/web.png'
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
   <div className='grid1'>
    <div>
      <img src={web} alt='web'></img>
      <strong>WEB DEVELOPMENT</strong>
    </div>
    <div>
      <img src={program} alt='program'></img>
      <strong>PROGRAMMING</strong></div></div>
    <div className='grid2'>
    <div>
      <img src={sql} alt='sql'></img>
      <strong>DATABASE</strong></div>
    <div>
      <img src={git} alt='git'></img>
      <strong>VERSION CONTROL</strong></div></div> 
</div>
      </div>
      </div>);
  };
  
  export default About;
  