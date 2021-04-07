import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () =>{


    const [categories, setCategories] = useState(['HxH']);

    // const handleAdd = () => {
    //     setCategories([...categories,'sakura']);
    // }

    return(
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />

        <hr></hr>
        

        <ol>
            {
                categories.map((category) => (
                  <GifGrid 
                    key={category}
                    category={category}
                  />
                ))
            }
        </ol>

      </>
    )
  
  };