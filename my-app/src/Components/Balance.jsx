
import { Box, Typography ,styled } from "@mui/material";
const BalanceText = styled(Typography)`
font-size:25px;
margin-bottom:20px;
text-align:center;
`
//  2 components banane ne jihde ch ta ik  income te duj expense houga 

const Balance  =({transactions}) =>{
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount,item) => (amount += item) , 0).toFixed(2);
    return(
        <Box>
        <BalanceText>Balance:₹{total} </BalanceText>
     
        </Box>
    )
}
export default Balance;