import { Event, Outcome } from "@/pages/api/getEvents";
import BagStore, { BagEvent } from "@/Stores/BagStore";
import { useToast } from "@chakra-ui/react";


function EventCardController() { 
    const toast = useToast(); 
    const addToBagStore = (event: Event, outcome: Outcome) => { 
        const newItem: BagEvent = { 
            id: event.id, 
            title: event.title, 
            outcome: outcome,
        }; 
        BagStore.addBagItem({quantity: 1, item: newItem});
        toast({
            position: 'bottom-left', 
            title: "Added a bet to the bag!",
            status: 'info',
            duration: 3000,
            isClosable: true
        })
    }

    return { 
        addToBagStore
    }
}

export default EventCardController; 