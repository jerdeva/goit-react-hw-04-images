// import { Component } from 'react';
import React from 'react';
import { Searchbar } from './Searchbar/Searchbar'
import { fetchImages } from './Api'
import {ImageGallery} from './ImageGallery/ImageGallery'
import {ButtonLoadMore} from './Button/Button'
import { Loader } from './Loader/Loader'
import {  useEffect, useState } from "react";

export const App = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [per_page, setPer_page] = useState(12);
    const [loadMore, setLoadMore] = useState(false);
    const [modal, setModal] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    const getImages = async (query, page) => {
    if (!query) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchImages(query, page);
        if (!hits.length) {
          setLoadMore(false)
        alert('SORRY! NOTHING WAS FOUND FOR YOUR REQUEST. TRY AGAIN');
        } else {
            setImages(prevImg => [...prevImg, ...hits]);
            setLoadMore( page < Math.ceil(totalHits / per_page))
        }
    } catch (error) {
        console.log(error)
        setError(true)
    } finally {
        setLoading(false)
    }

    }
    getImages();
  }, [page, query, per_page]);



  const  handleSubmit = (que) => {
      setQuery(`${que}`);
      setImages([]);
      setPage(1);
  };
    
    
     const loadMorePage = () => {
      setPage((prevItems) => (prevItems + 1 ));
    };

  const toggleModal = id => {
    setModal(!modal, id );
   };
  
  const  closeModal = () => {
    setModal(!modal );
  };

    

    return (
                <div>
           {loading && <Loader/>}
          <Searchbar handleSubmit={handleSubmit} />
          {loading && <Loader/>}
          {error && !loading &&
            
            <div>OOPS! ERROR!</div>}
          < ImageGallery
            images={images}
          />
           {loading && <Loader/>}
          {loadMore && <ButtonLoadMore onloadMore={loadMorePage} />}
    </div>
    )
}