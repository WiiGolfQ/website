import Acc from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, ButtonBase } from "@mui/material";

interface AccordionProps {
    summary: React.ReactNode;
    disabled?: boolean;
    expanded?: boolean;
    children: React.ReactNode;
}

export default function Accordion({
    summary,
    expanded = false,
    disabled = false,
    children,
}: AccordionProps) {
    return (
        <Acc
            expanded={disabled ? false : undefined}
            defaultExpanded={expanded}
            slotProps={{ transition: { unmountOnExit: true } }}
        >
            <AccordionSummary
                expandIcon={!disabled && <ExpandMoreIcon />}
                sx={
                    disabled
                        ? {
                              // jank to get it to actually recognize it
                              "&&.MuiButtonBase-root.MuiAccordionSummary-root:hover:not(.Mui-disabled)":
                                  {
                                      cursor: "default",
                                  },
                          }
                        : {}
                }
            >
                <Box width={"100%"} mr={!disabled ? 2 : 0}>
                    {summary}
                </Box>
            </AccordionSummary>
            <AccordionDetails>{!disabled && children}</AccordionDetails>
        </Acc>
    );
}
