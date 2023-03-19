import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Quotation from './components/Quotation';
import RandomQuote from './components/RandomQuote';
import QuotationsTable from './components/QuotationsTable'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    const [quotations, setQuotations] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchQuotations();
    }, []);

    const fetchQuotations = async () => {
        setLoading(true);
        axios
            .get('http://localhost:4001/quotations/all')
            .then(response => {
            console.log(response);
            setQuotations(response.data);

            setLoading(false)
            })
            .catch(error => console.error(`There was an error retrieving the book list: ${error}`))
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <RandomQuote quotations={quotations} />
            <div className="quotation-table">
                <QuotationsTable quotations={quotations} loading={loading} />
            </div>
        </ThemeProvider>
    )
}

export default App;