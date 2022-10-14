import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Result } from "../features/app/appSlice";
import { CardMedia } from "@mui/material";

const DisplayCard = ({ result, index }: { result: Result; index: number }) => {
  return (
    <Card data-testid={`card-display-${index}`}>
      <>
        <CardMedia
          component="img"
          height="194"
          image={result?.artworkUrl100}
          alt={result?.trackCensoredName}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {result?.artistName}
          </Typography>
          <Typography variant="h5" component="div">
            {result?.trackCensoredName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {result?.trackCensoredName}
          </Typography>
          <Typography variant="body2">{result?.primaryGenreName}</Typography>
          <Typography variant="body2">{new Date(result?.releaseDate).toDateString()}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              window.open(result.trackViewUrl);
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </>
    </Card>
  );
};

export default DisplayCard;
