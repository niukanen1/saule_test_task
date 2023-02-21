import { Container, Flex, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import EventCardView from "../EventCardView";
import ListController from "./ListController";

function List() {
	const { loading, events } = ListController();
	return (
		<Wrap spacing={'10px'} w={'100%'} padding={'10px'}>
			{loading ? <>Loading...</> : events.map((event) => (
                <WrapItem key={event.id} width={'210px'}>
                    <EventCardView  eventData={event} />
                </WrapItem>
            ))}
		</Wrap>
	);
}

export default observer(List);
