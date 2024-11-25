
import RandomDog from "./components/randomDog/randomDog";

const App = () => {


  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <RandomDog key={1} />
        <RandomDog key={2} />
        <RandomDog key={3} />
      </div>

     
    </>
  );
};

export default App;