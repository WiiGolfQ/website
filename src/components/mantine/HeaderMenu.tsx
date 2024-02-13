"use client"

import { Menu, Group, Center, Burger, Container, Title } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"
import classes from "./HeaderMenu.module.css"
import { title } from "process"

interface NavbarLink {
    link: string
    label: string
    links?: NavbarLink[]
}

type Props = {
    title: string
    links: NavbarLink[]
}

export function HeaderMenu({ title, links }: Props) {
    const [opened, { toggle }] = useDisclosure(false)

    const renderMenuItems = (link: NavbarLink) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ))

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    transitionProps={{ exitDuration: 0 }}
                    withinPortal
                >
                    <Menu.Target>
                        <a href={link.link} className={classes.link}>
                            <Center>
                                <span className={classes.linkLabel}>
                                    {link.label}
                                </span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            )
        }

        return (
            <a key={link.label} href={link.link} className={classes.link}>
                {link.label}
            </a>
        )
    }

    const menuItems = links.map(renderMenuItems)

    return (
        <header className={classes.header}>
            <Container size="md">
                <div className={classes.inner}>
                    <Title order={4} className={classes.title}>
                        <a href="/">{title}</a>
                    </Title>
                    <Group gap={5} visibleFrom="sm">
                        {menuItems}
                    </Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        size="sm"
                        hiddenFrom="sm"
                    />
                </div>
            </Container>
        </header>
    )
}
