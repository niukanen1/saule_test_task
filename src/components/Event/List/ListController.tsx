import { Event } from "@/pages/api/getEvents"
import { useEffect, useState } from "react"
import ListModel from "./ListModel";

function ListController() { 
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState<Event[]>([]);
    useEffect(() => { 
        ListModel.fecthEvents((err) => { 
            if (err) { 
                alert(err.message);
            }
            setLoading(false);
        })
    }, [])
    useEffect( () => { 
        setEvents(ListModel.events);
    }, [ListModel.events])
        
    return { 
        loading,
        events
    }
}

export default ListController