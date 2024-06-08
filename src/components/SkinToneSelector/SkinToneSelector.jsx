import { useState } from "react";
import { Link } from "react-router-dom";
import SkinToneIcon from "../SkinToneIcon/SkinToneIcon";

const SkinToneSelector = ({ tones }) => {
  //initializes selected skin tone and sets it for future sessions
  const [selectedSkinTone, setSelectedSkinTone] = useState(
    localStorage.getItem("selectedSkinTone") || null
  );

  //stores the skintone in local storage on click of icon
  const handleSkinToneClick = (skinTone) => {
    console.log("Clicked tone:", skinTone);
    localStorage.setItem("selectedSkinTone", skinTone);
    setSelectedSkinTone(skinTone);
  };

  return (
    <div>
      <h3>Select Skin Tone</h3>
      <ul>
        {tones.map((tone) => (
          <li key={tone.id}>
            <Link to={`/home`}>
              <SkinToneIcon
                skinTone={tone.tone}
                onClick={handleSkinToneClick}
                icon={tone.image}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkinToneSelector;
