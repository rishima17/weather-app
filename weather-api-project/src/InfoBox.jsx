import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
export default function InfoBox({ info }) {
  let INIT_URL =
    "https://images.unsplash.com/photo-1524555259-3e4f9092f97b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1525490829609-d166ddb58678?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL ="https://images.unsplash.com/photo-1579847641267-5445b760b991?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1671229652411-4468b946b787?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="infoBox">
      <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon
                  style={{ marginLeft: "5px", verticalAlign: "middle" }}
                />
              ) : info.temp > 15 ? (
                <SunnyIcon
                  style={{ marginLeft: "5px", verticalAlign: "middle" }}
                />
              ) : (
                <AcUnitIcon
                  style={{ marginLeft: "5px", verticalAlign: "middle" }}
                />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature={info.temp}&deg; C</p>
              <p>Humidity={info.humidity}</p>
              <p>Max-Temp= {info.MaxTemp}&deg;C</p>
              <p>Min-Temp={info.MinTemp}&deg;C</p>
              <h4>
                The weather can be described as {info.weather} and feels like :{" "}
                {info.feelsLike}&deg;C
              </h4>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
