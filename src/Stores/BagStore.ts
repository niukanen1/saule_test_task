import { Outcome } from './../pages/api/getEvents';
import { makeAutoObservable, toJS } from "mobx";

export type BagItem<T> = {
	quantity: number;
	item: T;
};
export type BagEvent = { 
    id: string;
    title: string; 
    outcome: Outcome
}
class BagStore {
	constructor() {
		makeAutoObservable(this);
	}

	bagItems: BagItem<BagEvent>[] = [];

	addBagItem(newBagItem: BagItem<BagEvent>) {
		if (this.checkIfInBag(newBagItem)) {
            this.editQuantity(newBagItem, 'increment');
            return
		}
		this.bagItems.push(newBagItem);
	}

    reduceBagItem(bagItem: BagItem<BagEvent>) { 
        if (this.checkIfInBag(bagItem)) {
            this.editQuantity(bagItem, 'reduce');
		}
    }

	clearBag() {
		this.bagItems = [];
	}

    private checkIfInBag(bagItem: BagItem<BagEvent>): boolean { 
        return this.bagItems.find((el, index) =>JSON.stringify(toJS(el.item)) == JSON.stringify(bagItem.item)) != undefined
    }

	private editQuantity(bagItemToEdit: BagItem<BagEvent>, action: "increment" | "reduce" | "erase") {
		for (let i = 0; i < this.bagItems.length; i++) {
			if (JSON.stringify(toJS(this.bagItems[i].item)) == JSON.stringify(bagItemToEdit.item)) {
				switch (action) {
					case "increment":
						this.bagItems[i].quantity = this.bagItems[i].quantity + 1;
                        break
					case "reduce":
						this.bagItems[i].quantity -= 1;
						if (this.bagItems[i].quantity == 0) {
                            this.bagItems = this.bagItems.filter(el => el.item != this.bagItems[i].item);
						}
                        break
                    case 'erase': 
                        this.bagItems = this.bagItems.splice(i, 1); 
                        break
				}
                break
			}
		};
	}
}

export default new BagStore();
