import "./UVIndex.scss";

const UVIndex = ({ uv }) => {

  function roundUV(uvData) {
    const roundedUV = Math.round(uvData.result.uv);
    return roundedUV;
  }

  function getUVLevel(roundedUV) {

    if (roundedUV <= 2) {
      return "Low";
    } else if (roundedUV >= 3 && roundedUV <= 5) {
      return "Moderate";
    } else if (roundedUV >= 6 && roundedUV <= 7) {
      return "High";
    } else if (roundedUV >= 8 && roundedUV <= 10) {
      return "Very High";
    } else {
      return "Extreme";
    }
  }

  function getUVcolor(uvLevel) {
    switch (uvLevel) {
      case "Low":
        return "uv__level--low";
      case "Moderate":
        return "uv__level--moderate";
      case "High":
        return "uv__level--high";
      case "Very High":
        return "uv__level--very-high";
      case "Extreme":
        return "uv__level--extreme";
      default:
        return "";
    }
  }

  return (
    <>
      {uv ? (
        <div className="uv">
          <h2 className="uv__heading">UV INDEX</h2>
          <div className="uv__info">
            <h1 className="uv__index">{roundUV(uv)}</h1>
            <h2 className={`uv__level ${getUVcolor(getUVLevel(roundUV(uv)))}`}>
              {getUVLevel(roundUV(uv))}
            </h2>
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </>
  );
}

export default UVIndex;
