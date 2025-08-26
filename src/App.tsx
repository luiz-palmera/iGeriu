import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { AppLayout } from './components/layout/AppLayout';
import InvoicesTable from './pages/Faturas';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="faturas" element={<InvoicesTable/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App