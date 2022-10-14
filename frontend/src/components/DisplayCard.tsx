import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Result } from "../features/app/appSlice";

const DisplayCard = ({ result, index }: { result: Result; index: number }) => {
  return (
    <Card data-testid={`card-display-${index}`}>
      <>
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
              window.open(result.previewUrl);
            }}
          >
            Download Preview
          </Button>
        </CardActions>
      </>
    </Card>
  );
};

export default DisplayCard;
