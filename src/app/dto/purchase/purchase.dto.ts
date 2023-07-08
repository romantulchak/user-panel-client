import {Item} from "./item.dto";

export class Purchase {
    id: string;
    name: string;
    shopType: string;
    itemCount: number;
    items: Item[];
}
