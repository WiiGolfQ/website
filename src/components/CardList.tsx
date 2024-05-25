import { Box, Grid, Typography } from "@mui/material";
import CustomCard from "./CustomCard";

interface CardListProps<T> {
    data: T[];
    renderItem: (item: T) => React.ReactNode;
    route?: string;
    slug?: string;
    id?: string;
    center?: boolean;
}

const CardList: React.FC<CardListProps<any>> = ({
    data,
    renderItem,
    route,
    slug,
    id,
    center,
}) => {
    return (
        <Grid container spacing={2}>
            {data.map((item, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                    <CustomCard
                        key={index}
                        href={`${route}/${slug ? item[slug] : ""}`}
                        id={id ? item[id] : null}
                    >
                        {center ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {renderItem(item)}
                            </Box>
                        ) : (
                            renderItem(item)
                        )}
                    </CustomCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default CardList;
