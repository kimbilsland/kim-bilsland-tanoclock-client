import "./SkinToneSelector.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import SkinToneIcon from "../SkinToneIcon/SkinToneIcon";

const SkinToneSelector = ({ tones }) => {
  //initializes selected skin tone and sets it for future sessions
  const [selectedSkinTone, setSelectedSkinTone] = useState(
    sessionStorage.getItem("selectedSkinTone") || null
  );

  //stores the skintone in local storage on click of icon
  const handleSkinToneClick = (skinTone) => {
    console.log("Clicked tone:", skinTone);
    sessionStorage.setItem("selectedSkinTone", skinTone);
    setSelectedSkinTone(skinTone);
  };

  return (
    <div className="selector">
      <h3 className="selector__header" >Select Skin Tone</h3>
      <ul className="selector__list">
        {tones.map((tone) => (
          <li className="selector__item"key={tone.id}>
            <Link className="selector__link" to={`/home`}>
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
