
import { ListItem, ListItemIcon, ListItemText , styled } from "@mui/material"


const  Detail =  styled(ListItem)`
margin-top: 10px;
padding:20px;
background: #F6F6F6; 
`

const Transaction = ({transaction , setTransactions , transactions}) => {
  
  const color =  transaction.amount > 0 ? 'Green':'Red';

  return(
<Detail style={{ background: `${color}`,color:'#fff'}}>


   <ListItemText>{transaction.text}</ListItemText>
   <ListItemText>{transaction.amount}</ListItemText>
</Detail>

    )
}
export default Transaction;