import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import { LanguageProvider } from './components/LanguageProvider';
import { Layout } from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { Dashboard } from './pages/Dashboard';
import { Cities } from './pages/Cities';
import { Hotels } from './pages/Hotels';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <LanguageProvider>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/hotels/:cityId" element={<Hotels />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </LanguageProvider>
    </Router>
  );
}
