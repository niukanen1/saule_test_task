import { Event } from "@/pages/api/getEvents";
import { makeAutoObservable } from "mobx";

class EventCardModel {
	constructor() {
		makeAutoObservable(this);
	}
}

export default new EventCardModel();
