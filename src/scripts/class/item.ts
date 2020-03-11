export default class Item {
    private _itemName: string;
    private _price: number;
    private _imagePath: string;
    private _urlPath: string;

    constructor(itemName: string, price: number, imagePath: string, urlPath: string) {
        this._itemName = itemName;
        this._price = price;
        this._imagePath = imagePath;
        this._urlPath = urlPath;
    }

    get name() {
        return this._itemName;
    }

    get price() {
        return this._price;
    }

    get image() {
        return this._imagePath;
    }

    get urlPath() {
        return this._urlPath;
    }
}