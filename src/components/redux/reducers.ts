import { combineReducers } from "redux";
import { ADD_ITEM, REMOVE_ITEM, SET_ITEM, CLEAR_ITEMS } from "./actions";
import Item from "../../scripts/class/item";

/**
 * Initial State
 */
 const initialState = {
     cart: []
 }

/**
 * Reducers
 */
export function cart(state: {item: Item, count: number}[] = [], action: {type: string, object?: any, count?: number}) {
    switch(action.type) {
        case ADD_ITEM: {
            if (state.find((item => item.item.id == action.object.id))) {
                return state.map((item) => {
                    if (item.item.id == action.object.id) {
                        return Object.assign({}, item, {count: item.count + action.count});
                    }
                    return item;
                });
            }
            else {
                return [
                    ...state,
                    {
                        count: action.count,
                        item: action.object
                    }
                ];
            }
        }
        case REMOVE_ITEM: {
            if (state.find((item => item.item.id == action.object.id))) {
                let removeFlag: boolean = false;
                let resultState = state.map((item) => {
                    if (item.item.id == action.object.id) {
                        if (item.count - action.count <= 0) {
                            removeFlag = true;
                        }
                        return Object.assign({}, item, {count: item.count - action.count});
                    }
                    return item;
                });
                if (removeFlag) {
                    return state.filter((item) => item.item.id != action.object);
                }
                else {
                    return resultState;
                }
            }
            else {
                return state.filter((item) => item.item.id != action.object);
            }
        }
        case SET_ITEM: {
            if (state.find((item => item.item.id == action.object.id))) {
                if (action.count <= 0) {
                    return state.filter((item) => item.item.id != action.object.id);
                }
                return state.map((item) => {
                    if (item.item.id == action.object.id) {
                        return Object.assign({}, item, {count: action.count});
                    }
                    return item;
                });
            }
            else {
                if (action.count > 0) {
                    return [
                        ...state,
                        {
                            count: action.count,
                            item: action.object
                        }
                    ];
                }
                else {
                    return state;
                }
            }
        }
        case CLEAR_ITEMS: {
            return [];
        }
        default: {
            return state;
        }
    }
}

/**
 * Main Reducer
 */
export const cartComponent = combineReducers({
    cart
});