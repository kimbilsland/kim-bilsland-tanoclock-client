import "./HomePage.scss";
import {useState, useEffect} from 'react';
import axios from "axios";
import data from "../../data/fake-uv.json"
import Timer from "../../components/Timer/Timer";
import SunscreenTimer from "../../components/SunscreenTimer/SunscreenTimer";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import UVIndex from "../../components/UVIndex/UVIndex";
import ProductList from "../../components/ProductList/ProductList";


function HomePage() {

    const [uv, setUV] = useState(null);
  
    useEffect(() => {
      setUV(data);
    }, []);


  // const [uv, setUV] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getUVCurrentLocation = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         async (position) => {
  //           const lat = position.coords.latitude;
  //           const long = position.coords.longitude;

  //           try {
  //             const response = await axios.get(
  //               `http://localhost:8080/api/uvindex?lat=${lat}&long=${long}`
  //             );
  //             setUV(response.data);
  //             console.log(response.data);
  //           } catch (error) {
  //             console.log("Error fetching UV data", error);
  //             setError("Error fetching UV data", error);
  //           }
  //         },
  //       );
  //     } else {
  //       setError("Geolocation is not supported by this browser.",error);
  //     }
  //   };

  //   getUVCurrentLocation();
  // }, []);


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
    // <>
    //   <UVIndex uv={uv}/>
    //   <MusicPlayer accessToken={accessToken}/>
    //   <Timer uv={uv}/>
    //   <SunscreenTimer/>
    //   <ProductList/>
    // </>

<>
<UVIndex />
<MusicPlayer accessToken={accessToken}/>
<Timer/>
<SunscreenTimer/>
<ProductList/>
</>
  );
}

export default HomePage;
