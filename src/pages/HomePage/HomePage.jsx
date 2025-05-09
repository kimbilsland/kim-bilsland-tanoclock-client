import "./HomePage.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Timer from "../../components/Timer/Timer";
import SunscreenTimer from "../../components/SunscreenTimer/SunscreenTimer";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import UVIndex from "../../components/UVIndex/UVIndex";
import ProductList from "../../components/ProductList/ProductList";
import sunImage from "../../assets/images/pictures/pool.jpg";

const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  const [uv, setUV] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUVCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;

          try {
            const response = await axios.get(
              `${API_URL}/api/uvindex?lat=${lat}&long=${long}`
            );
            console.log(response.data)
            setUV(response.data);
          } catch (error) {
            setError("Error fetching UV data", error);
          }
        });
      } else {
        setError("Geolocation is not supported by this browser.", error);
      }
    };

    getUVCurrentLocation();
  }, []);

  const storedSkinTone = sessionStorage.getItem("selectedSkinTone");

  return (
    <main>
      {!storedSkinTone ? (
        <Link to="/" />
      ) : (
        <div className="home">
          <UVIndex uv={uv} />
          <div className="home__container">
            <div className="home__timers">
              <Timer uv={uv} />
              <SunscreenTimer />
            </div>
            <div className="home__music">
              <MusicPlayer />
              <div className="home__image-box">
                <img className="home__image" src={sunImage} />
              </div>
            </div>
          </div>
          <ProductList />
        </div>
      )}
    </main>
  );
}

export default HomePage;
