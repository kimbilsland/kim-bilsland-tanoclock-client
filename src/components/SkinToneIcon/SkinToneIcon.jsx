import "./SkinToneIcon.scss";

const SkinToneIcon = ({ skinTone, onClick, icon }) => {
  const port = import.meta.env.VITE_LOCALHOST;

  return (
    <div className="skintone" onClick={() => onClick(skinTone)}>
      <img className="skintone__icon" src={`${port}/${icon}`} alt={skinTone} />
    </div>
  );
};

export default SkinToneIcon;
