import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../../data/images/mountain.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Card, CardActions } from '@material-ui/core';
import { CardActionArea, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px 20px',
  },
});

const GearListCard = ({ packInfo }) => {
  const classes = useStyles();

  return (
    <Card key={packInfo.id} className={classes.root}>
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
            {packInfo.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {packInfo.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          component={Link}
          to={`/gear-list/${packInfo.id}`}
          variant="outlined"
          color="primary"
          size="large"
        >
          Watch Gear List
        </Button>
      </CardActions>
    </Card>
  );
};

export default GearListCard;
