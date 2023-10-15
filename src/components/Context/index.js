import React, { createContext, useEffect, useState } from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
export const PrintPdfContext = createContext(); 

const PrintContext = ({ children }) => {

    const [currentDate, setCurrentDate] = useState(new Date());

    const [value, setValue] = useState({
        'currentDate': '',
        'Address': '',
        'NetWeight': '',
        'DriverDetail': '',
        'GrossWeight': '0',
        'Supplier': '',
        'Mineral': '',
        'Buyer': '',
        'VehicleDetail': '',
        'TareWeight': '0',
    });

    useEffect(() => {
        setValue({
            ...value,
            ['currentDate']: currentDate.toLocaleDateString(),
        })
    }, [])

    const ResetFields = () => {
        setValue({
            ...value,
            'Address': '',
            'NetWeight': '',
            'DriverDetail': '',
            'GrossWeight': '',
            'Supplier': '',
            'Mineral': '',
            'Buyer': '',
            // 'currentDate': '',
            'VehicleDetail': '',
            'TareWeight': '',
        });
        // setCurrentDate(new Date());
    }

    const componentRef = useRef();

    const printForm = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Data',
        onAfterPrint: () => { ResetFields(); }
    })

    return (
        <PrintPdfContext.Provider value={{
            value, setValue, componentRef, printForm, currentDate, setCurrentDate,
        }}>
            {children}
        </PrintPdfContext.Provider>
    )
}

export default PrintContext;