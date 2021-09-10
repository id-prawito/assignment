import React from "react";
import { Route, Switch } from "react-router-dom";
import Beranda from "../pages/Beranda";
import DataPengajuan from "../pages/DataPengajuan";
import HomePage from "../pages/HomePage";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Beranda} />
            <Route path="/homepage" exact component={HomePage} />
            <Route path="/data" component={DataPengajuan} />
        </Switch>
    );
};

export default Routes;
