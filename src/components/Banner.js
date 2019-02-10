import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Hi, I'm Ro</h1>
            </header>
            <div className="content">
                <p>A responsive site template designed by HTML5 UP<br />
                and released under the Creative Commons.</p>
                <ul className="actions">
                    <li><AnchorLink className="button next scrolly" href='#one'>Get Started</AnchorLink></li>
                </ul>
                 
            </div>
        </div>
    </section>
)

export default Banner
