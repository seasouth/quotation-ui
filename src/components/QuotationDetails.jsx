import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Paper, Grid, TextField, Typography, styled, Button } from '@mui/material';

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

const QuotationDetails = ({
    selectedQuotation
}) => {
    const [editedQuote, setEditedQuote] = useState(initialState);

    useEffect(() => {
        setEditedQuote(selectedQuotation);
    }, [selectedQuotation]);

    const handleSaveChanges = async () => {
        if (editedQuote) {
            console.log(editedQuote);
            saveChanges();
        }
    }

    const saveChanges = async () => {
        axios
            .put('http://localhost:4001/quotations/update', editedQuote)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.error(`There was an error updating the quote: ${error}`))
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));

    return (
        <div style={{padding: '1.5rem'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Full Quote
                        </Typography>
                        <TextField
                            id="quote"
                            fullWidth
                            variant="outlined"
                            multiline
                            value={editedQuote.quotation}
                            onChange={(e) => setEditedQuote(prevState => ({
                                ...prevState, 
                                quotation: e.target.value
                            }))}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant="h6" gutterBottom>
                            Title
                        </Typography>
                        <TextField
                            id="title"
                            variant="outlined"
                            fullWidth
                            value={editedQuote.title || ""}
                            onChange={(e) => setEditedQuote(prevState => ({
                                ...prevState, 
                                title: e.target.value
                            }))}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" gutterBottom>
                            Author First
                        </Typography>
                        <TextField
                            id="authorFirst"
                            variant="outlined"
                            fullWidth
                            value={editedQuote.authorFirst || ""}
                            onChange={(e) => setEditedQuote(prevState => ({
                                ...prevState, 
                                authorFirst: e.target.value
                            }))}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" gutterBottom>
                            Author Middle
                        </Typography>
                        <TextField
                            id="authorMiddle"
                            variant="outlined"
                            fullWidth
                            value={editedQuote.authorMiddle || ""}
                            onChange={(e) => setEditedQuote(prevState => ({
                                ...prevState, 
                                authorMiddle: e.target.value
                            }))}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" gutterBottom>
                            Author Last
                        </Typography>
                        <TextField
                            id="authorLast"
                            variant="outlined"
                            fullWidth
                            value={editedQuote.authorLast || ""}
                            onChange={(e) => setEditedQuote(prevState => ({
                                ...prevState, 
                                authorLast: e.target.value
                            }))}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" gutterBottom>
                            Quotation Source
                        </Typography>
                        <TextField
                            id="quotationSource"
                            variant="outlined"
                            fullWidth
                            value={editedQuote.quoteSource || ""}
                            onChange={(e) => setEditedQuote(prevState => ({
                                ...prevState, 
                                quoteSource: e.target.value
                            }))}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" gutterBottom>
                            Quotation Year
                        </Typography>
                        <TextField
                            id="quotationYear"
                            variant="outlined"
                            value={editedQuote.quoteYear || ""}
                            fullWidth
                            onChange={(e) => setEditedQuote(prevState => ({
                                ...prevState, 
                                quoteYear: e.target.value
                            }))}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Context
                        </Typography>
                        <TextField
                            id="context"
                            variant="outlined"
                            fullWidth
                            value={editedQuote.context || ""}
                            onChange={(e) => setEditedQuote(prevState => ({
                                ...prevState, 
                                context: e.target.value
                            }))}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Notes
                        </Typography>
                        <TextField
                            id="notes"
                            variant="outlined"
                            multiline
                            fullWidth
                            value={editedQuote.notes || ""}
                            onChange={(e) => setEditedQuote(prevState => ({
                                ...prevState, 
                                notes: e.target.value
                            }))}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" gutterBottom>
                            Used Date
                        </Typography>
                        <TextField
                            id="usedDate"
                            variant="outlined"
                            fullWidth
                            value={editedQuote.usedDate || ""}
                            onChange={(e) => setEditedQuote(prevState => ({
                                ...prevState, 
                                usedDate: e.target.value
                            }))}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" gutterBottom>
                            ID
                        </Typography>
                        <Item>{editedQuote.ID}</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            sx={{ marginTop: 5, textAlign: 'right'}}
                            onClick={handleSaveChanges}
                        >
                            Save changes
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default QuotationDetails;