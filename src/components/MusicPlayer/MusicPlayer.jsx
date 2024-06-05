import "./MusicPlayer.scss";
import { useEffect, useState } from "react";
import GetSpotifyPlaylists from "./GetSpotifyPlaylists/GetSpotifyPlaylists";

const MusicPlayer = ({ accessToken }) => {
  // const [playlists, setPlaylists] = useState([]);

  // useEffect(() => {
  //   const getPlaylists = async () => {
  //     try {
  //       const playlistsData = await GetSpotifyPlaylists(accessToken);
  //       setPlaylists(playlistsData);
  //     } catch (error) {
  //       console.error("Error fetching playlists", error);
  //     }
  //   };

  //   if (accessToken) {
  //     getPlaylists();
  //   }
  // }, [accessToken]);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <iframe src="https://open.spotify.com/embed/track/7xGfFoTpQ2E7fRF5lN10tr" width="50%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      `,
        }}
      ></div>
    </div>
  );
};

export default MusicPlayer;

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

//   return (
//     <div>
//       <h1>Spotify Playlist Categories</h1>
//       <ul>
//         {categories.map(category => (
//           <li key={category.id}>{category.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// return (
//     <div>
//       <h1>Summer Playlists</h1>
//       <ul>
//         {playlists.map((playlist) => (
//           <li key={playlist.id}>
//             <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
//               {playlist.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MusicPlayer

{
  /* <h1>Summer Playlists</h1>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <a
              href={playlist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>click</p>
              {playlist.name}
            </a>
          </li>
        ))}
      </ul>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX1gRalH1mWrP?utm_source=generator"
        width="100%"
        height="170px"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe> */
}


