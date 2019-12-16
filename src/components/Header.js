import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ children }) => {

    const style = {
        display:'inline-block',
        margin:10,
        marginBottom:30,
    }




    return (
        <div>
            <div style={{float:'left'}}>
                <h4 style = {style}><Link to = '/'>Lewis Nangle</Link></h4>
            </div>
            {children}
        </div>
    )
}




export default Header;