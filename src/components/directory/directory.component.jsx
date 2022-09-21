import CategoryItem from "../category-item/category-item.compenent";
import "./directory.styles.scss";

const Directory = ({categories}) => {

  return(
    <div className='directory-container'>
      {categories.map((category)=>( //whenever we map, we need to use the id
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  )
}

export default Directory;