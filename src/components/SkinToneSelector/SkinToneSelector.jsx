import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SkinToneIcon from "../SkinToneIcon/SkinToneIcon";

const SkinToneSelector = ({ tones }) => {
  const [selectedSkinTone, setSelectedSkinTone] = useState(
    localStorage.getItem("selectedSkinTone") || null
  );

  useEffect(() => {
    if (selectedSkinTone) {
      console.log("Selected tone:", selectedSkinTone); // Check if selected tone is logged correctly
      localStorage.setItem("selectedSkinTone", selectedSkinTone);
    }
  }, [selectedSkinTone]);

  const handleSkinToneClick = (skinTone) => {
    console.log("Clicked tone:", skinTone); // Check if click event is handled correctly
    setSelectedSkinTone(skinTone);
  };

  return (
    <div>
      <h3>Select Skin Tone</h3>
      <ul>
        {tones.map((tone) => (
          <li key={tone.id}>
            <Link key={tone.id} to={`/home`} >
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
