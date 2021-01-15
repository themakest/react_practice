import React from 'react';
import { connect } from 'react-redux';
import { addSour } from '../actions';
import  sassTest from '../test.module.scss';

let AddSour = ({ dispatch }) => {
  let nameSour,countTaste,countAlc,comment;

  return (
    <div className={sassTest.text}>
      <div className="input-box">
        レモンサワーの商品名：
        <input
        id="name"
        type="text"
        ref={(node) => {
          nameSour = node
        }} />
      </div>

      <div className="range-box">
        甘さ：<input
        id="taste"
        type="range"
        defaultValue="0"
        min="0"
        max="5"
        step="1"
        ref={(node) => {
          countTaste = node
        }} />
      </div>

      <div className="range-box">
        Alc：<input
        id="alc"
        type="range"
        defaultValue="0"
        min="0"
        max="10"
        step="1"
        ref={(node) => {
          countAlc = node
        }} />
      </div>

      <div className="input-box">
        コメント：
        <input
        id="comment"
        type="text"
        ref={(node) => {
          comment = node
        }} />
      </div>

      <button
        onClick={() => {
          dispatch(addSour(nameSour.value,countTaste.value,countAlc.value,comment.value));
          nameSour.value = '';
          countTaste.value = 0;
          countAlc.value = 0;
          comment.value = '';
        }}>
        ADD
      </button>
      <button
        onClick={() => {
          nameSour.value = '';
          countTaste.value = 0;
          countAlc.value = 0;
          comment.value = '';
        }}>
        RESET
      </button>
    </div>
  )
}
AddSour = connect()(AddSour)

export default AddSour;