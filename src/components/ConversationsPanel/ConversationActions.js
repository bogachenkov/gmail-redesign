import React from 'react';
import PropTypes from 'prop-types';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const ConversationActions = ({deleteFn}) => (
  <div className={`conversations--actions`}>
    <div>
      <TwoToneIcon hoverable title="Архивировать" icon="archive" size={16} />
    </div>
    <div onClick={deleteFn}>
      <TwoToneIcon hoverable title="Удалить" icon="delete" size={16} />
    </div>
    <div>
      <TwoToneIcon hoverable title="Отметить как прочитанное" icon="drafts" size={16} />
    </div>
    <div>
      <TwoToneIcon hoverable title="Отложить" icon="query_builder" size={16} />
    </div>
  </div>
);

ConversationActions.propTypes = {
  deleteFn: PropTypes.func.isRequired
}

export default ConversationActions;
