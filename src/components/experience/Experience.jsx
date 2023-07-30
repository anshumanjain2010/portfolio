import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      {/* <h4> What Skills I Have</h4> */}
      <h2>What Skills I Have</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4> HTML</h4>
              {/* <small> Experienced</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4> CSS</h4>
              {/* <small> Experienced</small> */}
              </div>
              
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4> JavaScript</h4>
              {/* <small> Experienced</small> */}
              </div>
              
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4> Bootstrap</h4>
              {/* <small> Experienced</small> */}
              </div>
              
            </article>
            {/* <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4> Tailwind</h4>
              {/* <small> Experienced</small> */}
              {/* </div>
              
            </article> */} 
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4> React</h4>
              {/* <small> Experienced</small> */}
              </div>
              
            </article>
          </div>
        </div>
        {/* END of frontend */}

        <div className="experience_machine_learning">
        <h3>Machine Learning</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Python</h4>
              {/* <small> Experienced</small> */}

              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Object Detection</h4>
              {/* <small> Experienced</small> */}
              </div>
              
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Image Processing</h4>
              {/* <small> Experienced</small> */}
              </div>
              
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Scikit-learn </h4>
              {/* <small> Experienced</small> */}
              </div>
              
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4> TensorFlow</h4>
              {/* <small> Experienced</small> */}
              </div>
              
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>OpenCV</h4>
              {/* <small> Experienced</small> */}
              </div>
              
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Keras</h4>
              {/* <small> Experienced</small> */}
              </div>
              
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience