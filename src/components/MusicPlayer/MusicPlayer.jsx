import "./MusicPlayer.scss";
import { useEffect, useState } from 'react';

function MusicPlayer() {

const PlaylistCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
          try {
            const response = await axios.get('/api/getAccessToken');
            const accessToken = response.data.accessToken;
            const data = await getSpotifyPlaylistCategories(accessToken);
            setCategories(data.categories.items);
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
        };
    
        getCategories();
      }, []);

    return (
      <>
        <div>
            <h1>SPOTIFY TIMER</h1>
        </div>
      </>
    )
  }
  
  export default MusicPlayer






  return (
    <div>
      <h1>Spotify Playlist Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistCategories;