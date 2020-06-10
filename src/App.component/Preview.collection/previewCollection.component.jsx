import React from 'react';
import './previousCollection.style.scss'
import CollectionItem from '../collecton-item/collection-item.component'

const PreviewCollection = ({title,items}) =>(
        <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>

        {
            items
            .filter((item,idx)=>idx<4)
            .map(({id,...itemProps})=>(
                <CollectionItem key={id} {...itemProps} > </CollectionItem>
                ))}
        </div>
        </div>
    );
export default PreviewCollection;