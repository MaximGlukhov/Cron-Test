import axios from "axios";
import { combine, createApi, createEffect, createStore, restore } from "effector";

export const $filterState = createStore(false);
export const { openPopup } = createApi($filterState, {
    openPopup: (state: boolean) => {
        return !state;
    },
});

export const getCases = async () => {
    const response = await axios.get("https://services.it-cron.ru/api/cases/", {
        headers: {
            Accept: "text/plain",
            "Accept-Language": "ru",
        },
    });

    return response.data;
};
export const getCasesFx = createEffect(getCases);
export const $fetchError = restore(getCasesFx.failData, null);
export const $dataStore = createStore<ICase[]>([]).on(getCasesFx.doneData, (_store, res) => res.Data);

export const $casesGetStatus = combine({
    loading: getCasesFx.pending,
    error: $fetchError,
    data: $dataStore,
});

export const $filteredCase = createStore("");

export const { getFilter } = createApi($filteredCase, {
    getFilter: (state, payload) => {
        state = payload;
    },
});
