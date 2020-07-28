import React from 'react';
import { addUser } from '../api/user'


class Login extends React.Component {
    state = { email: '', pass: '', showEm: 'd-none', userInfo: null }


    
    onSubmit = async (event) => {
        event.preventDefault()
        const response = await addUser(this.state.email, this.state.pass)
        const data = await response.json()
        this.setState({ userInfo: data })
        if (this.state.userInfo.alert) {
            this.setState({ showEm: '' })
        } else {
            this.props.email(this.state.email)
            this.props.setLogin(true)
            this.props.history.push({ pathname: '/MainContent' })
        }
    }

    onNameChange = async (event) => {
        await this.setState({ email: event.target.value })
        console.log(this.state.email)
    }

    onPwChange = async (event) => {
        await this.setState({ pass: event.target.value })
        console.log(this.state.pass)
    }

    render() {
        console.log(this.state.userInfo)
        const textApp = {
            header: {
                text: "Login"
            },
            user: {
                text: "Email"
            },
            button: {
                text: "Submit"
            }
        }

        console.log(this.props)
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <div class={`alert alert-danger ${this.state.showEm}`} role="alert">
                            email/password salah
                        </div>
                        <label htmlFor="exampleInputEmail1">{textApp.user.text}</label>
                        <input type="email" className="form-control" onChange={this.onNameChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" onChange={this.onPwChange} id="inputPassword" aria-describedby="emailHelp" placeholder="Enter Password" />
                        <button onClick={this.onSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login