import "./HomePage.scss";
import {useState, useEffect} from 'react';
import axios from "axios";
import Timer from "../../components/MusicPlayer/Timer/Timer";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";


function HomePage() {

  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const resp = await axios.get('/api/spotify/token');
        // const data = await resp.json();
        // setAccessToken(data.access_token);
        setAccessToken(resp.data)
      } catch (error) {
        console.error('Error fetching access token', error);
      }
    };

    getAccessToken();
  }, []);



  return (
    <>
      <MusicPlayer accessToken={accessToken}/>
      <Timer/>
    </>
  );
}

export default HomePage;
