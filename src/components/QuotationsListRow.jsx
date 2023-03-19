import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

// Create QuotationsListRow component
export const QuotationsListRow = (props) => (
    <TableRow>
        <TableCell
            key={props.quote.ID + '1'}
        >
            {props.quote.ID}
        </TableCell>
        <TableCell
            key={props.quote.ID + '2'}
        >
            {props.quote.authorMiddle ? 
                `${props.quote.authorFirst} ${props.quote.authorMiddle} ${props.quote.authorLast}`
                :
                `${props.quote.authorFirst} ${props.quote.authorLast}`
            }
        </TableCell>
        <TableCell
            key={props.quote.ID + '3'}
        >
            {props.quote.quotation}
        </TableCell>
        <TableCell
            key={props.quote.ID + '4'}
        >
            {props.quote.quoteSource}
        </TableCell>
        <TableCell
            key={props.quote.ID + '5'}
        >
            {props.quote.usedDate}
        </TableCell>
    </TableRow>
)