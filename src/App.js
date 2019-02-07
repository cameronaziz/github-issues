import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import Layout from './components/Layout';
import Repositories from './components/Repositories';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <Repositories />
                </Layout>
            </Provider>
        );
    }
}

export default App;