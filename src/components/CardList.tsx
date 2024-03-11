import { Grid, Typography } from "@mui/material";
import CustomCard from "./CustomCard";

interface CardListProps<T> {
    data: T[];
    renderItem: (item: T) => React.ReactNode;
}

const CardList: React.FC<CardListProps<any>> = ({ data, renderItem }) => {
    return (
        <Grid container spacing={2}>
            {data.map((item, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                    <CustomCard
                        key={index}
                        id={item.match_id}
                        href={`/match/${item.match_id}`}
                    >
                        {renderItem(item)}
                    </CustomCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default CardList;
