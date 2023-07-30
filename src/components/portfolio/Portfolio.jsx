import React from 'react'
import './portfolio.css'
import IMGML from '../../assets/machine learning.jpg'
import IMGWEB from '../../assets/web development.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION
const data = [
{
id: 1,
image: IMGML,
title: 'Facial Emotion Recogniton',
body1: "• Designed and developed a neural network model utilizing Convolutional Neural Network and VGG16 for transfer learning.",
body2: "• Developed for the detection of 7 basic human facial emotions using FER2013 dataset.",
body3: "• Achieved an accuracy of 75% in detecting facial emotions."
// github: 'https://github.com',
// demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
},
{
id: 2,
image: IMGML,
title: 'Profiling Hate Speech on Twitter',
body1: "• Developed and implemented machine learning models, including LSTM, Random Forest, XG Boost, and Naive Bayes, to profile and identify hate speech on Twitter.",
body2: "• Identified data imbalance issues and solved them by using SMOTE function.",
body3: "• Improved the accuracy from 90% to 96%."
// github: 'https://github.com',
},
{
  id: 3,
  image: IMGML,
  title: 'Algorithm Development: content-aware image resizing',
  body1: '• Implemented Seam Carving, a content-aware image resizing algorithm using dynamic programming and OpenCV.',
  body2: '• Optimized the algorithm using Divide and Conquer and Partial Update techniques.',
  body3: '• Achieved a 60% improvement in runtime performance through optimization.'
  // github: 'https://github.com',
  // demo: 'https://dribbble.com/shots/16580766-0rion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 4,
    image: IMGWEB,
    title: 'NewsOpia: A News App for your daily feed',
    body1: '• Developed a responsive web application for real-time news updates and browsing.',
    body2: '• Implemented a categorization feature for easy navigation of news articles.',
    body3: '• Incorporated an infinite scroll bar and top loading bar for improved user experience.'
    // github: 'https://github.com',
    // demo: 'https://dribbble.com/shots/16580766-0rion-UI-kit-Charts-templates-infographics-in-Figma'
    },
]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio_container">
        {
        data.map(({id, image, title, body1, body2, body3, github, demo}) => {
          return (
            <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt="{title}" />
          </div>
          <h3>{title}</h3>
          <h4>{body1}</h4>
          <h4>{body2}</h4>
          <h4>{body3}</h4>
          {/* <div className="portfolio_items-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='-blank'>Live Demo</a>
          </div> */}
          
        </article>
          )
        }) 
      }       
      </div>
    </section>
  )
}

export default Portfolio

// const data is our array