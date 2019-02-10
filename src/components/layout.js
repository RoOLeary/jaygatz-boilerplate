import React from 'react'
import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading',
            year: new Date().getFullYear(),
            x: 0, 
            y: 0
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);
    }

    componentWillUnmount () {
         window.removeEventListener('scroll', this.handleScroll);
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    handleScroll = ev => {
        this.setState({
            x: window.scrollX,
            y: window.scrollY
        });
    };


    scrollTo = (id) => () => {
        console.log('click is registered')
        const el = document.querySelector(id)
        if (el) return window.scrollTo(0, el.offsetTop - 20)
        return false
    };

    

    render() {
        const { children } = this.props

        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} onScrollPos={`${this.state.y}`} />
                    {children}
                    <Contact />
                    <Footer year={`${this.state.year}`}/>
                    
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />
            </div>
        )
    }
}

export default Layout
