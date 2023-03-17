import React, { useState } from "react";
const Calculator=()=>{
const [amount,setamount]=useState('');
const [time,settime]=useState('');
const [rate,setrate]=useState('');
const [result,setresult]=useState('');
const [total,settotal]=useState('');

const onFormSubmit=(event)=>{
    event.preventDefault();
    let res=(amount*time*rate)/100;
    let amounts=Number(res)+Number(amount);
    setresult(res);
    settotal(amounts);
}

const resetform=()=>{
    setamount('')
    settime('')
    setrate('');
    setresult(' ')
    settotal(' ')
}

    return(
        <div className="calculator"> 
        <center>
            <h1 className="calchead">Simple Interest Calculator</h1>
            <form onSubmit={onFormSubmit}  className="form">
                <div className="div">
                    <label>
                    AMOUNT
                    </label>
                    <br></br>
                    <input type="number" value={amount} onChange={(event)=>setamount(event.target.value)} required></input>
            
                </div>
                <div className="div">
                    <label>
                    MONTH
                    </label>
                    <br></br>
                    <input type="number" value={time} onChange={(event)=>settime(event.target.value)} required></input>
            
                </div>
                <div className="div">
                    <label>
                    RATE
                    </label>
                    <br></br>
                    <input type="number" value={rate} onChange={(event)=>setrate(event.target.value)} required></input>
                </div>
                <div className="div">
                   <button type="submit">SUBMIT</button>
                   <button onClick={resetform}>RESET</button>
                </div>
                <div className="final">
                   <p >Interest is {result}</p>
                   <p >Total Amount is {total}</p>
                </div>
            </form>
        </center>
        </div>
    )
}
export default Calculator;