export default class ToDoListItem {
    constructor(){
        this._id = NULL;
        this,_item = NULL;
    }

    getId() {
        return this._id;
    }

    setId(id) {
        this._id = id;
    }

    getListItem() {
        return this._item;
    }

    setItem(item) {
        this._item = item;
        }
}