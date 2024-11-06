import reactImg from './assets/react-core-concepts.png'
import compImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';

const dynamicContent = ['Fundamental', 'Crucial', 'Core'];

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max+1));
}

function Header() {
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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title="Components" description="core UI" img={compImg}/>
            <CoreConcept title="Props" description="core UI" img={compImg}/>
            <CoreConcept title="Components" description="core UI" img={compImg}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
