import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const headerSocials = () => {
  return (
    <div className='header_socials'>
    <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
    <a href="http://github.com" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default headerSocials