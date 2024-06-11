const Login = () => {
  const handleLogin = () => {
    window.location = "http://localhost:8080/api/spotify/login";
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
};

export default Login;
