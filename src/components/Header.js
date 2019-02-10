import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className={props.onScrollPos > 500 ? 'reveal' : ' alt' }>
        <Link to="/" className="logo"><strong>DANGER</strong><span>RO</span></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func,
    onScrollPos: PropTypes.string
}

export default Header
