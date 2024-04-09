export const getImgurl = (imageName) => {
  const imgUrl = new URL(`./assets/images/${imageName}`, import.meta.url)
    .href;
  return imgUrl;
};


export default getImgurl;