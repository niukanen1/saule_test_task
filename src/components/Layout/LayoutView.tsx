import { Flex, Heading, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import {BsBag, BsBagFill} from 'react-icons/bs';
import BagView from "../Bag/BagView";
function Layout({ children }: PropsWithChildren) {
    const {isOpen, onOpen, onClose} = useDisclosure();
	return (
		<>
			<Flex
				justifyContent={"space-around"}
				alignItems={"center"}
				width={"100%"}
				padding={"10px"}
				backgroundColor={'gray.50'}>
                    <Heading size={'md'}>Bet Point</Heading>
                    <Icon _hover={{cursor: 'pointer'}} onClick={onOpen} as={BsBag}/>
            </Flex>
			{children}
            <BagView isOpen={isOpen} onClose={onClose} />
		</>
	);
}

export default Layout;
