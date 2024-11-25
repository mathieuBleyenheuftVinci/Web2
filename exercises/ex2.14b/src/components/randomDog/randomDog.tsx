import { useEffect, useState } from "react";

interface Dog {
  message: string;
  status: string;
}

const RandomDog = () => {
  const [dog, setDog] = useState<Dog | undefined>(undefined);

  const fetchDogImage = async () => {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        if (!response.ok) {
            throw new Error(
                'fetch error : ${response.status} ${response.statusText}'
            )
        }
        const dogs = await response.json();
        setDog(dogs);
    } catch (error) {
        console.error(error);     
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  if (!dog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Random dog</h3>
      <img src={dog.message} alt="Random dog" style={{ maxHeight: 300 }} />
    </div>
  );
};

export default RandomDog;