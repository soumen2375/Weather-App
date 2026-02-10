import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Used for layout
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60";
    const RAIN_URL = "https://images.unsplash.com/photo-1493134880781-a491be4b894b?w=600&auto=format&fit=crop&q=60";

    // Logic to pick image and icon
    let imageUrl = info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL;
    let WeatherIcon = info.humidity > 80 ? ThunderstormIcon : info.temp > 15 ? WbSunnyIcon : AcUnitIcon;

    return (
        <Card sx={{ maxWidth: 345, margin: "0 auto", borderRadius: "15px", boxShadow: 3 }}>
            <CardMedia
                sx={{ height: 160 }}
                image={imageUrl}
                title="weather background"
            />
            <CardContent>
                {/* Header: City & Icon */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <Typography gutterBottom variant="h4" component="div" style={{ fontWeight: 'bold' }}>
                        {info.city}
                    </Typography>
                    <WeatherIcon color="action" fontSize="large" />
                </div>

                {/* Main Temperature */}
                <Typography variant="h2" color="text.primary" style={{ fontWeight: '500', marginBottom: '5px' }}>
                    {Math.round(info.temp)}&deg;C
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" style={{ textTransform: 'capitalize', marginBottom: '20px' }}>
                    {info.weather}
                </Typography>

                {/* Details Grid */}
                <Grid container spacing={2} style={{ textAlign: 'left', background: '#f5f5f5', padding: '10px', borderRadius: '10px' }}>
                    <Grid xs={6}>
                        <Typography variant="body2" color="text.secondary">Humidity</Typography>
                        <Typography variant="body1" fontWeight="bold">{info.humidity}%</Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography variant="body2" color="text.secondary">Feels Like</Typography>
                        <Typography variant="body1" fontWeight="bold">{info.feelsLike}&deg;</Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography variant="body2" color="text.secondary">Min Temp</Typography>
                        <Typography variant="body1" fontWeight="bold">{info.tempmin}&deg;</Typography>
                    </Grid>
                    <Grid xs={6}>
                        <Typography variant="body2" color="text.secondary">Max Temp</Typography>
                        <Typography variant="body1" fontWeight="bold">{info.tempmax}&deg;</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}