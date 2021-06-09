import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

//now we don't need access to state anymore so you can call regular function

const Directory = ({sections}) => (
            
   <div className = 'directory-menu'>
       {sections.map(({ id, ... otherSectionProps}) => (<MenuItem key = {id} {...otherSectionProps}/>))  }
   </div>
        );

  const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
  });

export default connect(mapStateToProps)(Directory);