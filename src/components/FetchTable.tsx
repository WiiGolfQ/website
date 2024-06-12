"use client";

import { useFetch } from "@/lib/useFetch";
import { Skeleton } from "@mui/material";
import {
    DataGrid,
    GridRowsProp,
    GridColDef,
    GridPaginationModel,
    GridPaginationMeta,
} from "@mui/x-data-grid";
import { useMemo, useRef, useState } from "react";

interface FetchTableProps {
    route: string;
    columns: GridColDef[];
}

const FetchTable = ({ route, columns }: FetchTableProps) => {
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 50,
        page: 0,
    });
    const { data, error, isLoading } = useFetch(
        `${route}?page=${paginationModel.page + 1}`
    );

    const rows: GridRowsProp = data ? data.results : [];

    const rowCountRef = useRef(data?.count || 0);

    // use memoization to prevent flickering while the data is fetching
    const rowCount = useMemo(() => {
        if (data?.count !== undefined) {
            rowCountRef.current = data.count;
        }
        return rowCountRef.current;
    }, [data?.count]);

    const paginationMetaRef = useRef<GridPaginationMeta>();

    // use memoization to prevent flickering while the data is fetching
    const paginationMeta = useMemo(() => {
        if (
            data?.next !== null &&
            paginationMetaRef.current?.hasNextPage !== (data?.next !== null)
        ) {
            paginationMetaRef.current = { hasNextPage: data?.next !== null };
        }
        return paginationMetaRef.current;
    }, [data?.next]);

    const dataGrid = (
        <DataGrid
            rowCount={rowCount}
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { pageSize: 50, page: 0 },
                },
            }}
            pageSizeOptions={[50]}
            paginationMeta={paginationMeta}
            paginationModel={paginationModel}
            paginationMode="server"
            onPaginationModelChange={setPaginationModel}
            getRowId={(row) => row.pk}
            disableColumnSorting
            disableColumnFilter
            disableRowSelectionOnClick
        />
    );

    return isLoading ? (
        <Skeleton variant="rounded" height="100vh" width="100%" />
    ) : (
        dataGrid
    );
};

export default FetchTable;
