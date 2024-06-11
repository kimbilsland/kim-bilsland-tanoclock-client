import "./MusicPlayer.scss";

const MusicPlayer = () => {
  return (
    <iframe className="iframe"
      src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4gWghK0svuI?utm_source=generator"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default MusicPlayer;


