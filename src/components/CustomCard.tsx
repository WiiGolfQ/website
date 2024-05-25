"use client";

import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "nextra-theme-docs";

interface Props {
    children: React.ReactNode;
    id?: string;
    href?: string;
}

const CustomCard = ({ children, id, href }: Props) => {
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

    const card = (
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
            {id && (href ? <Link href={href}>{idCorner}</Link> : idCorner)}
        </Card>
    );

    return card;
};

export default CustomCard;
