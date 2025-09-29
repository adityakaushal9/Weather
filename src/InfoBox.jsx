import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './infoBox.css'

export default function InfoBox({ info }) {
    // const photo="https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const photo="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

    return(
<div className="infobox"> 
    <h1>WeatherInfo - {info.weather}</h1>
    <div className='cardContainer'><Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           City: {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          
        Humidity: {info.humidity}
          

          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           
      Temp: {info.temp}
           


          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
           TempMax: {info.tempMax}
          


          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           
           TempMin: {info.tempMin}
           


          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          
           Weather: {info.weather} 


          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
</div>
    );
}