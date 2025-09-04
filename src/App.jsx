// App.jsx - Router + Layout
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Navbar.jsx'

import CounterPage from './components/Counter/CounterPage.jsx'
import TogglePage from './components/Toggle/TogglePage.jsx'
import LocalStoragePage from './components/LocalStorage/LocalStoragePage.jsx'
import FetchPage from './components/Fetch/FetchPage.jsx'
import InputPage from './components/Input/InputPage.jsx'
import DebouncePage from './components/Debounce/DebouncePage.jsx'
import PreviousPage from './components/Previous/PreviousPage.jsx'
import HoverPage from './components/Hover/HoverPage.jsx'
import TitlePage from './components/Title/TitlePage.jsx'
import TimeoutPage from './components/Timeout/TimeoutPage.jsx'
import ClipboardPage from './components/Clipboard/ClipboardPage.jsx'
import MediaQueryPage from './components/MediaQuery/MediaQueryPage.jsx'
import OnlineStatusPage from './components/OnlineStatus/OnlineStatusPage.jsx'
import GeolocationPage from './components/Geolocation/GeolocationPage.jsx'
import ThemePage from './components/Theme/ThemePage.jsx'

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/counter" replace />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/toggle" element={<TogglePage />} />
          <Route path="/localstorage" element={<LocalStoragePage />} />
          <Route path="/fetch" element={<FetchPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/debounce" element={<DebouncePage />} />
          <Route path="/previous" element={<PreviousPage />} />
          <Route path="/hover" element={<HoverPage />} />
          <Route path="/title" element={<TitlePage />} />
          <Route path="/timeout" element={<TimeoutPage />} />
          <Route path="/clipboard" element={<ClipboardPage />} />
          <Route path="/mediaquery" element={<MediaQueryPage />} />
          <Route path="/onlinestatus" element={<OnlineStatusPage />} />
          <Route path="/geolocation" element={<GeolocationPage />} />
          <Route path="/theme" element={<ThemePage />} />
        </Routes>
      </div>
    </Router>
  )
}
