import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductsContextProvider from './contexts/ProductsContext';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import MainPage from './pages/MainPage';

const Routes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/add" component={AddPage}/>
                    <Route exact path="/edit/:key" component={EditPage}/>
                </Switch>           
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default Routes;
