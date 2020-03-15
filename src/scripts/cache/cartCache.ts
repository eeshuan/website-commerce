export class CartCache {
    private static _instance: CartCache;
    private static _cache: {[key: string]: number};
    private static _sessionKey: string = `cart`;

    public static get instance(): CartCache {
        if (this._instance == undefined) {
            this._instance = new CartCache();
            this.getFromStorage();
        }
        return this._instance;
    }

    public addItems(itemId: string, quantity: number = 1): void {
        if (CartCache._cache[itemId] == undefined) {
            CartCache._cache[itemId] = quantity;
        }
        else {
            CartCache._cache[itemId] += quantity;
        }
        this.storeToStorage();
    }

    public setItems(itemId: string, quantity: number = 1): void {
        if (quantity == 0) {
            delete CartCache._cache[itemId];
        }
        else {
            CartCache._cache[itemId] = Number(quantity);
        }
        this.storeToStorage();
    }

    public removeItems(itemId: string, quantity: number = 1): void {
        if (CartCache._cache[itemId] != undefined) {
            CartCache._cache[itemId] -= quantity;
        }
        this.storeToStorage();
    }

    public removeItem(itemId: string): void {
        delete CartCache._cache[itemId];
        this.storeToStorage();
    }

    public clearCache(): void {
        CartCache._cache = {};
        this.storeToStorage();
    }

    public getCount(itemId: string): number {
        return CartCache._cache[itemId] || 0;
    }

    private storeToStorage(): void {
        let jsonString: string = JSON.stringify(CartCache._cache);
        window.sessionStorage.setItem(CartCache._sessionKey, jsonString);
    }

    private static getFromStorage(): void {
        let jsonString: string = window.sessionStorage.getItem(this._sessionKey);
        if (jsonString) {
            this._cache = JSON.parse(jsonString);
        }
        else {
            this._cache = {};
        }
    } 
}