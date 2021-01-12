import { connect } from 'react-redux';
import SourList from '../components/SourList';


//State情報をPropsとして扱うことができるようにする
const mapStateToProps = (state) => {
  return {
    addSour: state.addSour,
    delSour: state.delSour
  }
}

const VisibleSourList = connect(
  mapStateToProps
)(SourList)
export default VisibleSourList
