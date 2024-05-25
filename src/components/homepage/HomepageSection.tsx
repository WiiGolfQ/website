import { ReactNode } from "react";
import { Typography, Box } from "@mui/material";

interface HomepageSectionProps {
    title: string;
    children: ReactNode;
}

const HomepageSection: React.FC<HomepageSectionProps> = ({
    title,
    children,
}) => {
    return (
        <Box
            sx={{
                width: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: 4,
            }}
        >
            <Typography fontWeight="bold" variant="h4" sx={{ mb: 2 }}>
                {title}
            </Typography>
            {children}
        </Box>
    );
};

export default HomepageSection;
