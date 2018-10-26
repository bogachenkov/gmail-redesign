import React from 'react';

const HasSelect = ({selectedCount, unselectAll}) => (
  <div className="no-conversation">
    <p className="no-conversation--title">
      {`Выбрано ${selectedCount} бесед(ы)`}
    </p>
    <a onClick={unselectAll} className="no-conversation--link">Отменить</a>
  </div>
);

export default HasSelect;
