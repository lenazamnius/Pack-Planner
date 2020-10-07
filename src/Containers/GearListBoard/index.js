import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GearListBoardHeader from './components/GearListBoardHeader/GearListBoardHeader';
import GearListBoardCard from './components/GearListBoardCard/GearListBoardCard';

const useStyles = makeStyles({
  cardsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

const GearListBoard = (props) => {
  const classes = useStyles();
  const { gearLists, history } = props;

  return (
    <Box className="GearListBoard">
      <GearListBoardHeader gearLists={gearLists} history={history} />
      <Box className={classes.cardsWrapper}>
        {gearLists &&
          gearLists.map((pack) => {
            return <GearListBoardCard packInfo={pack} key={pack.id} />;
          })}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    gearLists: state.gearLists.gearLists,
  };
};

export default connect(mapStateToProps)(GearListBoard);
