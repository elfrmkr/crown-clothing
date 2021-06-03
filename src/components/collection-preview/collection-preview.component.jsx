import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

// it should deside how we render items
const CollectionPreview = ({title, items}) => (

    <div className = 'collection-preview'>
        <h1 className = 'title'>{title.toUpperCase()}</h1>
        <div className ='preview'>
            {
                //making 4 items in preview
                items.filter((item,idx) => idx < 4)
                // passsing the item as a whole, defining with its id
                .map((item) => (
                    <CollectionItem key = {item.id} item= {item}/>
                ))
            }

        </div>
    </div>
)
export default CollectionPreview;