import React, { useState, useEffect } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const RandomQuote = ({quotations}) => {
    const [randomQuote, setRandomQuote] = useState({});
    const [quoteAuthor, setQuoteAuthor] = useState("");

    useEffect(() => {
        if (quotations?.length > 0) {
            let randomNum = Math.floor(Math.random() * quotations.length);
            setRandomQuote(quotations[randomNum]);
        }
    }, [quotations]);

    useEffect(() => {
        if (randomQuote?.authorFirst && randomQuote?.authorMiddle && randomQuote?.authorLast) {
            setQuoteAuthor(`${randomQuote.authorFirst} ${randomQuote.authorMiddle} ${randomQuote.authorLast}`);
        } else if (randomQuote?.authorFirst && randomQuote?.authorLast) {
            setQuoteAuthor(`${randomQuote.authorFirst} ${randomQuote.authorLast}`);
        } else {
            setQuoteAuthor(`${randomQuote.authorLast}`);
        }
    }, [randomQuote]);

    const getNewQuote = () => {
        let randomNum = Math.floor(Math.random() * quotations.length);
        setRandomQuote(quotations[randomNum]);
    }

    return (
        <Card
            variant="outlined"
        >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Random Quote
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                    {`"${randomQuote.quotation}"`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {quoteAuthor}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={getNewQuote}
                >
                    Get new quote
                </Button>
            </CardActions>
        </Card>
    )
}

export default RandomQuote;