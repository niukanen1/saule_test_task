import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Container, Heading } from '@chakra-ui/layout'
import EventList from '@/components/Event/List/EventList'
import { Box } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box width={"100%"} height={"100%"} padding={'10'}>
        <Heading>Home page</Heading>
        {/* <Container padding={'10'}> */}
            <EventList/>
        {/* </Container> */}
    </Box>
  )
}
