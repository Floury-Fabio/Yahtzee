import React from 'react';
import PropTypes from 'prop-types';

import 'styles/RulesModal.css';

const RulesModal = ({ displayed, setDisplayed }) => {
  const handleClickClose = () => {
    setDisplayed(false);
  };

  const handleKeyDownClose = (event) => {
    if (event.keyCode === 13) {
      setDisplayed(false);
    }
  };

  return (
    <div id="RulesModal" className={`RulesModal ${displayed ? 'RulesModal-displayed' : ''}`}>
      <div className="RulesModal-content">
        <span className="RulesModal-close" role="button" tabIndex={0} onClick={handleClickClose} onKeyDown={handleKeyDownClose}>&times;</span>
        <h3 className="RulesModal-title"> Rules</h3>
        <p>
          The aim is to gain as many points as possible.
          <br />
          <br />
          For the that, you have throw dices and make figures.
          <br />
          <br />
          Each combination scores an amount of points.
          <br />
          <br />
          You have three throws in order to make a combination.
          <br />
          <br />
          You can save the dices between the throws.
        </p>
        <h3>Specification about some combinations </h3>
        <ul>
          <li> Full house is 3 dices of a kind and 2 dices of an other kind. </li>
          <li> Yahtzee is five dices of the same kind. </li>
          <li> A small straight is four sequential dices </li>
          <li> A large straight is five sequential dices </li>
        </ul>
      </div>
    </div>
  );
};

export default RulesModal;

RulesModal.propTypes = {
  displayed: PropTypes.bool.isRequired,
  setDisplayed: PropTypes.func.isRequired,
};
