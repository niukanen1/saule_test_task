import BagStore from "@/Stores/BagStore";
import {
	Box,
	Button,
	Center,
	Divider,
	Flex,
	Heading,
	HStack,
	Icon,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	VStack,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import BagViewController from "./BagViewController";
import { v4 as uuid } from "uuid";

type BagViewProps = {
	isOpen: boolean;
	onClose: () => void;
};

function BagView({ isOpen, onClose }: BagViewProps) {
	const { incrementQuantity, reduceQuantity, isEmpty, submitData } = BagViewController();
	return (
		<Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
			<ModalOverlay />
			<ModalContent minHeight={"300px"} maxHeight={"70%"} overflow={"scroll"}>
                <ModalHeader>
                    <Heading size={'lg'}>Bag</Heading>
                </ModalHeader>
				<ModalBody>
					{isEmpty ? (
						<Center height={"300px"}>
							<Heading color={"gray.400"}>Nothing in here</Heading>
						</Center>
					) : (
						<>
							<VStack alignItems={"flex-start"} divider={<Divider />}>
								{BagStore.bagItems.map((item) => (
									<Flex
										key={uuid()}
										justifyContent={"space-between"}
										alignItems={"center"}
										width={"100%"}>
										<Box textAlign={"left"}>
											<Text>{item.item.title}</Text>
											<Text color={"gray.400"} fontSize={"xs"}>
												{item.item.outcome.title}
											</Text>
										</Box>
										<HStack>
											<Button size={"xs"} onClick={() => reduceQuantity(item)}>
												<Icon as={AiOutlineMinus} />
											</Button>
											<Text>{item.quantity}</Text>
											<Button size={"xs"} onClick={() => incrementQuantity(item)}>
												<Icon as={AiOutlinePlus} />
											</Button>
										</HStack>
									</Flex>
								))}
							</VStack>
						</>
					)}
				</ModalBody>
				<ModalFooter>
					<Center width={"100%"}>
						{isEmpty ? (
							<></>
						) : (
							<Button onClick={()=>submitData()} backgroundColor={"teal.400"} color={"white"} paddingX={"100px"}>
								Place bets
							</Button>
						)}
					</Center>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default observer(BagView);
