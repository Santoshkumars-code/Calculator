import {  Grid,Box,Button, TextField, Paper } from "@mui/material";
import styledEngine from "@mui/styled-engine";
import React,{useState} from "react";
import Header from "./Header";


const Calculator = () => {
    const [result, setResult] = useState("");

    const clickHandler = (e)=>{
          setResult(result.concat(e.target.value) )
          }
    const clear=()=>{
        setResult("");
    } 
    const calculate = () =>{      
        setResult(eval(result));
    }
   
    const del=()=>{
        setResult(result.slice(0, -1));
    }
  return (
      <React.Fragment>
           <Box  sx={{backgroundColor:"rgb(214,214,214)" ,w:100, height:"100vh"}}>  
             <Header/>
                 <Paper sx={{width:"350px" ,height:"auto" , background: "transparent", m:"80px auto"}}>                       
                     <Grid item xs={12} lg={12}>
                         <TextField sx={{width:"100% "}}
                         variant="outlined"
                         label="0"
                         type="text"                     
                         value={result}
                          >
                         </TextField>
                     <Grid container spacing={0}>

                    <Grid item xs={3}><Btn variant="contained" color="inherit" name="7" value="7" onClick={clickHandler}>7</Btn></Grid>
                    <Grid item xs={3}><Btn variant="contained" color="inherit"  name="8" value="8" onClick={clickHandler}>8</Btn></Grid>
                    <Grid item xs={3}><Btn variant="contained" color="inherit" value="9" onClick={clickHandler}>9</Btn></Grid>
                    <Grid item xs={3}><Btn1 variant="contained" color="secondary" value="*" onClick={clickHandler}>*</Btn1></Grid>

                    <Grid item xs={3}><Btn variant="contained" color="inherit" value="4" onClick={clickHandler}>4</Btn></Grid>
                    <Grid item xs={3}><Btn variant="contained" color="inherit" value="5" onClick={clickHandler}>5</Btn></Grid>
                    <Grid item xs={3}><Btn variant="contained" color="inherit" value="6" onClick={clickHandler}>6</Btn></Grid>
                    <Grid item xs={3}><Btn1 variant="contained" color="secondary" value="-" onClick={clickHandler}>-</Btn1></Grid>

                    <Grid item xs={3}><Btn variant="contained" color="inherit" value="1" onClick={clickHandler}>1</Btn></Grid>
                    <Grid item xs={3}><Btn variant="contained" color="inherit" value="2" onClick={clickHandler}>2</Btn></Grid>
                    <Grid item xs={3}><Btn variant="contained" color="inherit" value="3" onClick={clickHandler}>3</Btn></Grid>
                    <Grid item xs={3}><Btn1 variant="contained" color="secondary" value="+" onClick={clickHandler}>+</Btn1></Grid>

                    <Grid item xs={3}><Btn variant="contained" color="inherit" value="0" onClick={clickHandler}>0</Btn></Grid>
                    <Grid item xs={3}><Btn variant="contained" color="inherit" value="00" onClick={clickHandler}>00</Btn></Grid>
                    <Grid item xs={3}><Btn variant="contained" color="inherit" value="." onClick={clickHandler}>.</Btn></Grid>
                    <Grid item xs={3}><Btn1 variant="contained" color="secondary" value="/" onClick={clickHandler}>/</Btn1></Grid>

                    <Grid item xs={3}><Btn1 variant="contained" color="error" value="AC" onClick={clear}>AC</Btn1></Grid>
                    <Grid item xs={3}><Btn1 variant="contained" color="secondary" value="%" onClick={clickHandler}>%</Btn1></Grid>
                    <Grid item xs={3}><Btn1 variant="contained" color="warning" value="del" onClick={del}>del</Btn1></Grid>
                    <Grid item xs={3}><Btn1 variant="contained" color="success" value="=" onClick={calculate}>=</Btn1></Grid>

                     </Grid>
                     </Grid>
                     <Grid item xs={12} lg={4}></Grid>
                     </Paper> 
             </Box>
      </React.Fragment>
  )
};

export default Calculator;
const Btn = styledEngine(Button)`
        margin: 15px 0 5px 15px;
        width: 10px;
        height: 50px;
        border: none;
        outline: none;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 25px;
        background: rgb(214,214,214);
        box-shadow:5px 5px 10px #b6a9a9,-5px -5px 10px #faf4f4;
        display: inline-block;       
 `
 const Btn1 = styledEngine(Button)`
        margin: 15px 0 5px 15px;
        width: 10px;
        height: 50px;
        border: none;
        outline: none;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 25px;
        background: black;
        color:white;
        box-shadow:5px 5px 10px #b6a9a9,-5px -5px 10px #faf4f4;
        display: inline-block;       
 `