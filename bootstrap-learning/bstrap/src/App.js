import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './logo.svg';
import './App.css';
import {
    Jumbotron,
    Grid,
    SimplePage
} from './pages';

function SiteLayout({
    children,
    menu = c => null
}) {
    return (
        <>
            <div> {menu} </div>
            <div> {children} </div>
        </>
    )
}

function App({
    Children=Jumbotron
}) {
    return (
        <>
        <SimplePage />
        <SiteLayout menu={<p> Menu </p>}>
            <Children /> 
        </SiteLayout>
        <Grid />
        </>
  );
}

export default App;
