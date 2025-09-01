import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavbarContext, NavbarColorContext } from './NavContext'

const NavProvider = ({ children }) => {
    const [navColor, setNavColor] = useState('white')
    const [navOpen, setNavOpen] = useState(false)

    const locate = useLocation().pathname
    
    useEffect(() => {
        if (locate === '/projects' || locate === '/agency' || locate === '/blog') {
            setNavColor('black')
        } else {
            setNavColor('white')
        }
    }, [locate])

    return (
        <NavbarContext.Provider value={[navOpen, setNavOpen]}>
            <NavbarColorContext.Provider value={[navColor, setNavColor]}>
                {children}
            </NavbarColorContext.Provider>
        </NavbarContext.Provider>
    )
}

export default NavProvider