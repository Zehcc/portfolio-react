import React from "react";

const Footer = ({ github, email, linkedin }) => {
  return (
    <div className='footer'>
      <a
        title='Linkedin'
        target='_blank'
        rel='noreferrer'
        href='https://www.linkedin.com/in/tomassanchezmedina/'
      >
        <img src='./assets/linkedin.png' alt='Linkedin' />
      </a>
      <a
        title='Github'
        target='_blank'
        rel='noreferrer'
        href='https://github.com/Zehcc'
      >
        <img src='./assets/github.png' alt='Github' />
      </a>
      <a
        title='Gmail'
        target='_blank'
        rel='noreferrer'
        href='mailto: tomas.sanchez.developer@gmail.com'
      >
        <img src='./assets/gmail.png' alt='Gmail' />
      </a>
    </div>
  );
};

export default Footer;
