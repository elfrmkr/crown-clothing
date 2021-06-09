import React from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.componet';

import CollectionPage from '../collection/collection.component';
import {firestore, converCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// data related to actual collection in the shop page so the class is necessary

class ShopPage extends React.Component { 

  state = {
      loading: true
  };
  
    unsubscribeFromSnapshot = null;

    componentDidMount(){

        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections'); // the name inside the firebase docs
        // whenever this runs, returns the code of the collection objects array when renders
       this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        
        const collectionsMap =  converCollectionsSnapshotToMap(snapshot)
        updateCollections(collectionsMap);
        this.setState({loading:false});
        });
    }

    render(){ 
        const {match} = this.props;
        const {loading} = this.state;
        return (<div className = 'shop-page'>
                <Route exact path = {`${match.path}`} render = {(props) => <CollectionsOverviewWithSpinner isLoading = {loading} {...props}/>}/>
            <Route path = {`${match.path}/:collectionId`} render = {(props) => <CollectionPageWithSpinner isLoading = {loading} {...props}/>}/>
            </div>);
    }};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect (null, mapDispatchToProps)(ShopPage);