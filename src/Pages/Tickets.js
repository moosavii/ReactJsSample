import { Button, Dialog } from "@mui/material";
import Ticket from "../Components/Ticket"

import { Box, ThemeProvider } from '@mui/material';
import { useEffect, useState, useContext } from "react";
import Ajory from "ajory";
import axios from "axios";
import ContextA from "../Util/Context";
import { getHeader, getUrl } from "../Util/Constants";
import { useNavigate, useParams } from "react-router-dom";
//import Ajory from "../Components/Ajory";

//import  './Home.css';



function Tickets(props) {

  const [ticket, setTicket] = useState([])
  const driver = useContext(ContextA);
  
  const [showDialog, setShowDialog] = useState(0);
  const navigate = useNavigate();
  const {id} = useParams();

  
  const callApi = () =>
  {
    axios.get(getUrl() + '/ticket/1', getHeader(driver.accessToken))
    .then(function (response) {
      // handle success
      setTicket(response.data)
      console.log({ ticket: ticket })

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  const closeDialog = () => {
    setShowDialog(0);
    navigate("/tickets")
    callApi();
  }

  useEffect(() => {
    console.log("axios:")
    console.log(getHeader(driver.accessToken))
    callApi();
    

  }, [])

  return (
    <>
      <Ajory colWidth={300} colGap={10}  >
        {
          ticket.map((item, index) => <Ticket key={item.id} data ={item} />)
        }
      </Ajory>
      <Dialog onClose={closeDialog} open={id=="new"}>
        <Ticket closeDialog={closeDialog} action="new" />
      </Dialog>
    </>
  );
}


export default Tickets;