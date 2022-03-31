import { Button } from "@mui/material";
import Ticket from "../Components/Ticket"

import { Box, ThemeProvider } from '@mui/material';
import { useEffect, useState } from "react";
import Ajory from "ajory";
import axios from "axios";
//import Ajory from "../Components/Ajory";

//import  './Home.css';



function Tickets() {

  const [ticket, setTicket] = useState([{}])


  useEffect(() => {
    console.log("axios")
    axios.get('https://localhost:44382/api/ticket/1')
      .then(function (response) {
        // handle success
        setTicket(response.data)
        console.log({ ticket: ticket })

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [])

  return (
    <Ajory colWidth={300} colGap={10}  >
      {
        ticket.map((item, index) => <Ticket key={item.id} owner={item.owner} dateCreated={item.dateCreated} imgpath={""} note={item.note} />)
      }
    </Ajory>
  );
}


export default Tickets;