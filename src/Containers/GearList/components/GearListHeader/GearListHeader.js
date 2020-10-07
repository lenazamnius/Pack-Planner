import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import EditIconButton from '../../../../components/EditIconButton';
import './GearListHeader.css';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: '15px',
    borderRadius: '5px',
    color: 'white',
    background: ' forestgreen',
  },
  typography: {
    textAlign: 'right',
  },
  margin: {
    margin: 'auto 20px auto 0',
  },
}));

const GearListHeader = ({ headerInfo }) => {
  const classes = useStyles();
  const { id, title, date, type, season, landscape, description } = headerInfo;

  return (
    <div className={classes.root} key={id}>
      <Grid container spacing={0}>
        <Grid container direction="row" alignItems="center" item xs={12}>
          <Typography className={classes.header} variant="h4">
            {title}
          </Typography>
          <EditIconButton size="default" />
        </Grid>
        <Grid container direction="row" alignItems="center" item xs={12} sm={6}>
          <Typography variant="subtitle1">{date}</Typography>
          <EditIconButton size="small" />
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.typography}
          item
          xs={12}
          sm={6}
        >
          <Typography variant="button">
            {type} - {landscape} - {season}
          </Typography>
          <EditIconButton size="small" />
        </Grid>
        <Grid container direction="row" alignItems="center" item xs={12}>
          <Typography variant="body2" gutterBottom>
            {description}
          </Typography>
          <EditIconButton size="small" />
        </Grid>
      </Grid>
    </div>
  );
};

export default GearListHeader;
