const getUrlOfLoadedImages = (shit: string) => {
  const target = "media/";
  const urlLoad = shit.indexOf(target) + target.length;
  return shit.slice(0, urlLoad) + 'crop/600/400/' + shit.slice(urlLoad)
};

export default getUrlOfLoadedImages;