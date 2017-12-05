import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <Button raised disabled>{children}</Button>
  }

  return (
    <Button
      raised
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </Button>
  )
}
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
