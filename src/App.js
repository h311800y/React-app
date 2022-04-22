import './App.css';
import Testimonio from './componentes/testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1 className='titulo'>Here is what our alumni say about freeCodeCamp:</h1>
      <Testimonio 
        nombre='Emma Bostian'
        pais='Sweden'
        cargo='Software Engineer'
        empresa='Spotify'
        Testimonio='Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'
        imagen='3'
      />
      <Testimonio 
        nombre='Shawn Wang'
        pais='Singapore'
        cargo='Software Engineer'
        empresa='Amazon'
        Testimonio='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'
        imagen='1'
      />
      <Testimonio 
        nombre='Sarah Chima'
        pais='Nigeria'
        cargo='Software Engineer'
        empresa='ChatDesk'
        Testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company'
        imagen='2'
      />
      </div>
    </div>
  );
}

export default App;
