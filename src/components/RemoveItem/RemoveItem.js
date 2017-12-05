import React from 'react';
import PropTypes from 'prop-types';

// MATERIAL UI INCLUDES ---------------------------------------------
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
// ------------------------------------------------------------------

const RemoveItem = ({onClick}) => {
  return (
    <IconButton
      onClick={() => onClick()}
    >
      <DeleteIcon />
    </IconButton>
  );
}
RemoveItem.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default RemoveItem;
