import { BagEvent, BagItem } from "@/Stores/BagStore";
import BagStore from "@/Stores/BagStore";
import { useEffect, useState } from "react";
import { autorun, toJS } from "mobx";
import { Response } from "@/pages/api/placebets";
import { useToast } from "@chakra-ui/react";



export default function BagViewController() {
	const [isEmpty, setIsEmpty] = useState<boolean>();
    const toast = useToast()
	const incrementQuantity = (bagItem: BagItem<BagEvent>) => {
		BagStore.addBagItem(bagItem);
	};
	const reduceQuantity = (bagItem: BagItem<BagEvent>) => {
		BagStore.reduceBagItem(bagItem);
	};
    const submitData = () => { 
        fetch("api/placebets", {
            method: "POST",
            body: JSON.stringify(toJS(BagStore.bagItems))
        }).then(res => { 
            return res.json()
        }).then((data: Response) => { 
            if(data.error) { 
                toast({ 
                    title: data.message,
                    status: 'error', 
                    duration: 3000,
                })
            }
            if (data.success) { 
                toast({ 
                    title: data.message,
                    status: 'success', 
                    duration: 3000,
                })
            }
        });
        BagStore.clearBag();
    }

	useEffect(() => {
		autorun(() => {
			if (BagStore.bagItems.length == 0) {
				setIsEmpty(true);
			} else {
				setIsEmpty(false);
			}
		});
	}, [BagStore.bagItems]);

	return {
		incrementQuantity,
		reduceQuantity,
		isEmpty,
        submitData
	};
}
