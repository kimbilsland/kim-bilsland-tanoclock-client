import axios from 'axios';

const API_BASE_URL = 'https://api.spotify.com/v1';

const getSpotifyPlaylists = async (accessToken) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/browse/featured-playlists`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.playlists.items;
  } catch (error) {
    console.error('Error fetching playlists', error);
    throw error;
  }
};

export default getSpotifyPlaylists;





// const getSpotifyPlaylists = async (accessToken, categoryId) => {
//     try {
//         const response = await axios.get(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         return response.data.playlists.items;
//       } catch (error) {
//         console.error('Error fetching category playlists', error);
//         throw error;
//       }
//     };

    // const API_BASE_URL = 'https://api.spotify.com/v1';
    
    // const getFeaturedPlaylists = async (accessToken) => {
    //   try {
    //     const response = await axios.get(`${API_BASE_URL}/browse/featured-playlists`, {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     });
    //     return response.data.playlists.items;
    //   } catch (error) {
    //     console.error('Error fetching featured playlists', error);
    //     throw error;
    //   }
    // };
    
    // const getCategories = async (accessToken) => {
    //   try {
    //     const response = await axios.get(`${API_BASE_URL}/browse/categories`, {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     });
    //     return response.data.categories.items;
    //   } catch (error) {
    //     console.error('Error fetching categories', error);
    //     throw error;
    //   }
    // };
    
    // const getCategoryPlaylists = async (accessToken, categoryId) => {
    //   try {
    //     const response = await axios.get(`${API_BASE_URL}/browse/categories/${categoryId}/playlists`, {
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     });
    //     return response.data.playlists.items;
    //   } catch (error) {
    //     console.error('Error fetching category playlists', error);
    //     throw error;
    //   }
    // };

    
    // export default GetSpotifyPlaylists  
    // export { getFeaturedPlaylists, getCategories, getCategoryPlaylists };




// const [categories, setCategories] = useState([]);
// const API_URL = import.meta.env.VITE_BASE_URL;

// useEffect(() => {
//     async function getCategories() {
//       try {
//         const resp = await axios.get(`${API_URL}/api/spotify/getAccessToken`);
//         setCategories(resp.data);
//             //         setCategory(data.categories.items);
//       } catch (error) {
//         console.error("Error fetching categories: ", error);
//       }
//     }

//     getCategories();
//   }, []);
  
  // export default getSpotifyPlaylists;


// const token = 'BQC0_weYcV2o_Jq1Aqxy9_V_vyY-mQBaPCt0DbEsuWC0dYuBGohXNI1qAb256Ea9WSw_lVASHkeuEFxg6a370ssUYpWDKz9VSezjOPCt55tys-uX0GE_pe413f_htIYG7H5nRPhf1pq3zGVWVERwUdMAVcbw55OtFyDbSYxl9j-4MN8XxcCJgbyodMDYCA0iyulK-rCRhpnq3BVvZc1O8gOWnF3N1qnbnhsp3oNAfT84_l-9jblLYez5ifBFOVx-';
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body:JSON.stringify(body)
//   });
//   return await res.json();
// }

// async function getTopTracks(){
//     // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//     return (await fetchWebApi(
//       'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
//     )).items;
//   }
  
//   const topTracks = await getTopTracks();
//   console.log(
//     topTracks?.map(
//       ({name, artists}) =>
//         `${name} by ${artists.map(artist => artist.name).join(', ')}`
//     )
//   );




    

