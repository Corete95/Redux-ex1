import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    onClick: (size) => {
      dispatch({ type: "INCREMENT", size });
    },
  };
}
export default connect(null, mapDispatchToProps)(AddNumber);
