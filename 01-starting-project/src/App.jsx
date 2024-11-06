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

function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
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
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} img={CORE_CONCEPTS[0].image}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
