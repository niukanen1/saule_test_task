import { Event } from "@/pages/api/getEvents";
import { makeAutoObservable } from "mobx";

class ListModel {
	constructor() {
		makeAutoObservable(this);
	}

	events: Event[] = [];

	// just in case :)
	addEvent(newEvent: Event) {
		this.events.push(newEvent);
	}

	setEvents(events: Event[]) {
		this.events = events;
	}

	fecthEvents(completion: (error?: Error) => void) {
		fetch("/api/getEvents")
			.then((res) => res.json())
			.then((data) => {
                this.setEvents(data as Event[])
                completion();
            })
			.catch((err) => {
				const error = err as Error;
                completion(error)
			});
	}
}

export default new ListModel();
