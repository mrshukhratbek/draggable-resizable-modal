import * as React from 'react';
import type { ModalPropTypes } from './modal-prop-types';
import Modal from './modal/modal.component';
import Portal from '@rc-component/portal';

const ModalWrap: React.FC<ModalPropTypes> = (props: ModalPropTypes) => {
  const { open, getContainer } = props;

  return (
    <Portal open={open} getContainer={getContainer} autoLock={open}>
      <Modal {...props} />
    </Portal>
  );
};

ModalWrap.displayName = 'Modal';

export default ModalWrap;
