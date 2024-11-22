import RandomDog from './components/randomDog/randomDog'
import './App.css'
  
  function App() {

  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <RandomDog />
        <RandomDog />
        <RandomDog />
      </div>
    )
  }
  export default App
