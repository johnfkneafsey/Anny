import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        return (
            <p>hello</p>
        );
    }
}


const mapStateToProps = (state, props) => ({

});

export default connect(mapStateToProps)(Body);