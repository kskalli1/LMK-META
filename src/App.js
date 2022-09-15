import { Routes, Route } from 'react-router-dom';
import Home from './Components/Navigation/Home/Home';
import About from './Components/Navigation/About/About';
import Payment from './Components/Navigation/Payment/Payment';
import News from './Components/Navigation/News/News';
import StripePage from './Components/Navigation/Payment/StripePage/StripePage';
import Confirmed from './Components/Navigation/Payment/Confirmed/Confirmed';



function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/purchase" element={<Payment />} />
        <Route path="/stripePayment" element={<StripePage />} />
        <Route path="/Confirmed" element={<Confirmed />} />
      </Routes>
    </div>
  );
}

export default App;
