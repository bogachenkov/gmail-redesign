import React from 'react';
import PropTypes from 'prop-types';

const HasSelect = ({selectedCount, unselectAll}) => (
  <div className="no-conversation">
    <p className="no-conversation--title">
      {`Выбрано ${selectedCount} бесед(ы)`}
    </p>
    <span onClick={unselectAll} className="no-conversation--link">Отменить</span>
  </div>
);

HasSelect.propTypes = {
  selectedCount: PropTypes.number.isRequired,
  unselectAll: PropTypes.func.isRequired
}

export default HasSelect;
