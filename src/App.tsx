import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Teach from './pages/Teach';
import Shooting from './pages/Shooting.tsx';
import Mental from './pages/Mental.tsx';
import Skills from './pages/Skills';
import Equipment from './pages/Equipment';
import About from './pages/About';
import Recommendations from './pages/Recommendations';
import Videos from './pages/Videos.tsx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teach" element={<Teach />} />
        <Route path="/shooting" element={<Shooting />} />
        <Route path="/mental" element={<Mental />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/about" element={<About />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/videos" element={<Videos />} /> {/* Add route */}
      </Routes>
    </Layout>
  );
}

export default App;