import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [joke, setJoke] = useState<{ joke: string } | null>();
  const [category, setCategory] = useState<{category: string} | null>();

  const fetchJoke = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
      .then(response => response.json())
      .then(joke => {
        setJoke(joke);
        setCategory({ category: joke.category });
      })
  }
  useEffect(() => {

    const interval = setInterval(() => {
      fetchJoke();
    }, 10000);
    return () => clearInterval(interval);
  } ,[])

  /*const handleClick = () => {
    fetchJoke();
  }*/
      
  return (
        <div>
          <h1>Random Joke</h1>
          <p>Category : {category?.category}</p>
          <p>{joke?.joke}</p>
        </div>
  )
}

export default App;
