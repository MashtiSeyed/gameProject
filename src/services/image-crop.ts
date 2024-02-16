import noImg from "../assets/placeholder.png";
const getUrlOfLoadedImages = (url: string) => {
  if (!url) return noImg ;
  const urlLoad = url.indexOf("media/") + "media/".length;
  return url.slice(0, urlLoad) + "crop/600/400/" + url.slice(urlLoad);
};

export default getUrlOfLoadedImages;
