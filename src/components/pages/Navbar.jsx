import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaPiedPiperAlt } from "react-icons/fa";

const Navbar = () => {
  
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <div className="navbar  bg-primary" >
                <div className="logo">
                    <h1><FaPiedPiperAlt /><i className="logo">Shiv Shakti</i></h1>
                </div> 
                <div className="tabs">
                    <ul className='tab-container' style={{ listStyle: 'none' }}>
                        <li> <NavLink className="Links" to={'/Home'} style={({ isActive }) => { return { backgroundColor: isActive ? " skyblue " : " " } }}>
                            HOME
                        </NavLink>
                        </li>
                        <li> <NavLink className="Links" to={'/MultipleImg'} style={({ isActive }) => { return { backgroundColor: isActive ? " skyblue " : " " } }}>
                            MultipleImg
                        </NavLink>
                        </li>
                        <li> <NavLink className="Links" to={'/OptSelect'} style={({ isActive }) => { return { backgroundColor: isActive ? " skyblue " : " " } }}>
                            OptSelect
                        </NavLink>
                        </li>
                        <li> <NavLink className="Links" to={'/Eng-Dictionary'} style={({ isActive }) => { return { backgroundColor: isActive ? " skyblue " : " " } }}>
                            Eng-Dictionary
                        </NavLink>
                        </li>
                        <li> <NavLink className="Links" to={'/'} style={({ isActive }) => { return { backgroundColor: isActive ? " skyblue " : " " } }}>
                            Log-IN
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
