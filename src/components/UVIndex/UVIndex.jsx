import "./UVIndex.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_LOCALHOST;

function UVIndex() {
  const [uv, setUV] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUVCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            try {
              const response = await axios.get(
                `${API_URL}/api/uvindex?lat=${lat}&long=${long}`
              );
              console.log(response.data);
              setUV(response.data);
            } catch (error) {
              console.log("Error fetching UV data", error);
              setError("Error fetching UV data", error);
            }
          },
        );
      } else {
        setError("Geolocation is not supported by this browser.", error);
      }
    };

    getUVCurrentLocation();
  }, []);

  function roundUV(uvData) {
    const roundedUV = Math.round(uvData.result.uv);
    console.log("Rounded UV:", roundedUV);
    return roundedUV;
  }

  function getUVLevel(roundedUV) {
    console.log("Rounded UV Level:", roundedUV);

    if (roundedUV <= 2) {
      return "Low";
    } else if (roundedUV >= 3 && roundedUV <= 5) {
      return "Moderate";
    } else if (roundedUV >= 6 && roundedUV <= 7) {
      return "High";
    } else if (roundedUV >= 8 && roundedUV <= 10) {
      return "Very High";
    } else {
      return "Extreme";
    }
  }

  function getUVcolor(uvLevel) {
    switch (uvLevel) {
      case "Low":
        return "uv__level--low";
      case "Moderate":
        return "uv__level--moderate";
      case "High":
        return "uv__level--high";
      case "Very High":
        return "uv__level--very-high";
      case "Extreme":
        return "uv__level--extreme";
      default:
        return "";
    }
  }

  return (
    <>
      {uv ? (
        <div className="uv">
          <h2 className="uv__heading">UV INDEX</h2>
          <div className="uv__info">
            <h1 className="uv__index">{roundUV(uv)}</h1>
            <h2 className={`uv__level ${getUVcolor(getUVLevel(roundUV(uv)))}`}>
              {getUVLevel(roundUV(uv))}
            </h2>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default UVIndex;
