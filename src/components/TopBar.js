import React, { Component } from 'react';

export default class TopBar extends Component {
    render() {
        var { name, value } = this.props;
        return (
            <>
                <div className='TopCover'>
                    <div className='DataValue'>{name} <span>{value}</span></div>
                </div>
            </>
        );
    }
}
