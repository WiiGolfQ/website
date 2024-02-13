import { Card, Container, SimpleGrid, Title, Center } from "@mantine/core"

const OngoingMatches = () => {
    return (
        <div>
            <Container size="lg">
                <Center>
                    <Title order={1}>Ongoing Matches</Title>
                </Center>
                <SimpleGrid
                    cols={{ base: 1, sm: 2, md: 3 }}
                    spacing="md"
                    verticalSpacing="md"
                ></SimpleGrid>
            </Container>
        </div>
    )
}

export default OngoingMatches
