import {CategoryPreviewContainer,TitleCategory,Preview } from './category-preview.styles';
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({title, products}) => {
    return(
        <CategoryPreviewContainer>
            <TitleCategory to={title}>{title.toUpperCase()}</TitleCategory>
            <Preview>
                {
                    products.filter((_,index)=> index < 4)
                        .map((product) => <ProductCard key={product.id} product={product} />)
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}
export default CategoryPreview;