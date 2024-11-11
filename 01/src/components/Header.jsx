import reactImg from '../assets/react-core-concepts.png';
import './Header.css';

const dynamicContent = ['Fundamental', 'Crucial', 'Core'];

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max+1));
}

export default function Header() {
    const word = dynamicContent[getRandomNumber(2)];
  
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {word} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }