import React from 'react'
import Links from './Links.jsx'

const Header = (props) => {
    
    let LinkNames = ['Home', 'About', 'Contact']

    let Linklist = () => LinkNames.map((link, index) => <Links LinkName={link}></Links>)
    
    return (
        <div>
            <div className="links">
            <Linklist />
            </div>
        </div>
    )
}

export default Header;