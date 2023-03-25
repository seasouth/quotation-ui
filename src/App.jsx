import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RandomQuote from './components/RandomQuote';
import QuotationsTable from './components/QuotationsTable'
import QuotationDetails from './components/QuotationDetails';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    const [quotations, setQuotations] = useState([]);
    const [selectedQuotation, setSelectedQuotation] = useState({});
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
            .catch(error => console.error(`There was an error retrieving the quotations list: ${error}`))
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <RandomQuote quotations={quotations} />
            <QuotationsTable 
                quotations={quotations} 
                loading={loading}
                setSelectedQuotation={setSelectedQuotation}
            />
            <QuotationDetails 
                selectedQuotation={selectedQuotation}
            />
        </ThemeProvider>
    )
}

export default App;