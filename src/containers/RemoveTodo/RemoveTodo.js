import { connect } from 'react-redux';
import { removeTodo } from '../../redux/todo.actions';

import RemoveItem from '../../components/RemoveItem/RemoveItem';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(removeTodo(ownProps.id));
    }
  }
}

const RemoveTodo = connect(
  null,
  mapDispatchToProps
)(RemoveItem)

export default RemoveTodo;
