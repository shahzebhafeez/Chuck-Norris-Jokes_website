import React,{useState} from 'react';

const CategoryContext = React.createContext();

const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState("none");
  
    const handleCategoryChange = (newCategory) => {
      setCategory(newCategory);
    };
  
    return (
      <CategoryContext.Provider value={{ category, handleCategoryChange }}>
        {children}
      </CategoryContext.Provider>
    );
  };

export {CategoryContext,CategoryProvider};