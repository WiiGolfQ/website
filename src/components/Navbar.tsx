import { HeaderMenu } from "@/components/mantine/HeaderMenu"

const Navbar = () => {
    const links = [{ link: "/about", label: "About" }]

    return <HeaderMenu title="WiiGolfQ" links={links} />
}

export default Navbar
