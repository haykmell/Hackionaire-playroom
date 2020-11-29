import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/Home'
import GameGallery from './components/GameGallery'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/game-gallery">
        <GameGallery />
      </Route>
      <Route path="/contact-us">
        <ContactUs />
      </Route>
    </Router>
  );
}

export default App;
