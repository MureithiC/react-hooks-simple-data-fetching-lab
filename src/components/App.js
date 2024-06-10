import React, { useState, useEffect } from 'react';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDogImage() {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImageUrl(data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDogImage();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {dogImageUrl && !loading && <img src={dogImageUrl} alt="A Random Dog" />}
    </div>
  );
}

export default App;