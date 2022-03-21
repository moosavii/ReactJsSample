import { Button } from "@mui/material";
import Ticket from "../Components/Ticket"
import SimpleDialogDemo from "../Components/SimpleDialog"

import { Box, ThemeProvider } from '@mui/material';
import { useEffect, useState } from "react";
import Ajory from "ajory";
//import Ajory from "../Components/Ajory";

//import  './Home.css';



function Home() {

  const [ticket, setTicket] = useState([{}])


  useEffect(() => {
    let fromApi = [
      { owner: "1موسوی", dateCreated: "1400/01/01", imagePath: "/Asset/test.png", note: "واقعا عالیه ولی ب  مشنستب منشسمب نسشمنبت  سیبسیب سی بی سب سیب س یبس یب سی بس یب سی بس یب سی بس یب سی بس یب سیب س یب سیب س یب سی ب سیب شسب شسمبم شسمبمسبمسمبمس بممسنبمسمتبمسمشنبتمسشن مبن سشمنبم نشسمبنیشتر باید باشه دیدیددیدیددی" },
      { owner: "2علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسشمنشتسبمنتسشمبنیتسمنیت کجا رفته" },
      { owner: "3موسوی", dateCreated: "1400/01/01", imagePath: "/Asset/test.png", note: "واقعا عالیه ولی ب  مشنستب منشسمب نسشمنبت نمشسب شسمبم شسمبمسبمسمبمس بممسنبمسمتبمسمشنبتمسشن مبن سشمنبم نشسمبنیشتر باید باشه" },
      { owner: "4علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسش کجا رفته" },
      { owner: "5موسوی", dateCreated: "1400/01/01", imagePath: "/Asset/test.png", note: "واقعا عالیه ولی ب  مشنستب منشسمب نسشمنبت نمشسب شسمبم شسمبمسبمسمبمس بممسنبمسمتبمسمشنبتمسشن مبن سشمنبم نشسمبنیشتر باید باشه" },
      { owner: "6علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسش کجا رفته" },
      { owner: "7موسوی", dateCreated: "1400/01/01", imagePath: "/Asset/test.png", note: "واقعا عالیه ولی ب  مشنستب منشسمب نسشمنبت نمشسب شسمبم شسمبمسبمسمبمس بممسنبمسمتبمسمشنبتمسشن مبن سشمنبم نشسمبنیشتر باید باشه" },
      { owner: "علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسش کجا رفته" },
      { owner: "علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسش کجا رفته" },
      { owner: "علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسش کجا رفته" },
      { owner: "علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسش کجا رفته" },
      { owner: "علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسش کجا رفته" },
      { owner: "علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسش کجا رفته" },
      { owner: "علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسش کجا رفته" },

    ]
    setTicket(fromApi)
    console.log(ticket)

  }, [])

  return (
    <Box sx={{
      // display: "flex",
      // flexDirection: "row",
      // flexWrap: "wrap",
      // justifyContent: "flex-start",
      //backgroundColor : "red"
      
    }}>
      <Ajory colWidth={300} colGap={10}  containerStyle = {{backgroundColor : "blue"}}>
        {
          ticket.map((item, index) => <Ticket key={index} owner={item.owner} dateCreated={item.dateCreated} imgpath={item.imagePath} note={item.note} />)
        }
      </Ajory>
    </Box>
  );
}


export default Home;