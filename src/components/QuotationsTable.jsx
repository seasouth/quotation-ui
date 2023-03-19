import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { QuotationsListRow } from './QuotationsListRow'

const QuotationsTable = (props) => {
    // Show loading message
    if (props.loading) return <p>Quotation table is loading...</p>

    const columns = [
        {label: 'ID', width: 40},
        {label: 'Author', width: 100},
        {label: 'Quote', width: 400},
        {label: 'Source', width: 100},
        {label: 'Year', width: 80},
    ]

    return (
        <Paper sx={{ width: '80%', overflow: 'hidden', height: '80%'}}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell
                                    key={col.label}
                                    align={'left'}
                                    style={{ minWidth: col.width }}
                                >
                                    {col.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.quotations.map((quote) => (
                            <QuotationsListRow
                                key={quote.id}
                                quote={quote}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default QuotationsTable;