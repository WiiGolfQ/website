import { Container, Title, Text, Button, Group } from "@mantine/core"
import classes from "./HeroImageRight.module.css"

export function HeroImageRight() {
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Play <i className="font-extrabold">Wii Sports</i>{" "}
                            golf{" "}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{
                                    from: "sea-green.5",
                                    to: "green.7",
                                }}
                            >
                                competitively
                            </Text>
                        </Title>

                        <Text className={classes.description} mt={30}>
                            Play 1v1 matches for the best score or time. Get
                            ranked and climb the leaderboards. Compete with
                            strangers or friends.
                        </Text>

                        <Group>
                            <Button
                                variant="gradient"
                                gradient={{
                                    from: "red.9",
                                    to: "red.7",
                                }}
                                size="xl"
                                className={`${classes.control} ${classes["button-hover"]}`}
                                mt={40}
                            >
                                Get started
                            </Button>

                            <Button
                                className={classes.control}
                                color="gray.8"
                                size="xl"
                                mt={40}
                            >
                                Join the Discord
                            </Button>
                        </Group>
                    </div>
                </div>
            </Container>
        </div>
    )
}
