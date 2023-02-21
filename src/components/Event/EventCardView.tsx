import { Event } from "@/pages/api/getEvents";
import { Container, Divider, Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import EventCardController from "./EventCardController";

type EventCardProps = {
	eventData: Event;
};

function EventCardView({ eventData }: EventCardProps) {
    const {addToBagStore} = EventCardController(); 

	return (
		<Card size={"sm"} w={"100%"}>
			<CardHeader>
				<Heading size={"md"}>{eventData.title}</Heading>
			</CardHeader>

			<CardBody>
				<VStack overflow={"scroll"} divider={<Divider />}>
					{eventData.outcome.map((outcome, id) => (
						<Flex key={id} justifyContent={'space-between'} alignItems={'center'} w={'100%'}>
							<Heading size={"xs"}>{outcome.title}</Heading>
							<Button size={"xs"} onClick={() => addToBagStore(eventData, outcome)}>{outcome.coefficient}</Button>
						</Flex>
					))}
				</VStack>
			</CardBody>
		</Card>
	);
}

export default observer(EventCardView);
