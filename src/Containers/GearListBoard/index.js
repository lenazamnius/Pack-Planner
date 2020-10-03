import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase/config';
import image from '../../data/images/mountain.jpg';
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px 20px',
  },
  cardsWrapper: {
    display: 'flex',
  },
});

const GearListBoard = () => {
  const classes = useStyles();
  const [packList, setPackList] = useState([
    { name: 'Gorgany little hike', date: '12 july 2020', id: '1glb' },
    { name: 'Chernogora autumn', date: '2 october 2020', id: '2glb' },
  ]);

  if (!firebase.getUserCurrentName()) {
    console.log('log in, please');
    // props.history.replace('/login');
    return null;
  }

  return (
    <Box className="GearListBoard">
      <Typography variant="h3" gutterBottom>
        {/* Hello . You have {packList.length} gearlists. */}
        Hello {firebase.getUserCurrentName()}. You have {packList.length} Gear
        Lists.
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
                  // to=`/gear-list/{id}`
                  to="/gear-list/25t62"
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
};

export default GearListBoard;
