import React from 'react';
import Login from './components/Login'
import MainContent from './components/MainContent'
import Product from './components/Product';
import Order from './components/Order'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

const routes=[
    {id: 1, path:'/MainContent', component: MainContent },
    {id: 2, path:'/Product', component: Product},
    {id: 3, path:'/Order', component: Order}
]

class App extends React.Component {
    constructor() {
        super()
        this.state = { statusLogin: false, email: "", }
    }

    setStatusLogin = (bol) => {
        this.setState({ statusLogin: bol })
    }
    
    setEmail = (input) => {
        this.setState({ email: input })
    }

    render() {
        let a = routes.map((route) => {
                return <Route 
                    key={route.id} 
                    path={route.path} render ={
                    (props) =>{
                        return this.state.statusLogin ?
                                <route.component email={this.state.email} {...props} setLogin={this.setStatusLogin} /> : <Redirect to="/" />                    }
                } />
            }
        ) 

        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact render={(props) => { return <Login email={this.setEmail} {...props} setLogin={this.setStatusLogin} /> }} />
                        {a}
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App