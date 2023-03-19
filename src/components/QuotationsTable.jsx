import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { QuotationsListRow } from './QuotationsListRow'

const QuotationsTable = ({
    quotations,
    loading
}) => {
    useEffect(() => {
        console.log(quotations);
    }, [quotations]);

    if (loading) return <p>Quotation table is loading...</p>

    const columns = [
        {
            field: 'authorName', headerName: 'Author Name',
            valueGetter: (i) => `${i.row.authorFirst || ''} ${i.row.authorLast || ''}`,
            width: 200
        },
        {field: 'quotation',  headerName: 'Quote', width: 10000}
    ]

    return (
        <Paper sx={{ width: '80%', overflow: 'hidden', height: '80%'}}>
            <Box>
                <DataGrid
                    rows={quotations}
                    columns={columns}
                    autoHeight={true}
                    getRowId={(row) => row.ID}
                />
            </Box>
        </Paper>
    )
}

export default QuotationsTable;