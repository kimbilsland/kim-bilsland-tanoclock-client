import "./UVIndex.scss";
import axios from "axios";
import { useState, useEffect } from "react";

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
                `http://localhost:8080/api/uvindex?lat=${lat}&long=${long}`
              );
              setUV(response.data);
              console.log(response.data);
            } catch (error) {
              console.log("Error fetching UV data", error);
              setError("Error fetching UV data", error);
            }
          },
        );
      } else {
        setError("Geolocation is not supported by this browser.",error);
      }
    };

    getUVCurrentLocation();
  }, []);


  return <>{uv ? <h1>{uv.result.uv}</h1> : <h1>...loading</h1>}</>;
}

export default UVIndex;
