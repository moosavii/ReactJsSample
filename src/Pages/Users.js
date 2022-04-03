import { Button } from "@mui/material";
import Ticket from "../Components/Ticket"
import { DataGrid } from '@mui/x-data-grid';
import { Box, ThemeProvider } from '@mui/material';
import { useEffect, useState } from "react";
//import Ajory from "ajory";
//import Ajory from "../Components/Ajory";

//import  './Home.css';



function Users() {

  const [user, setUser] = useState([{}])


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
    setUser(fromApi)

  }, [])



  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  

  return (
      <DataGrid
      rows={rows}
      columns={columns}
      pageSize={15}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      >
      </DataGrid>
  );
}


export default Users;