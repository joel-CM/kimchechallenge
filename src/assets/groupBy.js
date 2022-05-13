export const groupByLanguages = (payload) => {
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
      lanObj[lan.name].push(c.name);
    });
  });
  return lanObj;
};

export const groupByContinents = (payload) => {
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
    continentObj[c.continent.name].push(c.name);
  });

  return continentObj;
};
