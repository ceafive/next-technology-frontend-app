import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Result } from "../features/app/appSlice";
import { Box } from "@mui/material";

const DisplayCard = ({ result, index }: { result: Result; index: number }) => {
  console.log(result);
  return (
    <Card data-testid={`card-display-${index}`}>
      <Box
        sx={{
          minHeight: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ mb: 1.5 }} component="div">
            {result?.trackCensoredName}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {result?.artistName}
          </Typography>
          <Typography variant="body2">
            {result?.primaryGenreName} - {result?.country}
          </Typography>
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
      </Box>
    </Card>
  );
};

export default DisplayCard;
