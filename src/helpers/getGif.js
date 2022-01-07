export const getGif = async (categorie) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categorie
  )}&limit=10&api_key=z3bZoUQrp7F5qjY3Xr5MUVKBEJZsikUw`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      img: img.images.downsized_medium.url,
      title: img.title,
    };
  });
  return gifs;
};
