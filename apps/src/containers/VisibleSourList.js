import { connect } from 'react-redux';
import SourList from '../components/SourList';


//State情報をPropsとして扱うことができるようにする
const mapStateToProps = (state) => {
  return { sourMemo: state.sourMemo }
}

const VisibleSourList = connect(mapStateToProps)(SourList)
export default VisibleSourList
