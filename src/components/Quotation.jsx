import React, { useEffect, useState } from 'react'
import axios from 'axios'
import QuotationsTable from './QuotationsTable'

import '../styles/Quotation.css'

// Create Quotation component
const Quotation = () => {
  const [quotations, setQuotations] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch all quotations on initial render
  useEffect(() => {
    fetchQuotations();
  }, [])

  // Fetch all quotations
  const fetchQuotations = async () => {
    // Send GET request to 'quotations/all' endpoint
    axios
      .get('http://localhost:4001/quotations/all')
      .then(response => {
        // Update the quotations state
        console.log(response);
        setQuotations(response.data);

        // Update loading state
        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the book list: ${error}`))
  }

  return (
    <div className="quotation-table">
        
        <QuotationsTable quotations={quotations} loading={loading} />
    </div>
  )
}

export default Quotation;