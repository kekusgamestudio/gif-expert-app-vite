import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import './GifExpertApp.css'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Goku']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        onNewValue={ onAddCategory }
      />


      {/* Cuerpo */}
      <ol>
        { 
          categories.map(category => (
            <GifGrid key={category} category={category}/>
          ))
        }
      </ol>


      </>
  )
}

// compa = 824093b1-d345-412d-95df-fbea7936a10b
// promo = 5a9b2274-0b83-42fa-a8e0-4804c9682c2b