import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createGearList } from '../../store/actions/gearListActions';
import book from '../../routes/book';
import { v4 as uuidv4 } from 'uuid';

const LandingPage = () => {
  const logged = useSelector((state) => state.firebase.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    const newListId = uuidv4();

    if (logged.uid) {
      dispatch(createGearList(newListId, history));
    } else {
      history.push(`${book.login}`);
    }
  };

  return (
    <div className="container semitransparent-container">
      <h2>Hello to new PackPlanner user!</h2>
      <p className="flow-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        praesentium debitis dolore perspiciatis modi vitae illo labore,
        quibusdam aliquid nemo obcaecati sunt ea pariatur vel aperiam,
        consequuntur cum voluptatum doloremque!
      </p>
      <div
        onClick={onClickHandler}
        className="waves-effect waves-light btn-large"
      >
        Let's pack for hike
      </div>
    </div>
  );
};

export default LandingPage;
