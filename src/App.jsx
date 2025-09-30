import './App.css'
import userIcon from "./assets/cv_photo.jpg";
import deskShade from "./assets/desk_shade.jpg";
import aboutBottom from "./assets/about_bottom.png";
import expImg from "./assets/exp_img.png";
import saveImg from "./assets/save_img.jpg"
import ATS from "./assets/ats.png";
import voting from "./assets/Voting-image-6-scaled.jpg";
import extraMarks from "./assets/extramarks.jpg";
import creativeI from "./assets/expert_f.jpg";
import creativeF from "./assets/expert_i.png";
import userImg from "./assets/user_img.png";
import otherImg from "./assets/otherImg.jpg";
import otherF from "./assets/otherf.jpg"
import { TypeAnimation } from 'react-type-animation';

function App() {

  return (
    <>
    <div className="portfolio_web">
      <div className="container-fluid">
        {/* Head Section */}

         <div className="head_section">
        <h2 className="name_head"><TypeAnimation
  sequence={[
    'Kamalraj Singh',
    1000
  ]}
  speed={50}
  repeat={Infinity}
/></h2>
        <img src={userIcon} alt="cv_photo" />
        <h2 className="port_txt">PORTFOLIO</h2>
        <h5 className='prt_para'>Frontend Developer</h5>
     </div>  
        
        {/* About Section */}
  
       <div className="about_section">
        <div className="about_top">
          <div className='about_txt'>
            <p>A LITTLE ABOUT ME</p>
          </div>
          <img src={deskShade} alt="desk_shade" />
        </div>
           <div className="about_bottom">
          <div className='about_txt'>
            <p>I am a digital nomad currently based in Noida. I've been working in web development for the past four years with latest technologies.</p>
          </div>
          <img src={aboutBottom} alt="desk_shade" />
        </div>
       </div>
      </div>
    </div>
    
     {/* Work Experience Section */}
     
     <div className="experience_section">
        <div className='exp_txt'>
            <p>WORK EXPERIENCE</p>
          </div>
          <div className="exp_desc">
             <div className="agency_left">
              <div className="exp_blc">
             <h4>Agency Work</h4>
              <div className="agency_txt">
                <p>Quarks Technosoft</p>
                <p>⎼ Software Engineer (2025-Present)</p>
              </div>
              <div className="agency_txt">
                <p>Chetu Inc.</p>
                <p>⎼ Software Engineer (2022-2024)</p>
              </div>
            </div>
            <div className="exp_blc">
               <h4>Freelance Work</h4>
               <div className="agency_txt">
                <p>Full-time Frontend developer</p>
                <p>(2022-present)</p>
              </div>
              <div className="agency_txt">
                <p>Part-time Graphic Designer & Illustrator</p>
                <p>(2021-2022)</p>
              </div>
            </div>
             </div>
            <div className="exp_blc">
              <img src={expImg} alt="expImg" />
            </div>
          </div>
     </div>

  {/* Expertiese Section */}
   <div className='expertSection'>
   <div className="exp_txt">
   <p>SKILLS & EXPERTISE</p>
   <img src={saveImg} alt="saveImg"  />
   </div>
    <div className="expertiseRight">
    <div className="devContent">
    <h4>Frontend Development</h4>
    <p>⎼ Languages: HTML, CSS , JavaScript , TypeScript</p>
    <p>⎼ UI Libraries: Bootstrap , Sass , Material UI , Tailwind</p> 
    <p>⎼ Frameworks : React.js , Redux , Angular , Vue.js</p> 
    <p>⎼ Databases: MySQL</p>
    <p>⎼ IDE: Eclipse , Visual Studio Code, Visual Studio </p>
    <p>⎼ Tools:  MS Excel , GitHub , SVN , Jira</p>
    <p>⎼ Operating System: Windows , macOS , Linux , Android and iOS</p>
    </div>
   <div className="devContent">
    <h4>Graphic Design</h4>
     <p>⎼ Logo Design</p>
    <p>⎼ Brand Identity</p> 
    <p>⎼ Poster Design</p> 
    <p>⎼ Environmental Design</p>
    <p>⎼ Tools: Adobe XD , Figma , Photoshop, Sketch</p>
    </div>
   </div>
   </div>

 {/* Work Projects Section */}
   <div className='projectSection'>
     <h4 className='projectHead'>WORK PROJECTS</h4>

     <div className='projectDes'>
     <div className="projectSec">
      <img src={ATS} alt="ats" className='project_img'/>
      <h4>Applicant Tracking System</h4>
      <p>Your All-in-One Platform for Managing Talent Acquisition</p>
     </div>
       <div className="projectSec">
        <img src={voting} alt="Voting" className='project_img'/>
      <h4>HOA’s Voting Election System</h4>
      <p>Empowering Homeowners with Easy and Efficient Voting</p>
     </div>
       <div className="projectSec">
        <img src={extraMarks} alt="extramarks" className='project_img'/>
      <h4>Extramarks Education</h4>
      <p>Shaping Futures Through Smart and Interactive Education</p>
     </div>
     </div>
   </div>

{/* creativity Section */}
   <div className='creativeSection'>
     <h4 className='projectHead'>I WAS</h4>
<h4 className='projectHead'>CREATED <img src={creativeI} alt="creativeI"/></h4>
<h4 className='projectHead'><img src={creativeF} alt="creativeF"/>TO CREATE</h4>
   </div>


{/* other projects Section */}
   <div className='otherSection'>
      <div className="topBlock">
<h4 className='otherName'>OTHER PROJECTS</h4>
<p>A SAMPLE OF POSTERS AND CARDS CONCEPTUALIZED, DESIGNED, AND CREATED BY ME</p>
      </div>
      <div className="otherDesc">
        <img src={otherImg} alt="otherImg" />'
        <img src={otherF} alt="otherF" />
      </div>
   </div>


{/* about Section */}
   <div className='aboutSection'>
    <div className="aboutBlock">
      <div className="leftBlock">
<p className='aboutName'>Kamalraj Singh</p>
      <h4 className='aboutHead'>WORK WITH ME</h4>
      <div className="addresSection">
        <p>123 Anywhere St., Any City, ST 12345</p>
        <p>123-456-7890</p>
        <p>www.linkedin.com/in/kamalraj-singh-b939a8282</p>
      </div>
      </div>
      <div className="rightBlock">
 <img src={userImg} alt="userImg"/>
      </div>
    </div>
     
   </div>

   
    </>
  )
}

export default App
