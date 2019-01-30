import React, { Component } from 'react';
import Layout from './components/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';

export default class App extends Component {
    render() {
        return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Layout>
        )
    }
}