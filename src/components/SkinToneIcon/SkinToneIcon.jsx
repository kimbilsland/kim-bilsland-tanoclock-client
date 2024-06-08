const SkinToneIcon = ({ skinTone, onClick, icon }) => {
  const port = import.meta.env.VITE_LOCALHOST;

  return (
    <div onClick={() => onClick(skinTone)}>
      <img src={`${port}/${icon}`} alt={skinTone} />
    </div>
  );
};

export default SkinToneIcon;
