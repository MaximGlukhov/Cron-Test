import React from "react";
import classes from "./styles.module.scss";
import { useUnit } from "effector-react";
import { $filterState, $filteredCase, cleanFilter, openPopup } from "../../store";

export default function FiltersBtn() {
    const openFilters = useUnit($filterState);
    const filtered = useUnit($filteredCase);

    const handleCleanFilters = () => {
        cleanFilter();
    };

    return (
        <div className={!openFilters ? `${classes.filtersBtn}` : `${classes.filtersBtn} ${classes.filtersBtnActive}`}>
            {filtered.length > 0 && (
                <>
                    <div onClick={handleCleanFilters} className={classes.cleanBtn}>
                        Очистить
                    </div>
                    <div className={classes.cleanLine}></div>
                </>
            )}
            <div className={filtered.length > 0 ? `${classes.romb} ${classes.rombFilter}` : `${classes.romb}`}></div>
            <div className={classes.animLine}></div>
            <div onClick={() => openPopup()} className={classes.text}>
                Фильтры
            </div>
        </div>
    );
}
