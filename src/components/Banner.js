import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typing from 'react-typing-animation';

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <Typing speed={50}>
                    <h1>Hi, I'm Ro...<br />
                    <Typing.Delay ms={1000} />
                    ...I drink...<br />
                    <Typing.Delay ms={1000} />
                    ...and I code things.</h1>
                </Typing>
            </header>
            <div className="content">
                <p>Welcome aboard! Come on in, kick off your<br />
                shoes and let's do some maths.</p>
                <ul className="actions">
                    <li><AnchorLink className="button next scrolly" href='#one'>And awaaay we go...</AnchorLink></li>
                </ul>
                 
            </div>
        </div>
    </section>
)

export default Banner
