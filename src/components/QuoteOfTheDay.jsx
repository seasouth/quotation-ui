import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';

const QuoteOfTheDay = ({quotations}) => {
    const [randomQuote, setRandomQuote] = useState({});

    useEffect(() => {
        console.log(quotations);
        if (quotations?.length > 0) {
            let randomNum = Math.floor(Math.random() * quotations.length);
            console.log(randomNum);
            console.log(quotations[0]);
            setRandomQuote(quotations[randomNum]);
        }
    }, [quotations]);

    useEffect(() => {
        console.log(randomQuote);
    }, [randomQuote]);

    return (
        <Card
            variant="outlined"
        >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Random Quote of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    {randomQuote.quotation}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {`${randomQuote.authorFirst} ${randomQuote.authorLast}`}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default QuoteOfTheDay;