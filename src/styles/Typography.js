import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import RobotoMonoBold from '../assets/fonts/RobotoMono-Bold.ttf';
import RecursiveMonoSpaceLight from '../assets/fonts/Recursive_Monospace-Light.ttf'
import RobotoMonoLight from '../assets/fonts/RobotoMono-Light.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'RobotoMono Bold';
    src: url(${RobotoMonoBold});
    font-style: bold;
  }
  @font-face {
    font-family: 'RecursiveMono Light';
    src: url(${RecursiveMonoSpaceLight});
    font-style: normal;
  }
  @font-face {
    font-family: 'RobotoMono Light';
    src: url(${RobotoMonoLight});
    font-style: normal;
  }
  html{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }
`;

export default Typography;