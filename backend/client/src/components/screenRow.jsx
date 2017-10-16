import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScreenRow extends Component{
    static propTypes = {
        value: PropTypes.string.isRequired,
    };

    render(){
        return(
            <div className="screen-row">
                <input type="text" readOnly value={this.props.value}/>
            </div>
        );
    };
}

export default ScreenRow;