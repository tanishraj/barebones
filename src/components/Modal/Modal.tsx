import React, { useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';

import { ModalProps } from './types';
import { modalStyles } from './variants';

const Modal: React.FC<ModalProps> = ({
  size,
  position,
  isOpen,
  showCloseButton,
  isResponsive,
  closeOnBackdropClick,
  children,
  footer,
}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const closeModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  }, []);

  return (
    <>
      <dialog
        ref={modalRef}
        className={clsx(
          'modal',
          modalStyles({ position, isOpen, isResponsive }),
        )}
      >
        <div className={clsx('modal-box', modalStyles({ size }))}>
          {showCloseButton && (
            <button
              className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'
              onClick={closeModal}
            >
              ✕
            </button>
          )}
          {children}
          <div className='modal-action'>
            <form method='dialog'>{footer}</form>
          </div>
        </div>
        {closeOnBackdropClick && (
          <label className='modal-backdrop' onClick={closeModal}>
            Close
          </label>
        )}
      </dialog>
    </>
  );
};

export default Modal;
