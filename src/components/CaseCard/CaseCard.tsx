import React from "react";
import classes from "./styles.module.scss";

interface ICaseCard {
    card: ICase;
}

export function CaseCard({ card }: ICaseCard) {
    return (
        <div key={card.Id} className={classes.card}>
            <div style={{ background: `#${card.CaseColor}` }}>
                <img className={classes.img} src={card.Image} alt={card.Title} />
                <div
                    className={classes.description}
                    style={
                        card.CaseColor === "FFFFFF"
                            ? { color: "#000" }
                            : { color: "#fff", textShadow: "2px 2px 2px #000" }
                    }>
                    <div className={classes.title}>{card.Title}</div>
                    <div className={classes.filters}>{card.Filters.map((filter) => `${filter.Name}, `)}</div>
                </div>
            </div>
        </div>
    );
}
