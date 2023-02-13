import logo from './logo.svg';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';

import './App.css';
import ServicesCard from './Components/Services/ServicesCard';

function App() {
  return (
    <div className="App">
      <header><Header /></header>
      <h1>Pythoness Programmer</h1>
      <ServicesCard />
      <footer><Footer /></footer>
      <script type="text/javascript" src="https://calendly.com/assets/external/calendly-squarespace.js"></script>
      
    </div>
  );
}

export default App;
