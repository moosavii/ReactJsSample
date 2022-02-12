import { Button } from "@mui/material";
import Ticket from "../Components/Ticket"
import SimpleDialogDemo from "../Components/SimpleDialog"

import { Box, ThemeProvider } from '@mui/material';
import { useEffect, useState } from "react";


function Home() {

    const [ticket, setTicket] = useState([{}])
    useEffect(() => {
        let fromApi = [
            { owner: "موسوی", dateCreated: "1400/01/01", imagePath: "/Asset/test.png", note: "واقعا عالیه ولی ب  مشنستب منشسمب نسشمنبت  سیبسیب سی بی سب سیب س یبس یب سی بس یب سی بس یب سی بس یب سی بس یب سیب س یب سیب س یب سی ب سیب شسب شسمبم شسمبمسبمسمبمس بممسنبمسمتبمسمشنبتمسشن مبن سشمنبم نشسمبنیشتر باید باشه دیدیددیدیددی" },
            { owner: "علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسشمنشتسبمنتسشمبنیتسمنیت کجا رفته" },
            { owner: "موسوی", dateCreated: "1400/01/01", imagePath: "/Asset/test.png", note: "واقعا عالیه ولی ب  مشنستب منشسمب نسشمنبت نمشسب شسمبم شسمبمسبمسمبمس بممسنبمسمتبمسمشنبتمسشن مبن سشمنبم نشسمبنیشتر باید باشه" },
            { owner: "علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسش کجا رفته" },
            { owner: "موسوی", dateCreated: "1400/01/01", imagePath: "/Asset/test.png", note: "واقعا عالیه ولی ب  مشنستب منشسمب نسشمنبت نمشسب شسمبم شسمبمسبمسمبمس بممسنبمسمتبمسمشنبتمسشن مبن سشمنبم نشسمبنیشتر باید باشه" },
            { owner: "علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسش کجا رفته" },
            { owner: "موسوی", dateCreated: "1400/01/01", imagePath: "/Asset/test.png", note: "واقعا عالیه ولی ب  مشنستب منشسمب نسشمنبت نمشسب شسمبم شسمبمسبمسمبمس بممسنبمسمتبمسمشنبتمسشن مبن سشمنبم نشسمبنیشتر باید باشه" },
            { owner: "علوی", dateCreated: "1399/01/01", imagePath: "", note: "این عکسش کجا رفته" },
        ]
        setTicket(fromApi)
        console.log(ticket)
    }, [])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: "wrap",
            
            

        }}>

            {
                ticket.map((item, index) => <Ticket key={index} owner={item.owner} dateCreated={item.dateCreated} imgpath={item.imagePath} note={item.note} />)
            }
          {/* <SimpleDialogDemo  open = {true} /> */}

        </Box>
    );
}


export default Home;