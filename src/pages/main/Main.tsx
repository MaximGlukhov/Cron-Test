import React from "react";
import Header from "../../components/Header/Header";
import classes from "./styles.module.scss";
import Filters from "../../components/Filters/Filters";
import CasesList from "../../components/CasesList/CasesList";

export function Main() {
    return (
        <div className={classes.main}>
            <Header />
            <Filters />
            <CasesList />
        </div>
    );
}
