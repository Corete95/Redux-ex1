import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";
function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
}
function mapReduxDispatchToReactProps() {}
export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(DisplayNumber);
