import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const QuotationsTable = ({
    quotations,
    loading,
    setSelectedQuotation
}) => {
    const handleRowSelection = (rowID) => {
        console.log(rowID);
        const matchedRows = quotations.filter((quote) => quote.ID === rowID[0]);
        console.log(matchedRows);
        if (matchedRows.length == 1 && setSelectedQuotation) {
            setSelectedQuotation(matchedRows[0]);
        }
    }

    if (loading) return <p>Quotation table is loading...</p>

    const columns = [
        {
            field: 'authorName', headerName: 'Author Name',
            valueGetter: (i) => `${i.row.authorFirst || ''} ${i.row.authorLast || ''}`,
            width: 200
        },
        {
            field: 'quotation',  
            headerName: 'Quote', 
            width: 800
        }
    ]

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{height: 500, width: 'auto', margin: '1.5rem' }}>
                <DataGrid
                    rows={quotations}
                    columns={columns}
                    getRowId={(row) => row.ID}
                    autoPageSize
                    onRowSelectionModelChange={(selectedRow) => {
                        handleRowSelection(selectedRow)
                    }}
                />
            </div>
        </div>
    )
}

export default QuotationsTable;