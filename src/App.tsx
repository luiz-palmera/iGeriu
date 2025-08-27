import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Home } from './pages/Home';
import { Invoice } from './pages/Invoice';
import DigitalAccount from './pages/DigitalAccount';
import { useState } from 'react';


function App() {
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');

  const handleTitleChange = (newTitle: string, newSubtitle?: string) => {
    setTitle(newTitle);
    setSubtitle(newSubtitle ?? "");
  };
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AppLayout title={title} subtitle={subtitle === " " ? undefined : subtitle}/>}>
            <Route index element={<Home onTitleChange={handleTitleChange}  />} />
            <Route path="invoices" element={<Invoice onTitleChange={handleTitleChange}/>} />
            <Route path="account" element={<DigitalAccount onTitleChange={handleTitleChange}/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App