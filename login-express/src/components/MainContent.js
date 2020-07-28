import React from 'react';


class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    showProduct = () => {
        this.props.history.push({ pathname: "/Product" })
    }

    closeProduct = () => {
        this.props.history.push({ pathname: "/MainContent" })
    }

    showOrder = () => {
        this.props.history.push({ pathname: "/Order" })
    }

    closeOrder = () => {
        this.props.history.push({ pathname: "/MainContent" })
    }

    doLogout = () => {
        this.props.history.push({ pathname: "/" })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Welcome {this.props.email.toUpperCase()}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" onClick={this.showProduct} href="#">Product<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" onClick={this.showOrder} href="#">Order<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={this.doLogout} href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Main