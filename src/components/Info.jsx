import { GrMail, GrLinkedin } from 'react-icons/gr';

export default function Info() {
  return (
    <div className='info'>
      <h1 className='info-title'>Davide Grassitelli</h1>
      <h3 className='info-subtitle'>Frontend Developer</h3>
      <h4 className='info-link'>
        <a href='https://davidegrassitelli.netlify.app/' target='_blank'>
          davidegrassitelli.netlify.app
        </a>
      </h4>
      <div className='info-buttons'>
        <a href='mailto:dagrassitelli@gmail.com' className='email'>
          <GrMail /> Email
        </a>
        <a
          href='https://www.linkedin.com/in/davide-grassitelli-web-dev/'
          className='linked-in'
          target='_blank'
        >
          <GrLinkedin /> LinkedIn
        </a>
      </div>
    </div>
  );
}
