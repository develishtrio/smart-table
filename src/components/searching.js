import {rules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const compare = createComparison([
        rules.skipEmptyTargetValues,
        rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)
    ]);

    return (data, state, action) => {
        // Если поле поиска пустое,то возвращаем все строки без фильтрации
        if (!state[searchField]) return data;

        // @todo: #5.2 — применить компаратор
        return data.filter(row => compare(row, state));
    }
}