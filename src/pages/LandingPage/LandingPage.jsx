import "./LandingPage.scss";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SkinToneSelector from "../../components/SkinToneSelector/SkinToneSelector";

const API_URL = import.meta.env.VITE_API_URL;
console.log("✅ VITE_API_URL in production:", import.meta.env.VITE_API_URL);

function LandingPage() {
  const { id } = useParams();
  const [tones, setTone] = useState(null);
  const navigate = useNavigate();

  //checks if skintone is saved in local storage and directs to home if stored.
  useEffect(() => {
    const storedSkinTone = sessionStorage.getItem("selectedSkinTone");
    if (storedSkinTone) {
      navigate(`/home`);
    } else {
      getData();
    }
  }, [id, navigate]);

  async function getData() {
    try {
      const response = await axios.get(`${API_URL}/skintones/`);
      setTone(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  if (tones === null) {
    return <div className="loading"> Loading...</div>;
  }

  return (
    <div className="landing">
      <h1 className="landing__header" >Welcome! </h1>
      <div className="landing__container">
      <SkinToneSelector tones={tones} />
      </div>
    </div>
  );
}

export default LandingPage;
