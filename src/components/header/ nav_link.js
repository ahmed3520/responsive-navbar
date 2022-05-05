import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavLink extends React.Component {
    constructor(props, context) {
        // context can be accessed now
        }
    render() {
        var isActive = this.context.history.location.pathname === this.props.to;
        var className = isActive ? 'active' : '';

        return(
            <Link className={className} {...this.props}>
                {this.props.children}
            </Link>
        );
    }
}

NavLink.contextTypes = {
    history: PropTypes.object
};

export default NavLink;