const getUrlOfLoadedImages = (url: string) => {
  const urlLoad = url.indexOf("media/") + "media/".length;
  return url.slice(0, urlLoad) + 'crop/600/400/' + url.slice(urlLoad);
};

export default getUrlOfLoadedImages;