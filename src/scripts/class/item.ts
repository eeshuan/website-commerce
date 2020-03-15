export default class Item {
    private _id: string;
    private _itemName: string;
    private _price: number;
    private _imagePath: string;
    private _urlPath: string;

    constructor(id: string, itemName: string, price: number, imagePath: string, urlPath: string) {
        this._id  = id;
        this._itemName = itemName;
        this._price = price;
        this._imagePath = imagePath;
        this._urlPath = urlPath;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._itemName;
    }

    get price(): number {
        return this._price;
    }

    get image(): string {
        return this._imagePath;
    }

    get urlPath(): string {
        return this._urlPath;
    }
}