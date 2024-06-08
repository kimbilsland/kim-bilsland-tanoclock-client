import "./HomePage.scss";
import {useState, useEffect} from 'react';
import axios from "axios";
import Timer from "../../components/Timer/Timer";
import SunscreenTimer from "../../components/SunscreenTimer/SunscreenTimer";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import UVIndex from "../../components/UVIndex/UVIndex";
import ProductList from "../../components/ProductList/ProductList";


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
      <UVIndex/>
      <MusicPlayer accessToken={accessToken}/>
      <Timer/>
      <SunscreenTimer/>
      <ProductList/>
    </>
  );
}

export default HomePage;
