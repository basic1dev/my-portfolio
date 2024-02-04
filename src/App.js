//import gif from  './icegif-502.gif';
//import gif2 from './josue-pimenta-retro-computer.gif';
import { Container } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';


import { useState } from 'react';

import Carousel from 'react-multi-carousel';
import '../node_modules/react-multi-carousel/lib/styles.css';

import { ProductCard } from './components/ProductCard';


// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { tableCellClasses } from '@mui/material/TableCell';
// import { styled } from '@mui/system';
// import { withStyles } from "@mui/system";
// to include the tables

//importing all the images
import theSelfishGene from "./BImages/theSelfishGene.jpg"; 
import atomicHabits from "./BImages/atomicHabits.jpg"; 
import peak from "./BImages/peak.jpg"; 
import the33StrategiesOfWar from "./BImages/the33StrategiesOfWar.jpg"; 
import the48LawsOfPower from "./BImages/the48LawsOfPower.jpg"; 
import theGodDelusion from "./BImages/theGodDelusion.jpeg"; 



// Now imports to include the styles that i need
//Here the tags

// import { makeStyles } from "@mui/material/styles";
// import yellow from "@mui/material/colors/yellow";




// function createData(நல்ல_நேரம், கே, இராகு, குளிகை, எமகண்டம் ) {
//   return { நல்ல_நேரம், கே, இராகு, குளிகை, எமகண்டம் };
// }

// const rows = [
//   createData('காலை', 9.45, 6.0, 2.4, 4.00),
//   createData('மாலை', 9.45, 6.0, 2.4, 4.00),
// ];

// Experimenting with variables. 


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

function App() { 
  // const [name, setName2] = useState(null);

  const [books, setbooks] = useState([{name:"The Selfish Gene", description : "Richard Dawkins", imageURL: theSelfishGene},    {name: "The God Delusion", description: "Richard Dawkins", imageURL: theGodDelusion},    
  {name:"The 48 Laws of power", description: "Robert Greene", imageURL: the48LawsOfPower},   
  {name:"The 33 strategies of War", description: "Robert Greene", imageURL: the33StrategiesOfWar},    
  {name: "Atomic Habits", description: "James Clear", imageURL: atomicHabits},    
  {name:"Peak", description: "Anders Ericcson", imageURL: peak} ]);


  // const [item, setitem] = useState([
  //   {name: "Gojo", image:"1", description: "Tokyo"}, 
  //   {name: "Yagami", image:"2", description: "Belarus"}, 
  //   {name: "Eren", image:"3", description: "Eldia"}
  // ])


//   const changeName = () => {
//   console.log(name);
//   setName2("Jerome Clifton");
//   console.log(name);
// };


// For the carousal
 const responsive = {
   superLargeDesktop: {
     // the naming can be any, depends on you.
     breakpoint: { max: 4000, min: 3000 },
     items: 5
   },
   desktop: {
     breakpoint: { max: 3000, min: 1024 },
     items: 3
   },
   tablet: {
     breakpoint: { max: 1024, min: 464 },
     items: 2
   },
   mobile: {
     breakpoint: { max: 464, min: 0 },
     items: 1
   }
 }
  
  return (

    <Container>
      {/* <div className='App'>
        {name ? <h1> My name is {name} </h1>: <h1> My name is......</h1>}
        <button onClick={changeName}> Name </button>

        <>
          {friends.map((friend, index) => (<h3 
          key={index} 
          style={{
            border: "1px solid red",
            margin: "20px",
            borderRadius: "10px",
            padding: "10px",
            width: "500px"
          }}> My name is {friend.name}, and I am from {friend.place}</h3>))}
        </>

      </div> */}

      <h1 style={{textAlign: 'center', padding:"10px"}}> Book Sale </h1>


      <div style={{padding: "10px", backgroundColor: "#dfecec"}}className='App'>

      <Carousel responsive={responsive}>
      {/* <ProductCard name={"Shoes"} description={"High quality"} /> */}
      {books.map((book, index) => (
          // <h3 key={index}> my name is {friend.name} </h3>
          <ProductCard name={book.name} description={book.description} imageURL={book.imageURL} />
        ))}
     </Carousel>
        
      </div>

      <h1 style={{textAlign: 'center', padding:"10px"}}> Book Sale </h1>


      <div style={{padding: "10px", backgroundColor: "#dfecec"}}className='App'>

      <Carousel responsive={responsive}>
      {/* <ProductCard name={"Shoes"} description={"High quality"} /> */}
      {books.map((book, index) => (
          // <h3 key={index}> my name is {friend.name} </h3>
          <ProductCard name={book.name} description={book.description} imageURL={book.imageURL} />
        ))}
     </Carousel>
        
      </div>

    </Container>
    
//   <Container>

//   <Grid container spacing={2}>

//   <Grid item xs={12} sm={12}>
    
//   {/* This is the working Area Grid */}
//   <Grid container style={{ background: '#70FFFD' }} xs={12} sm={12} md={12}>
//     {/* <Card sx={{ minWidth: 275 }}>
//       <CardContent> */}
        
//       {/* The first major nested grid */}
//       <Grid container spacing={2}>
      
//       <Grid item xs={3} sm={3} md={3} >
      
//       <Box component="img"
//        sx={{
//        height: 233,
//        width: 350,
//        maxHeight: { xs: 233, md: 197 },
//        maxWidth: { xs: 350, md: 280 },
//            }}
//        alt="Vishnu"
//        src="https://nepalyogahome.com/wp-content/uploads/2021/07/Lord-Vishnu-990x675.jpg"
//       /> 
      
//       </Grid>

//       <Grid item xs={6} sm={6} md={6}>
//       <Paper square><Typography textAlign={'center'} sx={{ fontSize: 50 }} color="text.primary" gutterBottom>20-01-2024</Typography></Paper>      
//       </Grid>

//       <Grid item xs={3} sm={3} md={3}>
//       <Box component="img"
//        sx={{
//        height: 233,
//        width: 350,
//        maxHeight: { xs: 233, md: 197 },
//        maxWidth: { xs: 350, md: 280 },
//            }}
//        alt="Vishnu"
//        src="https://nepalyogahome.com/wp-content/uploads/2021/07/Lord-Vishnu-990x675.jpg"
//       />
//       </Grid>
      


//       </Grid>

//     {/* The second major nested grid */}
//       <Grid item xs={12} sm={12} md={12}>
     
      
//       <Typography textAlign={'center'} sx={{ fontSize: 23, fontWeight: 'bold' }} color="text.primary" gutterBottom>அமைதி இல்லாத இடத்தில் இன்பம் இருக்க முடியாது.</Typography>
      


//       </Grid>
      
//        {/* The third major nested grid */}
//       <Grid container  xs={12} sm={12} md={12}>
     

//      {/* the paragraphed stuff */}
     
//       <Grid container style={{ background: '#f2f6fc' }} spacing xs={8} sm={8} md={8}>

      
//         {/* the second row */}
//         <Grid container spacing={1}>
//         <Grid item xs={4} sm={4}><Paper><Typography textAlign={'center'} sx={{ fontSize: 15, fontWeight: 'bold' }} color="text.primary" gutterBottom>சோபகிருது 7 தை </Typography></Paper></Grid>
//         <Grid item xs={4} sm={4}><Paper><Typography textAlign={'center'} sx={{ fontSize: 15, fontWeight: 'bold' }} color="text.primary" gutterBottom>January</Typography></Paper></Grid>
//         <Grid item xs={4} sm={4}><Paper><Typography textAlign={'center'} sx={{ fontSize: 15, fontWeight: 'bold' }} color="text.primary" gutterBottom>வளர்பிறை </Typography></Paper></Grid>
//         <Grid item><Paper>
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//         </Paper></Grid>
//         {/* the second row */}
//         <Grid item><Paper>
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//         </Paper></Grid>
//         </Grid>

//       </Grid>



//       <Grid item xs={4} sm={4} md={4}>
//       <Paper>
//       <Typography textAlign={'center'} sx={{ fontSize: 15, fontWeight: 'bold' }} color="text.primary" gutterBottom>இராசிபலன்</Typography> 
      
//       <ul>
// <li>மேஷம் - குழப்பம் </li>
// <li>ரிஷிபம் - அமைதி </li>
// <li>மிதுனம் - இரக்கம் </li>
// <li>கடகம் - உழைப்பு </li>
// <li>சிம்மம் - கோபம் </li>
// <li>கன்னி - பயம் </li>
// <li>துலாபம் - எதிர்ப்பு </li>
// <li>விருச்சி - வெற்றி </li>
// <li>தனுசு - லாபம் </li>
// <li>மகரம் - நன்மை </li>
// <li>கும்பம் - மகிழ்ச்சி </li>
// <li>மீனம் - பொறுமை</li>
// </ul>
//         </Paper>
//       </Grid>


//       </Grid>

//       {/* The Fourth major nested grid , where the tables reside*/}
//       <Grid container xs={12} sm={12} md={12}>
    
//       <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>நல்ல_நேரம்</TableCell>
//             <TableCell align="right">கே</TableCell>
//             <TableCell align="right">இராகு</TableCell>
//             <TableCell align="right">குளிகை</TableCell>
//             <TableCell align="right">எமகண்டம்</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.நல்ல_நேரம்}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.நல்ல_நேரம்}
//               </TableCell>
//               <TableCell align="right">{row.கே}</TableCell>
//               <TableCell align="right">{row.இராகு}</TableCell>
//               <TableCell align="right">{row.குளிகை}</TableCell>
//               <TableCell align="right">{row.எமகண்டம்}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//       </Grid>


//       {/* </CardContent>
//     </Card> */}

//    </Grid>

//       <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DateCalendar />
//         </LocalizationProvider>
//       </CardContent>

//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//       </Card>
//     </Grid>

//     <Grid item xs={12} sm={12}>


//     <button onClick={changeName}> Give full name</button>
      
//       <Card sx={12}>
//       <CardContent>

//     {/* testing the state */}

//       {name ? <h1>my name is {name} </h1>: <h1>Press button to know my name</h1>}

//       <>
//         {friends.map((friend, index) => (
//           <h3 key={index}> my name is {friend} </h3>
//         ))}
//       </>



//       <h1 id="Home">Hi, I am clifton !</h1>
       

//       <h2>Let's Develop a Website</h2>
//       {/* <img className='giffy' src={gif2} alt="Gif"/> */}
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           <p>I am starting my journey as an aspring web developer mastring the ins and outs of React. 
//             Welcome to my digital playground, where creativity meets functionality! As a web developer, I wield a dynamic blend of coding prowess and design finesse to craft seamless and visually captivating online experiences. </p>
//       </Typography>
//       </CardContent>

//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//       </Card>

//     </Grid>

//     {/* playing with the grid system */}
//     <Grid item>
    
//     <Card sx={12}>
//       <CardContent>
        
//       <h1 id="Home">Hi, I am Clifton !</h1>
//       <h2>Let's Develop a Website</h2>
//       {/* <img className='giffy' src={gif2} alt="Gif"/> */}
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           <p>I am starting my journey as an aspring web developer mastring the ins and outs of React. 
//             Welcome to my digital playground, where creativity meets functionality! As a web developer, I wield a dynamic blend of coding prowess and design finesse to craft seamless and visually captivating online experiences. </p>
//       </Typography>
//       </CardContent>

//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//       </Card>
      


//     </Grid>
    


//     <Grid item xs={12} sm={12} md={12}>
//     <Card>
//       <CardContent sx={12}>      
//       <div className='cards'>
//       <h1 id='Education'>EDUCATION</h1>
//       <p>2020 Jan - 2024 Jan | Bsc in Audiology</p>
//       <p>2021 Jan - Current | Bachelor of Information Technology</p>
//       <p></p>
//       </div> 
//       </CardContent>

//     </Card>
//     </Grid>

//     <Grid item xs={12} sm={12} md={12}>
//     <Card>
//       <CardContent sx={12}>
//       <div className='cards'>
//       <h1 id='Experience'>PREVIOUS EXPERIENCE</h1>
//       <p>Developing Neural networks in identifying brain tumors | Python</p>
//       <p>Automation | Python</p>
//       <p> <a href='https://www.theodinproject.com/' target='noopener'>The Odin Project</a> | HTML, CSS, JAVASCRIPT</p>
//       <p></p>
//       </div>
//      </CardContent>
//     </Card>
//     </Grid>

//     <Grid item xs={12} sm={12} md={12}>
//       <Card>
//       <CardContent sx={12}>
//       <div className='cards'>
//       <h1></h1>
//       <h1 id='Contact me'>Let's work together</h1>
//       <a href='https://trollface.dk/' target="_blank">Hire me</a>
//       </div> 
//       <p id='copyright'>&copy; Clifton 2024.</p>
//       </CardContent>
//       </Card>
//     </Grid>

//   </Grid>

//   </Container>

    // changing and inlcuding the grids seems not to change 
    //anything, probably because of the preexisting styled. nop it is because you made a mistake while importing.

    
  )
}

export default App;

