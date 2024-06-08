import "./LandingPage.scss";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SkinToneSelector from "../../components/SkinToneSelector/SkinToneSelector";

function LandingPage() {
  const { id } = useParams();
  const [tones, setTone] = useState(null);
  const navigate = useNavigate();

  //checks if skintone is saved in local storage and directs to home if stored.
  useEffect(() => {
    const storedSkinTone = localStorage.getItem("selectedSkinTone");
    if (storedSkinTone) {
      navigate(`/home`);
    } else {
      getData();
    }
  }, [id, navigate]);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:8080/skintones/");
      setTone(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  if (tones === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SkinToneSelector tones={tones} />
    </>
  );
}

export default LandingPage;
