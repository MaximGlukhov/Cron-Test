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

    return (
        <div className={classes.cases}>
            {data
                // .filter((obj) => {
                //     return obj.Filters.some((subObj) => {
                //         return subObj.Name === filtered;
                //     });
                // })
                .map((item: ICase) => (
                    <CaseCard card={item} key={item.Id} />
                ))}
        </div>
    );
}
