import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Card,
  Button,
  Typography,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import image from '../../data/images/mountain.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px 20px',
  },
  cardsWrapper: {
    display: 'flex',
  },
});

export default function GearListBoard() {
  const classes = useStyles();
  const [packList, setPackList] = useState([
    { name: 'Gorgany little hike', date: '12 july 2020', id: '1glb' },
    { name: 'Chernogora autumn', date: '2 october 2020', id: '2glb' },
  ]);

  return (
    <Box className="GearListBoard">
      <Typography variant="h3" gutterBottom>
        You have {packList.length} gear lists.
      </Typography>
      <Box className={classes.cardsWrapper}>
        {packList.map((pack) => {
          return (
            <Card key={pack.id} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="image of nature"
                  height="140"
                  className={classes.media}
                  image={image}
                  title="nature"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {pack.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {pack.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  component={Link}
                  to="/gear-list/LenaZamnius/25t62"
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  Watch Gear List
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
