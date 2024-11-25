import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdList from './components/AdList';
import AdForm from './components/AdForm';
import Payment from './components/Payment';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={AdList} />
                <Route path="/create" component={AdForm} />
                <Route path="/payment" component={Payment} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
