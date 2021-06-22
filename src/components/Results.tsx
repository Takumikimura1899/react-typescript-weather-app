type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

const Results = ({ results }: ResultsPropsType) => {
  const { cityName, country, temperature, conditionText, icon } = results;
  return (
    <>
      {cityName && (
        <div className="results-city">
          <span>都市名:</span>
          {cityName}
        </div>
      )}

      {country && (
        <div className="results-country">
          <span>国名:</span>
          {country}
        </div>
      )}

      {temperature && (
        <div className="results-temp">
          <span>気温:</span>
          {temperature}
          <span>℃</span>
        </div>
      )}

      {conditionText && (
        <div className="results-condition">
          <span>天気:</span>
          <div>
            <img src={icon} alt="icon" />
            <span>{conditionText}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Results;
