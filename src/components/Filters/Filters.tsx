import React from "react";
import classes from "./styles.module.scss";
import { $filterState, $filteredCase, getFilter } from "../../store";
import { useUnit } from "effector-react";
import { filteredCases } from "../../constants/filteredCases";

export default function Filters() {
    const openFilters = useUnit($filterState);
    const filtered = useUnit($filteredCase);

    const handleFilteredClick = (filter: any) => {
        getFilter(filter);
    };

    const isActiveMenuItem = (activeItem: string) => {
        return filtered.some((elem) => {
            return elem === activeItem;
        });
    };

    return (
        <div className={!openFilters ? `${classes.filters}` : `${classes.filters} ${classes.filtersActive}`}>
            <div className={classes.romb}></div>
            <div className={classes.columns}>
                <div className={classes.column}>
                    <div className={classes.columnTitle}>Отрасль</div>
                    <div className={classes.columnContainer}>
                        {filteredCases.map((filter) =>
                            filter.industry?.map((ind) => (
                                <div
                                    key={ind.name}
                                    onClick={() => handleFilteredClick(ind.name)}
                                    className={
                                        isActiveMenuItem(ind.name)
                                            ? `${classes.btn} ${classes.active}`
                                            : `${classes.btn}`
                                    }>
                                    {ind.name}
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.columnTitle}>Платформы</div>
                    <div className={classes.columnContainer}>
                        {filteredCases.map((filter) =>
                            filter.platforms?.map((item) => (
                                <div
                                    key={item.name}
                                    onClick={() => handleFilteredClick(item.name)}
                                    className={
                                        isActiveMenuItem(item.name)
                                            ? `${classes.btn} ${classes.active}`
                                            : `${classes.btn}`
                                    }>
                                    {item.name}
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.columnTitle}>Услуги</div>
                    <div className={classes.columnContainer}>
                        {filteredCases.map((filter) =>
                            filter.services?.map((item) => (
                                <div
                                    key={item.name}
                                    onClick={() => handleFilteredClick(item.name)}
                                    className={
                                        isActiveMenuItem(item.name)
                                            ? `${classes.btn} ${classes.active}`
                                            : `${classes.btn}`
                                    }>
                                    {item.name}
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.columnTitle}>Языки</div>
                    <div className={classes.columnContainer}>
                        {filteredCases.map((filter) =>
                            filter.languages?.map((item) => (
                                <div
                                    key={item.name}
                                    onClick={() => handleFilteredClick(item.name)}
                                    className={
                                        isActiveMenuItem(item.name)
                                            ? `${classes.btn} ${classes.active}`
                                            : `${classes.btn}`
                                    }>
                                    {item.name}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
