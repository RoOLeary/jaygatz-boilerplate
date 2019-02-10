import React from 'react'


const Year = () => {
    return (new Date()).getFullYear();
}


const Footer = (props) => (

    

    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; { props.year }</li><li>Made with <span style={{ color: 'red' }} >&hearts;</span> in Amsterdam</li>
            </ul>
        </div>
    </footer>
)

export default Footer
