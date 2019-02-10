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
                Lover of all things internetty. And Liverpool FC. #YNWA</p>
                <ul className="actions">
                    <li><AnchorLink className="button next scrolly" href='#one'>TELL ME MORE, TELL ME MORE...</AnchorLink></li>
                </ul>
                 
            </div>
        </div>
    </section>
)

export default Banner
