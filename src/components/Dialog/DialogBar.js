import React from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const DialogBar = () => (
  <div className="dialog--bar">
    <div className="dialog--action" title="Переслать">
      <TwoToneIcon hoverable icon="forward" size={16} />
    </div>
    <div className="dialog--action" title="Печатать все">
      <TwoToneIcon hoverable icon="print" size={16} />
    </div>
    <div className="dialog--action">
      <TwoToneIcon hoverable icon="unfold_more" size={16} />

    </div>
  </div>
);

export default DialogBar;
