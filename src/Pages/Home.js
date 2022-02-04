import { Button } from "@mui/material";
import Ticket from "../Components/Ticket"
import { Box, ThemeProvider } from '@mui/material';


function Home() {
    return (
          <Box sx={{ display: 'flex', flexDirection: 'row' ,justifyContent : 'space-around' ,flexWrap:"wrap"}}>

            <Ticket />
            <Ticket />

        </Box>
    );
}


export default Home;