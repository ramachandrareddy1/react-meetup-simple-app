import './App.css';
import AllMeetups from './pages/AllMetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/layouts/Layout';
function App() {
  return (
    <Router>
      <Layout>

        <Routes>
          <Route exact path="/" element={<AllMeetups />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/new-meetup" element={<NewMeetup />} />
        </Routes>

      </Layout>
    </Router>

  )
}

export default App;
