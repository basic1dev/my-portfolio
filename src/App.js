import logo from './c1.png';
import './App.css';
import './bootstrap.css';
import './responsive.css';
import './style.css.map';
import './style.css';
import gif from  './icegif-502.gif'



function App() {
  return (
    <div className='App'>
     <div className='navi-bar'>
      
      <p>
        <ul className='nav-list'>

          <li className='nav-components'><img src={logo} alt="logo"/></li>
          <a href='#Home'><li className='nav-components'>Home</li></a>
          <a href='#Education'><li className='nav-components'>Education</li></a>
          <a href='#Experience'><li className='nav-components'>Experience</li></a>
          <a href='#Contact me'><li className='nav-components'>Contact Me</li></a>
        </ul>
      </p>
    </div>

    {/* #303b30 */}

    <div className='cards'>
    <h1 id="Home">Hi, I am Clifton !</h1>
    <h2>Let's Develop a Website</h2>
    <img className='giffy' src={gif} alt="Gif"/>

    <p>I am starting my journey as an aspring web developer mastring the ins and outs of React. Welcome to my digital playground, where creativity meets functionality! As a web developer, I wield a dynamic blend of coding prowess and design finesse to craft seamless and visually captivating online experiences. </p>
    </div>


    <div className='cards'>
    <h1 id='Education'>EDUCATION</h1>
    <p>2020 Jan - 2024 Jan | Bsc in Audiology</p>
    <p>2021 Jan - Current | Bachelor of Information Technology</p>
    <p></p>
    </div> 


    <div className='cards'>
    <h1 id='Experience'>PREVIOUS EXPERIENCE</h1>
    <p>Developing Neural networks in identifying brain tumors | Python</p>
    <p>Automation | Python</p>
    <p> <a href='https://www.theodinproject.com/' target='noopener'>The Odin Project</a> | HTML, CSS, JAVASCRIPT</p>
  
    <p></p>
    </div> 

    <div className='cards'>
    <h1></h1>
    <h1 id='Contact me'>Let's work together</h1>
    <a href='https://trollface.dk/' target="_blank">Hire me</a>
    </div> 
    </div> 
    
  );
}

export default App;

