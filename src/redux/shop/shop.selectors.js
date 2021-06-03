import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';


// we are using this object because our url parameter is string but we have a number to identify the categories 

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop =>shop.collections
);
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    //object valuelarını dönüyor
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);