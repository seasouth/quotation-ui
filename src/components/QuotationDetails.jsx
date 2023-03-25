import React, { useEffect } from 'react';
import { Box, Paper, Grid, Typography, styled } from '@mui/material';

const QuotationDetails = ({
    selectedQuotation
}) => {

    useEffect(() => {
        console.log(selectedQuotation)
    }, [selectedQuotation]);

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
                        <Item>{selectedQuotation.quotation}</Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant="h6" gutterBottom>
                            Title
                        </Typography>
                        <Item>{selectedQuotation.title}</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" gutterBottom>
                            Author First
                        </Typography>
                        <Item>{selectedQuotation.authorFirst}</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" gutterBottom>
                            Author Middle
                        </Typography>
                        <Item>{selectedQuotation.authorMiddle}</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" gutterBottom>
                            Author Last
                        </Typography>
                        <Item>{selectedQuotation.authorLast}</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" gutterBottom>
                            Quotation Source
                        </Typography>
                        <Item>{selectedQuotation.quotationSource}</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" gutterBottom>
                            Quotation Year
                        </Typography>
                        <Item>{selectedQuotation.quotationYear}</Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Context
                        </Typography>
                        <Item>{selectedQuotation.context}</Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Notes
                        </Typography>
                        <Item>{selectedQuotation.notes}</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" gutterBottom>
                            Used Date
                        </Typography>
                        <Item>{selectedQuotation.usedDate}</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" gutterBottom>
                            ID
                        </Typography>
                        <Item>{selectedQuotation.ID}</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default QuotationDetails;