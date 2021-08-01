import './App.css';
import {useState,useEffect} from 'react'
import dolar from './image/icon-dollar.svg'
import person from './image/icon-person.svg'

function App() {
  const [price,setPrice]=useState();
  const [people,setPeople]=useState("");
  const [tip,setTip] = useState(0);
  const [tipAmount,setTipAmount] = useState("0.00");
  const [total,setTotal] = useState("0.00")
  const [color,setColor]=useState('white')

  const redColor={
    border:`1px solid ${color}`
  }

  useEffect(()=>{calculate()},[price,tip,people])

  const calculate=()=>{
    let totals=(1+(tip*.01))*price
    if(people>0 && tip){
      let personprice=totals/people;
      let tipamount=((tip*0.01)*price)/people;


      setTotal(personprice.toFixed(2));
      setTipAmount(tipamount.toFixed(2));
      
    }
    else{
      setTotal("0.00");
      setTipAmount("0.00");    
    }

  }
  
  const checkRed =()=>{
    if(people.length > 0)
    {
      setColor("white")
    }
    else{
      setColor("red")
    }

  }

  const clear=()=>{
    setPrice(0);
    setPeople(null);
    setTip();
    setTipAmount(0.00);
    setTotal(0.00);
  }
  const priceChange = (e)=>{
    setPrice(e.target.value);
    
  }
  const tipChange =(price)=>{
      setTip(price);
     
      
  }
  const peopleChange=(e)=>{
    setPeople(e.target.value)    
  }

  useEffect(()=>{checkRed()},[people])



  
  return (
    <div className="app">
    <h2>Spli<br/>tter</h2>
     <div className="container">
       <div className="left">
          <div className="bill-input">
            <h4>Bill</h4>
            <div className="input-form top-left">
              <img src={dolar} alt="dolar"/>
              <input type="text" placeholder="0" value={price} onChange={priceChange} />
            </div>
          </div>
          <div className="bill-input">
            <h4>Select Tip %</h4>
            <div className="input-option">
              <div className="form-check" onClick={()=>tipChange(5)}>
                <input className="radio"  type="radio"  value={5}  name="radioButton1"/>
                <label htmlFor="radioButton1">5%</label>
              </div>
              <div className="form-check" onClick={()=>tipChange(10)}>
                <input className="radio" value={10}  type="radio" name="radioButton2"/>
                <label htmlFor="radioButton2" >10%</label>
              </div>
              <div className="form-check" onClick={()=>tipChange(15)}>
                <input className="radio" value={15} type="radio" name="radioButton3"/>
                <label htmlFor="radioButton3" >15%</label>
              </div>
              <div className="form-check"onClick={()=>tipChange(25)}>
                <input className="radio" value={25} type="radio" name="radioButton4"/>
                <label htmlFor="radioButton4" >25%</label>
              </div>
              <div className="form-check" onClick={()=>tipChange(50)}>
                <input className="radio" value={50} type="radio" name="radioButton5"/>
                <label htmlFor="radioButton5" >50%</label>
              </div>
              <div className="form-check">
                <input type="text" className="custom" onChange={(e)=>tipChange(e.target.value)} name="custom" placeholder="Custom" />
              </div>
            </div>
          </div>
          <div className="bill-input down-ink">
          {color!="red"?<h4>Number of people</h4>:<div style={{width:'100%',display:'flex',justifyContent: 'space-between'}}><h4>Number of people</h4><h4 style={{color:'red'}}>Can't be zero </h4></div>}
            
            <div style={redColor} className="input-form">
              <img src={person} alt="dolar"/>
              <input type="text" placeholder="0" value={people} onChange={peopleChange} />
            </div>
            
          </div>
       </div>
       <div className="right">
          <div className="right-top">
              <div className="per-person">
                  <div className="tip-left">
                      <h5>Tip Amount</h5>
                      <p>/Person</p>
                  </div>
                  <div className="tip-right">
                      <h2>${total}</h2>
                  </div>
              </div>
              <div className="per-person">
              <div className="tip-left">
                      <h5>Total</h5>
                      <p>/Person</p>
                  </div>
                  <div className="tip-right">
                      <h2>${tipAmount}</h2>
                  </div>
              </div>
          </div>
          <div className="right-bottom">
              <button onClick={clear}>Reset</button>
          </div>
       </div>
     </div>
    </div>
  );
}

export default App;
