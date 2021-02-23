import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {

    const [categories, setCategories] = useState(['Shingeky No kiojin']);

    /* const handleAdd = () => {
        setCategories(['Siete Pecados Capitales', ...categories]);
        //setCategories([...categories, 'Siete Pecados Capitales']);
        //setCategories(cats => [...cats, 'Siete Pecados Capitales'])

        // formas de añadir un elemento al estado anterior
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />

            <ol>
                {
                    categories.map(category =>
                        <GifGrid key={category} category={category} />
                    )
                }
            </ol>

        </>
    )
}

export default GifExpertApp
