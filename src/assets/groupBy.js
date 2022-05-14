// method to group by languages
export const groupByLanguages = (payload) => { //payload = [countries]
  let allLanguages = [];
  payload.forEach((c) => {
    c.languages.forEach((lan) => allLanguages.push(lan.name));
  });
  allLanguages = [...new Set(allLanguages)];

  const lanObj = {};
  allLanguages.forEach((lan) => {
    lanObj[lan] = [];
  });

  payload.forEach((c) => {
    c.languages.forEach((lan) => {
      lanObj[lan.name].push(c);
    });
  });
  return lanObj;
};

// method to group by continents
export const groupByContinents = (payload) => { // payload = [countries]
  let allContinents = [];
  payload.forEach((c) => {
    allContinents.push(c.continent.name);
  });
  allContinents = [...new Set(allContinents)];

  const continentObj = {};
  allContinents.forEach((continent) => {
    continentObj[continent] = [];
  });

  payload.forEach((c) => {
    continentObj[c.continent.name].push(c);
  });

  return continentObj;
};
