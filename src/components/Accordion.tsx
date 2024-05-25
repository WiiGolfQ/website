import Acc from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

interface AccordionProps {
    summary: React.ReactNode;
    details: React.ReactNode;
}

export default function Accordion({ summary, details }: AccordionProps) {
    return (
        <Acc>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box width={"100%"} mr={2}>
                    {summary}
                </Box>
            </AccordionSummary>
            <AccordionDetails>{details}</AccordionDetails>
        </Acc>
    );
}
