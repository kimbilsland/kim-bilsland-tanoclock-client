//for future implementation - see MusicPlayer. 

import { useState, useEffect } from "react";
import "./SpotifyPlayer.scss";
import Login from "../Login/Login";
import Cookies from "js-cookie";
import axios from "axios";

function SpotifyPlayer() {
  const [token, setToken] = useState(Cookies.get("access_token") || "");
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("access_token");
    console.log(token);

    if (token) {
      Cookies.set("access_token", token);
      setToken(token);
    }
  }, []);

  useEffect(() => {
    const getSummerPlaylists = async () => {
      if (token) {
        try {
          const response = await axios.get(
            "http://localhost:8080/api/spotify/summer"
          );
          setPlaylists(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching playlists", error);
          setError("Error fetching playlists");
        } finally {
          setLoading(false);
        }
      }
    };

    getSummerPlaylists();
  }, [token]);

  return (
    <div>
      {!token ? (
        <Login />
      ) : (
        <>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <>
              <h2>Summer Playlists</h2>
              <ul>
                {playlists.map((playlist) => (
                  <li key={playlist.id}>{playlist.name}</li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
}
export default SpotifyPlayer;
