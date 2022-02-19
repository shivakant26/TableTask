import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <Link to="/form">Form</Link>
                 <Link to="/table">Table</Link>
                    
            </div>
        )
    }
}
export default Menu;