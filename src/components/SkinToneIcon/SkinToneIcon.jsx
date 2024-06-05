

const SkinToneIcon = ({ skinTone, onClick, icon }) => {
  return (
    <div
      onClick={() => onClick(skinTone)}
    >
      {icon}
      {skinTone}
    </div>
  );
};

export default SkinToneIcon;