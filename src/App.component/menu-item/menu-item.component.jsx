import React from 'react';
import "/Users/mayankgaur/Documents/test-react/taj-mg-clothing/src/App.component/menu-item/menu-item.style.scss";
const MenuItem = ({title , imageUrl , size})=>{
    return(
        <div  className={`${size} menu-item`}>
        
        <div className='background-image' style = {{
            backgroundImage:`url(${imageUrl})`
        }}></div>
        <div className='contant'>
        <h1 className='title'> {title.toUpperCase()}</h1>
        <span className='subtitle'> SHOP NOW</span>
        </div>
        </div>
    
    )
}
export default MenuItem;