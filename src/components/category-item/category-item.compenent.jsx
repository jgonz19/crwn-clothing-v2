import './category-item.styles.scss';

const CategoryItem = ({category}) =>{
    const {title, imageUrl} = category;
    return(
        <div className="category-container">
        <div className='background-image' style={{
          backgroundImage:`url(${imageUrl})`//we can append styles to the element. it will be translate to html bei react (background-image)
        }} />
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    )
}

export default CategoryItem;