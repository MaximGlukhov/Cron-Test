import React from "react";
import classes from "./styles.module.scss";
import { useUnit } from "effector-react";
import { $casesGetStatus, $filteredCase, getCasesFx } from "../../store";
import { CaseCard } from "../CaseCard/CaseCard";

export default function CasesList() {
    React.useEffect(() => {
        getCasesFx();
    }, []);

    const { loading, error, data } = useUnit($casesGetStatus);
    const filtered = useUnit($filteredCase);

    if (loading) {
        return <div className={classes.loading}>Загрузка...</div>;
    }

    if (error) {
        return <div className={classes.error}>Что то пошло не так, попробуйте перезагрузить страницу</div>;
    }

    const getFilteredCases = () => {
        return data
            .filter((obj) => {
                return obj.Filters.some((subObj) => {
                    const index = filtered.findIndex((elem: any) => elem === subObj.Name);
                    return subObj.Name === filtered[index];
                });
            })
            .map((item: ICase) => <CaseCard card={item} key={item.Id} />);
    };

    return (
        <div className={classes.cases}>
            {filtered.length > 0
                ? getFilteredCases()
                : data.map((item: ICase) => <CaseCard card={item} key={item.Id} />)}
        </div>
    );
}
