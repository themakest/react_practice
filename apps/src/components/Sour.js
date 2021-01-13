import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { delSour } from '../actions'

let Sour = ({ dispatch,id,lemon,taste,alc,comment }) => (
  <div className="list-box" id={id}>
    <div className="name">名前：{lemon}</div>
    <div className="taste">甘さ：{taste}</div>
    <div className="alc">Alc：{alc} %</div>
    <div className="comment">コメント：{comment}</div>

    <button
      onClick={() => {
        dispatch(delSour(id));
      }}>
      DEL
    </button>
  </div>
)

Sour.propTypes = {
  lemon: PropTypes.string.isRequired,
  taste: PropTypes.string.isRequired,
  alc: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}
Sour = connect()(Sour)

export default Sour;
