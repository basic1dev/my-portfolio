//import gif from  './icegif-502.gif';
//import gif2 from './josue-pimenta-retro-computer.gif';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function App() {
  return (
  <Container>

  <Grid container spacing={2}>

  <Grid item xs={12} sm={6}>

      <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
        </LocalizationProvider>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
    </Grid>

    <Grid item xs={12} sm={6}>

      <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <h1 id="Home">Hi, I am Clifton !</h1>
      <h2>Let's Develop a Website</h2>
      {/* <img className='giffy' src={gif2} alt="Gif"/> */}
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <p>I am starting my journey as an aspring web developer mastring the ins and outs of React. 
            Welcome to my digital playground, where creativity meets functionality! As a web developer, I wield a dynamic blend of coding prowess and design finesse to craft seamless and visually captivating online experiences. </p>
      </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>

    </Grid>


    <Grid item xs={12} sm={6} md={12}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      
      
      


      

      </CardContent>
    </Card>
   </Grid>


    <Grid item xs={12} sm={6} md={12}>
    <Card>
      <CardContent sx={{ minWidth: 275 }}>      
      <div className='cards'>
      <h1 id='Education'>EDUCATION</h1>
      <p>2020 Jan - 2024 Jan | Bsc in Audiology</p>
      <p>2021 Jan - Current | Bachelor of Information Technology</p>
      <p></p>
      </div> 
      </CardContent>

    </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={12}>
    <Card>
      <CardContent sx={{ minWidth: 275 }}>
      <div className='cards'>
      <h1 id='Experience'>PREVIOUS EXPERIENCE</h1>
      <p>Developing Neural networks in identifying brain tumors | Python</p>
      <p>Automation | Python</p>
      <p> <a href='https://www.theodinproject.com/' target='noopener'>The Odin Project</a> | HTML, CSS, JAVASCRIPT</p>
      <p></p>
      </div>
     </CardContent>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={12}>
      <Card>
      <CardContent sx={{ minWidth: 275}}>
      <div className='cards'>
      <h1></h1>
      <h1 id='Contact me'>Let's work together</h1>
      <a href='https://trollface.dk/' target="_blank">Hire me</a>
      </div> 
      <p id='copyright'>&copy; Clifton 2024.</p>
      </CardContent>
      </Card>
    </Grid>

  </Grid>

  </Container>

    // changing and inlcuding the grids seems not to change 
    //anything, probably because of the preexisting styled. nop it is because you made a mistake while importing.

    
  );
}

export default App;

