import React from "react";
import classes from "./styles.module.scss";
import FiltersBtn from "../FiltersBtn/FiltersBtn";

export default function Header() {
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Кейсы</h1>
            <FiltersBtn />
        </div>
    );
}
