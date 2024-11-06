import reactImg from './assets/react-core-concepts.png'

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

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
