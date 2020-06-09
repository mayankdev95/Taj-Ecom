import React from 'react';
import '/Users/mayankgaur/Documents/test-react/taj-mg-clothing/src/App.component/directory/directory.style.scss'
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            section:[
                
                    {
                        title:'HATS',
                        imageUrl:'https://d1l2kcmc130e06.cloudfront.net/blog/images/content/tw/dad_hat_embroidered_cover.jpg',
                        id:1,
                        linkUrl:'shop/hat'
                    },
                    {
                        title:'JACKET',
                        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMduR1CmqtBrAs66OHVSvuy8dT7NM4nn4YyZuw7dbzvldQmBnC&usqp=CAU',
                        id:2,
                        linkUrl:'shop/jacket'
                    },
                    {
                        title:'SNEAKERS',
                        imageUrl:'https://images.freekaamaal.com/post_images/1557483847.PNG',
                        id:3,
                        linkUrl:'shop/sneakers'
                    },
                    {
                        title:'WOMEN',
                        imageUrl:'https://leicestercityproshop.com/wp-content/uploads/2019/03/Womens-Wholesale-Fashion-Clothing.jpg',
                        id:4,
                        linkUrl:'shop/men',
                        size:'large'
                    },
                    {
                        title:'MEN',
                        imageUrl:'https://static1.fashionbeans.com/wp-content/uploads/2012/11/avva22.jpg',
                        id:5,
                        linkUrl:'shop/women',
                        size:'large'
                    }
            ]
        }
    }
    render(){
return(
        <div className = 'directoty-menu'>
        {
this.state.section.map(({title, imageUrl,id, size})=>(<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}>
    </MenuItem>))
        }
        </div>    
            )
        }
}
export default Directory;