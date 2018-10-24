import React from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const ConversationActions = () => (
  <div className={`conversations--actions`}>
    <TwoToneIcon hoverable title="Архивировать" icon="archive" size={16} />
    <TwoToneIcon hoverable title="Удалить" icon="delete" size={16} />
    <TwoToneIcon hoverable title="Отметить как прочитанное" icon="drafts" size={16} />
    <TwoToneIcon hoverable title="Отложить" icon="query_builder" size={16} />
  </div>
);

export default ConversationActions;
