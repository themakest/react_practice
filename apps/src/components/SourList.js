import React from 'react';
import PropTypes from 'prop-types';
import Sour from './Sour';

const SourList = ({ sourMemo }) => (
  <div className="list">
    {sourMemo.map((item) =>
      <Sour
        key={item.id}
        id={item.id}
        {...item}
      />
    )}
  </div>
)

SourList.propTypes = {
  sourMemo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    lemon: PropTypes.string.isRequired,
    taste: PropTypes.string.isRequired,
    alc: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired).isRequired
}

export default SourList;
