import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typing from 'react-typing-animation';

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <Typing>
                <h1>Hi, I'm Ronan...</h1>
                <Typing.Delay ms={2000} />
                <Typing.Backspace count={20} />
                <Typing.Delay ms={1000} />
                <h1>I make websites</h1>
                </Typing>
            </header>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit. Suscipit, tenetur.</p>
                <ul className="actions">
                    <li><AnchorLink className="button next scrolly" href='#one'>Get Started</AnchorLink></li>
                </ul>
                 
            </div>
        </div>
    </section>
)

export default Banner
