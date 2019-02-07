import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './home';
import Invoices from './invoices';
import Products from './products';
import Customers from './customers';

const history = createBrowserHistory;

class Navigation extends Component {
    
    render() {
        return (
            <BrowserRouter history = { history }>
                <div>
                    <ul>
                        <li><Link to="/">InvoiceApp</Link></li>
                        <li><Link to="/invoices">Invoices</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/customers">Customes</Link></li>
                        
                    </ul>

                    <hr/>

                    <Route exact path="/" component = { Home }></Route>
                    <Route path="/invoices" component = { Invoices }></Route>
                    <Route path="/products" component = { Products }></Route>
                    <Route path="/customers" component = { Customers }></Route>

                </div>
            </BrowserRouter>
        )
    }

}

export default Navigation;
