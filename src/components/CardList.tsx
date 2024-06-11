import { Box, Grid, Skeleton, Typography } from "@mui/material";
import CustomCard from "./CustomCard";

interface CardListProps<T> {
    data: T[];
    renderItem: (item: T) => React.ReactNode;
    route?: string;
    slug?: string;
    id?: string;
    center?: boolean;
    placeholder?: boolean;
}

const CardList: React.FC<CardListProps<any>> = ({
    data,
    renderItem,
    route,
    slug,
    id,
    center,
    placeholder,
}) => {
    if (placeholder) data = Array.from({ length: 6 });

    return (
        <Grid container spacing={2}>
            {data.map((item, index) => {
                let content = renderItem(item);

                if (center)
                    content = (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {content}
                        </Box>
                    );

                if (placeholder) content = <Skeleton>{content}</Skeleton>;

                return (
                    <Grid item xs={12} sm={6} lg={4} key={index}>
                        <CustomCard
                            key={index}
                            href={
                                !placeholder
                                    ? `${route}/${slug ? item[slug] : ""}`
                                    : ""
                            }
                            id={id && !placeholder ? item[id] : null}
                        >
                            {content}
                        </CustomCard>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default CardList;
