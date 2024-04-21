import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Bulb } from '../components/Bulb';

document.querySelector('#root').innerHTML = render(
  <>
    <Bulb on={false} />
    <Bulb on={false} />
    <Bulb on={true} />
    <Bulb on={true} />
  </>,
);
