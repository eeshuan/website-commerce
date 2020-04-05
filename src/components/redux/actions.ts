import Item from "../../scripts/class/item";

/**
 * Constants
 */
export const ADD_ITEM = `ADD_ITEM`;
export const REMOVE_ITEM = `REMOVE_ITEM`;
export const SET_ITEM = `SET_ITEM`;
export const CLEAR_ITEMS = `CLEAR_ITEMS`;

/**
 * Actions
 */
export function addItem(item: Item, count: number = 1): {type: string, object: Item, count: number} {
    return {
        type: ADD_ITEM,
        object: item,
        count: count
    }
}

export function removeItem(itemId: string, count: number = 1): {type: string, object: string, count: number} {
    return {
        type: REMOVE_ITEM,
        object: itemId,
        count: count
    }
}

export function setItem(item: Item, count: number = 1): {type: string, object: Item, count: number} {
    return {
        type: SET_ITEM,
        object: item,
        count: count
    };
}

export function clearItems(): {type: string} {
    return {
        type: CLEAR_ITEMS
    };
}