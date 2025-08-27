import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Home } from './pages/Home';
import { Faturas } from './pages/Faturas';
import DigitalAccount from './pages/DigitalAccount';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="faturas" element={<Faturas/>} />
            <Route path="account" element={<DigitalAccount/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App