"use client";

const { createContext, useState, useContext } = require("react");

const ReservationContext = createContext();

const initalState = { from: null, to: null };

function ReservationProvider({children}) {
    const [range, setRange] = useState(initalState);
    
    const resetRange = () => {
        setRange(initalState);
    }
    return (
        <ReservationContext.Provider value={{range, setRange, resetRange}}>
            {children}
        </ReservationContext.Provider>
    )
}

function useReservation() {
    const context = useContext(ReservationContext);
    if (context === undefined) throw new Error("CONTEXT USED OUT OF PROVIDER")
    return context
}

export {useReservation, ReservationProvider};