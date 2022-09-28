import {CategoryContainer, CategoryComponentTitle} from "./category.styles.jsx";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap])
    return (
        <>
        <CategoryComponentTitle>
                {category.toUpperCase()}
        </CategoryComponentTitle>
        <CategoryContainer>
        {
            products &&
            products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
        }
        </CategoryContainer>
        </>
        
    );
};

export default Category;