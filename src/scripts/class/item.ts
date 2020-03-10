export default class Item {
    private _itemName: string;
    private _price: number;
    private _imagePath: string;

    constructor(itemName: string, price: number, imagePath: string) {
        this._itemName = itemName;
        this._price = price;
        this._imagePath = imagePath;
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
}