"use client"

import ImageDisplay from '@/comps/image-display';
import ImageSearch from '@/comps/image-search';
import React, { useState } from 'react';


export default function Home() {
  const [images, setImages] = useState([]);
  const accessKey = 'ifelun_D7aonEfrOTCpy1vum7Qojg0-3rrmWZGcqZcA';

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=28&client_id=${accessKey}`);
      const data = await response.json();
      const fetchedImages = data.results;
      setImages(fetchedImages);
     console.log(fetchedImages)
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      <ImageSearch onSearch={handleSearch} />
      <ImageDisplay images={images} />
    </div>
  );
}