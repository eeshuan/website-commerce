import Item from "../class/item";
import { store } from "../../components/redux/store";
import { addItem, setItem, removeItem, clearItems } from "../../components/redux/actions";

export class CartCache {
    private static _instance: CartCache;

    public static get instance(): CartCache {
        if (this._instance == undefined) {
            this._instance = new CartCache();
        }
        return this._instance;
    }

    public addItems(item: Item, quantity: number = 1): void {
        store.dispatch(addItem(item, quantity));
    }

    public setItems(item: Item, quantity: number = 1): void {
        store.dispatch(setItem(item, quantity))
    }

    public removeItems(itemId: string, quantity: number = 1): void {
        store.dispatch(removeItem(itemId, quantity));
    }

    public clearCache(): void {
        store.dispatch(clearItems());
    }

    public getCount(itemId: string): number {
        let count: number = 0;
        store.getState().cart.map((item) => {
            count += item.count;
        });
        return count;
    }

    public getCartItems(): {item: Item, count: number}[] {
        return store.getState().cart;
    }
}