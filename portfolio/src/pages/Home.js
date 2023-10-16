import {Link} from 'react-router-dom'
import git from "../images/github.png"
import mail from "../images/Gmail.png"
import lin from "../images/Linkedin.png"
import resume from '../Resume.pdf';
import "../style.scss"
import styles from "./mystyle.module.css"
const Home = () => {

    return <div className={styles.back}>
    <div className="container">
      <div className="innercont">
    <div className="paras">
      <p id="p1">Hey, I am Sonal Jakhmola</p>
      <p id="p2">I enjoy creating websites, programs and designs.</p>
      <p id="p3">With your vision and my ideas, we can create something beautiful.</p>
    </div>
    <div className='socials'><div>
      <Link to='https://github.com/sonal-jk' target='_blank'><img src={git} alt="github"></img></Link>
      <Link to='https://www.linkedin.com/in/sonal-jakhmola-15461022a' target='_blank'><img src={lin} alt="linkedin"></img></Link>
      <Link to='https://mail.google.com/a/saitm.org/?view=cm&fs=1&to=sonal1024jk@gmail.com' target='_blank'><img src={mail} alt="gmail"></img></Link>
      </div>
      <Link to={resume} target='_blank'><button>My Resume</button></Link>
      </div>
      </div>
    </div>
    </div>;
  };
  
  export default Home;
  