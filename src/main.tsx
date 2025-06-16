
import { createRoot } from 'react-dom/client';
import RootLayout from './app/layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/home/page';
import Login from './app/login/page';
import Services from './app/services/page';
import Dashboard from './app/dashboard/page';
import Estimate from './app/estimate/page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/estimate" element={<Estimate />} />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById("root")!).render(
  <RootLayout>
    <App />
  </RootLayout>
);
