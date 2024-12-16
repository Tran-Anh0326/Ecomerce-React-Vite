import { useState } from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './common/header/Header';
import { Layout } from 'antd';
import LandingPage from './page/LandingPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/landingPage" element={<LandingPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
