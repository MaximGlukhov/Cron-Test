import React from "react";
import classes from "./styles.module.scss";
import { $filterState, $filteredCase, getFilter } from "../../store";
import { useUnit } from "effector-react";

export default function Filters() {
    const openFilters = useUnit($filterState);
    const filtered = useUnit($filteredCase);

    const handleFilteredClick = () => {
        getFilter();
    };

    return (
        <div className={!openFilters ? `${classes.filters}` : `${classes.filters} ${classes.filtersActive}`}>
            <div className={classes.romb}></div>
            <div className={classes.columns}>
                <div className={classes.column}>
                    <div className={classes.columnTitle}>Отрасль</div>
                    <div className={classes.columnContainer}>
                        <div onClick={handleFilteredClick} className={classes.btn}>
                            BI-отчеты
                        </div>
                        <div className={classes.btn}>Гос. заказ</div>
                        <div className={classes.btn}>Энергетика</div>
                        <div className={classes.btn}>Образование</div>
                        <div className={classes.btn}>Финтех</div>
                        <div className={classes.btn}>Образ жизни</div>
                        <div className={classes.btn}>Медицина</div>
                        <div className={classes.btn}>E-commerce</div>
                        <div className={classes.btn}>Безопасность</div>
                        <div className={classes.btn}>Развлечения</div>
                        <div className={classes.btn}>Картография</div>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.columnTitle}>Платформы</div>
                    <div className={classes.columnContainer}>
                        <div className={classes.btn}>Android</div>
                        <div className={classes.btn}>Chat-system</div>
                        <div className={classes.btn}>Telegram</div>
                        <div className={classes.btn}>Backend</div>
                        <div className={classes.btn}>Windows</div>
                        <div className={classes.btn}>Панель управления</div>
                        <div className={classes.btn}>Web</div>
                        <div className={classes.btn}>iOS</div>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.columnTitle}>Услуги</div>
                    <div className={classes.columnContainer}>
                        <div className={classes.btn}>Релиз</div>
                        <div className={classes.btn}>Сопровождение</div>
                        <div className={classes.btn}>Дизайн</div>
                        <div className={classes.btn}>Тестирование</div>
                        <div className={classes.btn}>Разработка</div>
                        <div className={classes.btn}>Предпроектная деятельность</div>
                        <div className={classes.btn}>Аналитика</div>
                        <div className={classes.btn}>Приемка</div>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.columnTitle}>Языки</div>
                    <div className={classes.columnContainer}>
                        <div className={classes.btn}>Node.JS</div>
                        <div className={classes.btn}>Java</div>
                        <div className={classes.btn}>Xamarin</div>
                        <div className={classes.btn}>Wordpress</div>
                        <div className={classes.btn}>Drupal 8, Angular</div>
                        <div className={classes.btn}>ASP.NET Core, Azure</div>
                        <div className={classes.btn}>MS Power BI</div>
                        <div className={classes.btn}>1C-Битрикс</div>
                        <div className={classes.btn}>Objective-C</div>
                        <div className={classes.btn}>C#, UWP</div>
                        <div className={classes.btn}>Python</div>
                        <div className={classes.btn}>PHP</div>
                        <div className={classes.btn}>Kotlin</div>
                        <div className={classes.btn}>MODX</div>
                        <div className={classes.btn}>Swift</div>
                        <div className={classes.btn}>PhoneGap</div>
                        <div className={classes.btn}>React</div>
                        <div className={classes.btn}>Java, Kotlin</div>
                        <div className={classes.btn}>Cordova</div>
                        <div className={classes.btn}>C++</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
