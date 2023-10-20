import Info from '../components/Info';
import About from '../components/About';
import Iteresets from '../components/Interests';

import './main.css';

export default function Main() {
  return (
    <div className='container main'>
      <Info />
      <About />
      <Iteresets />
    </div>
  );
}
