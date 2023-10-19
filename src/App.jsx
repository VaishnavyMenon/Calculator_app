import { useEffect, useState } from 'react';
import './App.css'
import Calculator from './components/Calculator'
import Container from './components/Container'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Set loading to false after 3 seconds
  }, []);

  return (
    <div>
      {loading? <Container/> : <Calculator/>}
    </div>
  )
}

export default App
