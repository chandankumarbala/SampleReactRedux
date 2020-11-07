import React from 'react'
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component{
    render () {
        return (
            <div><h2>HEADER Common component</h2>
            <nav id="mainMenu" className="mr-auto" defaultActiveKey="/home"  >
                        <Link className="nav-link active" to="/home" >HOME</Link> |   
                        <Link className="nav-link" to="/login"> LOGIN</Link>
                     </nav>
                     <hr ></hr>
            </div>
        );
    }
}

export default HeaderComponent;