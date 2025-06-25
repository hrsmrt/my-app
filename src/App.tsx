// App.tsx
import { Routes, Route, Link } from 'react-router-dom'
import Links from './pages/Links'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">ホーム</Link>
        <Link to="/links">リンク集</Link>
      </nav>
      <Routes>
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  )
}

export default App
