import React from "react";
import classes from "./styles.module.scss";
import { useUnit } from "effector-react";
import { $filterState, openPopup } from "../../store";

export default function FiltersBtn() {
    const openFilters = useUnit($filterState);

    return (
        <div className={!openFilters ? `${classes.filtersBtn}` : `${classes.filtersBtn} ${classes.filtersBtnActive}`}>
            <div className={classes.romb}></div>
            <div className={classes.animLine}></div>
            <div onClick={() => openPopup()} className={classes.text}>
                Фильтры
            </div>
        </div>
    );
}
