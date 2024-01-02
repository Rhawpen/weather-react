import Weather from './Weather';

import './App.css';


function App() {
  return (
    <div className="App">
      <Weather city="Lagos" />
      <footer>
        <p>
          This is an{" "}
          <a
            href="https://github.com/Rhawpen/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open source
          </a>{" "}
          project by Mojoyinola
        </p>
      </footer>
    </div>
  );
}

export default App;
