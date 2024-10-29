

import { useState } from 'react';
import { Typography , styled, Box } from '@mui/material';


// compoenennts
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransactions from './Components/NewTransaction';
import Transactions from './Components/Transactions';


const Header = styled(Typography)`
margin:10px 0;
font-size: 36px;
font-color:white;
color:blue;
text-transform : Uppercase;
text-align:center;
padding:30px;
`
// const ton baad import nhi kr skde 
const Component = styled(Box)`
display:flex;
 background:#fff;
 width:900px;
 padding:20px
 border-radius:30px;
margin:auto;
 & > div {
 height:80vh;
 width:70%;
 padding:40px;
 background: #F6F6F6; 
 }
`
function App(){
 const [transactions, setTransactions] = useState([
  { id: 1, text:' Momos', amount:-20},
  { id: 2, text: 'Salary', amount:3000},
  { id: 3, text: 'Book', amount:-100},
  { id: 4, text: 'Bonus', amount:1500},
])
  return(
    <Box classname="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance  transactions={transactions}/>
          <ExpenseCard transactions={transactions}/>
          <NewTransactions setTransactions={setTransactions} />
           </Box>
          <Box>
            <Transactions transactions={transactions} setTransactions={setTransactions}/> 
            </Box>
    </Component>
    </Box>
  );
}
export default App ;
