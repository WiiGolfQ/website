"use client";

import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CustomLink from "@/components/CustomLink";

interface Props {
    children: React.ReactNode;
    id?: string;
    href?: string;
    placeholder?: boolean;
}

const CustomCard = ({ children, id, href, placeholder }: Props) => {
    const idCorner = (
        <Box
            sx={{
                position: "absolute", // Position the box absolutely
                top: 0,
                left: 0,
                minWidth: 30,
                backgroundColor: "primary.main",
                color: "white",
                p: 1,
                borderRadius: "8px 0 8px 0",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant="body2">{id}</Typography>
        </Box>
    );

    let card = (
        <Card sx={{ position: "relative" }}>
            <CardContent
                sx={{
                    p: 2,
                    "&:last-child": {
                        paddingBottom: 2,
                    },
                }}
            >
                {children}
            </CardContent>
            {id &&
                (href ? (
                    <CustomLink href={href}>{idCorner}</CustomLink>
                ) : (
                    idCorner
                ))}
        </Card>
    );

    if (href && !id) card = <CustomLink href={href}>{card}</CustomLink>;

    return card;
};

export default CustomCard;
