import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import ME1 from '../../assets/ME1.jpeg'
import ME2 from '../../assets/ME2.jpeg'
import ME3 from '../../assets/ME3.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2> About Me</h2>

      <div className="container about_container">
        {/* <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div> */}

        <div className="about_content">
          {/* <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5> Experience</h5>
              <small> 3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5> Clients</h5>
              <small> 300+ wroldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5> Projects</h5>
              <small> 69+ Completed</small>
            </article>
          </div> */}

          <p>
          I'm Anshuman Jain, a passionate fourth-year B.Tech student at the esteemed Indian Institute of Information Technology, Allahabad. With a fervent interest in the dynamic fields of Machine Learning and Web Development, I constantly seek opportunities to expand my knowledge and skills in these areas. {'\n'}
          </p>
          <p>
          {'\n'}
          Throughout my academic journey, I have delved into the fascinating world of technology, exploring the endless possibilities that Machine Learning offers to solve real-world problems. From diving deep into algorithms to working on exciting projects, I find joy in applying ML techniques to create innovative solutions.
          </p>
          <p>
          {'\n'}
          On the other hand, my fascination with Web Development has led me to craft engaging and user-friendly websites. I take pride in the art of building seamless digital experiences, combining aesthetics with functionality to leave a lasting impact on users.

          </p> 

          <a href="$contact" className='btn btn-primary'> Let's Talk</a> 
        </div>
      </div>
    </section>
  )
}

export default About