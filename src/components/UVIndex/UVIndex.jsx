import "./UVIndex.scss";
// import axios from "axios";
import { useState, useEffect } from "react";
import data from '../../data/fake-uv.json'


// function UVIndex() {
  // const [uv, setUV] = useState(null);
  // const [error, setError] = useState(null);

  function UVIndex() {
    const [uv, setUV] = useState(null);
  
    useEffect(() => {
      setUV(data);
    }, []);


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

  function roundUV(uvData) {
    const roundedUV = uv.result.uv
    console.log(parseInt(roundedUV))
  }

  function getUVLevel(uvData) {
    const UVLevel = uvData.result.uv;

    if (UVLevel <= 2) {
        return "Low";
      } else if (UVLevel >= 3 && UVLevel <= 5) {
        return "Moderate";
      } else if (UVLevel >= 6 && UVLevel <= 7) {
        return "High";
      } else if (UVLevel >= 8 && UVLevel<= 10) {
        return "Very High";
      } else {
        return "Extreme";
      }
    }

    
  return (
        <>
          {uv ? (
            <div>
              <h1>{data.result.uv}</h1>
              <p>{getUVLevel(uv)}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </>
  );
}

export default UVIndex;
