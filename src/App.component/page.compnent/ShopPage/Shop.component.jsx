import React,{Component} from 'react';
import SHOP_DATA from './shop.data.js'
import PreviewCollection from '/Users/mayankgaur/Documents/test-react/taj-mg-clothing/src/App.component/Preview.collection/previewCollection.component.jsx'

class ShopPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            collections:SHOP_DATA
        }
    }
    render(){
        
        return(<div className='shop-page'>
            {
                this.state.collections.map(({id , ...otherCollection}) =>(
                    <PreviewCollection key={id} {...otherCollection}></PreviewCollection>
                ))
            }
            </div>
        )
    }
}
export default ShopPage;