import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const appTitle = import.meta.env.VITE_APP_TITLE
const apiUrl = import.meta.env.VITE_API_URL
const mode = import.meta.env.MODE

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{appTitle || 'Vite + React'}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="card" style={{ textAlign: 'left', fontSize: '0.9em' }}>
        <h3>Environment Variables</h3>
        <p><strong>My VITE_APP_TITLE:</strong> {appTitle}</p>
        <p><strong>VITE_API_URL:</strong> {apiUrl}</p>
        <p><strong>MODE:</strong> {mode}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
