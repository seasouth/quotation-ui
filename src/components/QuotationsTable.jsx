import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { 
    Box,
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent,
    DialogTitle, 
    Grid,
    TextField
} from '@mui/material';

const initialState = { 
    quotation: null,
    authorFirst: null,
    authorMiddle: null,
    authorLast: null,
    context: null,
    notes: null,
    quoteSource: null,
    quoteYear: null,
    title: null,
    usedDate: null,
    ID: 0
}

const QuotationsTable = ({
    quotations,
    loading,
    setSelectedQuotation,
    selectedQuotation
}) => {
    const [open, setOpen] = useState(false);
    const [newQuote, setNewQuote] = useState(initialState);

    useEffect(() => {
        if (newQuote.ID !== 0) {
            saveQuote();
        }
    }, [newQuote.ID]);

    const handleRowSelection = (rowID) => {
        const matchedRows = quotations.filter((quote) => quote.ID === rowID[0]);
        if (matchedRows.length === 1 && setSelectedQuotation) {
            setSelectedQuotation(matchedRows[0]);
        }
    }

    const handleOnSubmit = () => {
        setNewQuote(prevState => ({
            ...prevState, 
            ID: quotations[quotations.length - 1].ID + 1
        }));
    }

    const saveQuote = async () => {
        axios
            .post('http://localhost:4001/quotations/create', newQuote)
            .then(response => {
                setNewQuote({ 
                    quotation: "",
                    authorFirst: "",
                    authorMiddle: "",
                    authorLast: "",
                    context: "",
                    notes: "",
                    quoteSource: "",
                    quoteYear: "",
                    title: "",
                    usedDate: "",
                    ID: 0
                });
                setOpen(false);
            })
            .catch(error => console.error(`There was an error retrieving the quote list: ${error}`))
    }

    const deleteQuotation = async () => {
        axios
            .put('http://localhost:4001/quotations/delete', selectedQuotation)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.error(`There was an error deleting the selected quotation: ${error}`))
    }

    if (loading) return <p>Quotation table is loading...</p>

    const columns = [
        {
            field: 'ID', 
            headerName: 'ID',
            width: 100
        },
        {
            field: 'authorName', headerName: 'Author Name',
            valueGetter: (i) => `${i.row.authorFirst || ''} ${i.row.authorMiddle || ''} ${i.row.authorLast || ''}`,
            width: 200
        },
        {
            field: 'quotation',  
            headerName: 'Quote', 
            width: 800
        }
    ]

    return (
        <div>
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
                    <div style={{display: 'flex', justifyContent: 'right', marginTop: '0.5rem'}}>
                        {
                        <Button
                            variant="outlined"
                            color="warning"
                            onClick={() => deleteQuotation()}
                            sx={{marginRight: '4px'}}
                        >
                            Delete Selected Quote
                        </Button>}
                        <Button
                            variant="outlined"
                            onClick={() => setOpen(true)}
                        >
                            Add new quote
                        </Button>
                        <Dialog open={open} onClose={() => setOpen(false)}>
                            <DialogTitle>Add New Quote</DialogTitle>
                            <DialogContent>
                                <Box sx={{ flexGrow: 1, paddingTop: 2 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="quote"
                                                label="Quotation"
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                required
                                                value={newQuote.quotation}
                                                onChange={(e) => setNewQuote(prevState => ({
                                                    ...prevState, 
                                                    quotation: e.target.value
                                                }))}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                id="authorFirst"
                                                label="Author First"
                                                variant="outlined"
                                                value={newQuote.authorFirst}
                                                onChange={(e) => setNewQuote(prevState => ({
                                                    ...prevState, 
                                                    authorFirst: e.target.value
                                                }))}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                id="authorMiddle"
                                                label="Author Middle"
                                                variant="outlined"
                                                value={newQuote.authorMiddle}
                                                onChange={(e) => setNewQuote(prevState => ({
                                                    ...prevState, 
                                                    authorMiddle: e.target.value
                                                }))}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                id="authorLast"
                                                label="Author Last"
                                                variant="outlined"
                                                value={newQuote.authorLast}
                                                onChange={(e) => setNewQuote(prevState => ({
                                                    ...prevState, 
                                                    authorLast: e.target.value
                                                }))}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                id="quotationSource"
                                                label="Source"
                                                variant="outlined"
                                                fullWidth
                                                value={newQuote.quoteSource}
                                                onChange={(e) => setNewQuote(prevState => ({
                                                    ...prevState, 
                                                    quoteSource: e.target.value
                                                }))}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                id="quotationYear"
                                                label="Year"
                                                variant="outlined"
                                                value={newQuote.quoteYear}
                                                onChange={(e) => setNewQuote(prevState => ({
                                                    ...prevState, 
                                                    quoteYear: e.target.value
                                                }))}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                id="usedDate"
                                                label="Used Date"
                                                variant="outlined"
                                                value={newQuote.usedDate}
                                                onChange={(e) => setNewQuote(prevState => ({
                                                    ...prevState, 
                                                    usedDate: e.target.value
                                                }))}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="context"
                                                label="Context"
                                                variant="outlined"
                                                fullWidth
                                                value={newQuote.context}
                                                onChange={(e) => setNewQuote(prevState => ({
                                                    ...prevState, 
                                                    context: e.target.value
                                                }))}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="notes"
                                                label="Notes"
                                                variant="outlined"
                                                multiline
                                                fullWidth
                                                value={newQuote.notes}
                                                onChange={(e) => setNewQuote(prevState => ({
                                                    ...prevState, 
                                                    notes: e.target.value
                                                }))}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="title"
                                                label="Title"
                                                variant="outlined"
                                                fullWidth
                                                value={newQuote.title}
                                                onChange={(e) => setNewQuote(prevState => ({
                                                    ...prevState, 
                                                    title: e.target.value
                                                }))}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </DialogContent>
                            <DialogActions>
                                <div style={{paddingRight: 16}}>
                                    <Button 
                                        variant="outlined"
                                        onClick={handleOnSubmit}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuotationsTable;