export const getGifs = async (category) => {
  const apiKey = 'vsyH7GB595uFXzHSe7TLhCqZJi863jof';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=2`;
  const response = await fetch(url);
  const data = await response.json();

  const gifs = data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.fixed_height.url,
  }));

  return gifs;
};
