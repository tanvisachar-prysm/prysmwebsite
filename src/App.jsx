import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FloatingDemoButton } from './components/FloatingDemoButton'
import { LightboxProvider } from './components/Lightbox'
import { ScrollToTop } from './components/ScrollToTop'
import { useSmoothScroll } from './utils/useSmoothScroll'
import { PAGES } from './utils/navigation'
import { Home } from './pages/Home'
import { Prysm } from './pages/Prysm'
import { Playbook } from './pages/Playbook'
import { Results } from './pages/Results'
import { Security } from './pages/Security'
import { Demo } from './pages/Demo'
import { ThankYou } from './pages/ThankYou'
import { NotFound } from './pages/NotFound'

function AppContent() {
  useSmoothScroll()

  return (
    <LightboxProvider>
      {/* Full-height column so the footer sits at the bottom on short pages */}
      <div className="flex min-h-svh flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path={PAGES.home.to} element={<Home />} />
            <Route path={PAGES.prysm.to} element={<Prysm />} />
            <Route path={PAGES.playbook.to} element={<Playbook />} />
            <Route path={PAGES.results.to} element={<Results />} />
            <Route path={PAGES.security.to} element={<Security />} />
            <Route path={PAGES.demo.to} element={<Demo />} />
            <Route path="/thank-you" element={<ThankYou />} />
            {/* Old URLs */}
            <Route path="/prysm" element={<Navigate to={PAGES.prysm.to} replace />} />
            <Route path="/platform" element={<Navigate to={PAGES.prysm.to} replace />} />
            <Route path="/demo" element={<Navigate to={PAGES.demo.to} replace />} />
            <Route path="/solutions" element={<Navigate to={PAGES.playbook.to} replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <FloatingDemoButton />
        <Footer />
      </div>
    </LightboxProvider>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App
