import {BackgroundImage, Body, DirectoryItemContainer, } from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';
const DirectoryItem = ({category}) =>{
    const {title, imageUrl,route} = category;
    const navigate = useNavigate();//it is hook that take route and create a new uri base on the params
    const onNavigateHangler = () => navigate(route);//asign the route so we can trigger the method on the component
    
    return(
      <DirectoryItemContainer onClick={onNavigateHangler}>
        <BackgroundImage imageUrl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem;