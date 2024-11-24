import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdList from './components/AdList';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={AdList} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
