import { Content } from "./content-interface";

export class ContentList {
  private _items: Content[]; 

  constructor(item: Content) { 
    this._items = []; 
  }

  getitems(): Content[] { 
    return this._items;
  }

  addContent(oneitem: Content): void { 
    this._items.push(oneitem);
  }

  getLength(): number { 
    return this._items.length;
  }

  printProperties(index: number): string {
    if (this._items.length <= index || index < 0) {
      return `<h2>Error, invalid index requested: ${index}</h2>`;
    }
    return `<div class="content-list">
              <h1>${this._items[index].title}</h1>
              <p>${this._items[index].description}</p>
              <h6>${this._items[index].creator}</h6>
              <img src="${this._items[index].imgURL}">
              <div>${this._items[index].type}</div>
            </div>`;
  }
}