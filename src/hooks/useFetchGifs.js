import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async (category) => {
    const gifs = await getGifs(category);
    setImages(gifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages(category);
  }, [category]);

  return {
    images,
    isLoading,
  };
};
