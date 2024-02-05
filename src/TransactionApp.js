// @ts-ignore
import React, {useEffect, useState} from "react";
import './TransactionApp.css';
function TransactionApp(){
    const [transactions, setTransactions] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handlerBuyClick = () => {
        setTransactions([...transactions, Math.random()]);
    };

    const handlerSellClick = () => {
        setTransactions([...transactions, -1 * Math.random()]);
    };

    const handlerClearClick = () => {
        setTransactions([]);
    };

    useEffect(()=>{
        const calculatorTotal = () => {
            const sum = transactions.reduce((accumulator, transaction)=>accumulator+transaction, 0);
            setTotalPrice(sum);
        }

        calculatorTotal();

    },[transactions])

    return (
        <div className="grid-container">
            <h1>Transaction Page</h1>
            <div className="button-container">
                <button onClick={handlerBuyClick} className="button buy-button">Buy</button>
                <button onClick={handlerSellClick} className="button sell-button">Sell</button>
                <button onClick={handlerClearClick} className="button clear-button">Clear</button>
            </div>
            <div className="grid-container transaction-list-container">
                <ul className="transaction-list">
                    {transactions.map((transaction, index) => (
                        <li key={index} className={transaction>=0 ? "positive" : "negative"}>{transaction.toFixed(2)}</li>
                    ))}
                </ul>
            </div>
            <div className="grid-container table-container">
                <table className="bordered-table">
                    <tr>
                        <td>Total</td>
                        <td>{totalPrice.toFixed(2)}</td>
                    </tr>
                </table>
            </div>
        </div>

    );

}

export default TransactionApp;