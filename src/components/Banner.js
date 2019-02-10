import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typing from 'react-typing-animation';

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <Typing speed={50}>
                    <h1>Ahoy there! I'm Ronan...<br />
                    <Typing.Delay ms={1000} />
                    ...I drink...<br />
                    <Typing.Delay ms={1000} />
                    ...and I code things.</h1>
                </Typing>
            </header>
            <div className="content">
                <p>Web Dev. Made in Dublin, based in Amsterdam<br />
                I make (and talk about) internet stuff.</p>
                <ul className="actions">
                    <li><AnchorLink className="button next scrolly" href='#one'>And awaaay we go...</AnchorLink></li>
                </ul>
                 
            </div>
        </div>
    </section>
)

export default Banner
