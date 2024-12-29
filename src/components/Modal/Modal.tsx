import React, { useRef } from 'react';
import clsx from 'clsx';

import { ModalProps } from './types';
import { modalStyles } from './variants';

const Modal: React.FC<ModalProps> = ({
  position,
  open,
  closeIcon,
  responsive,
  clickOutsideToClose,
}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleClick = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <button className='btn' onClick={handleClick}>
        open modal
      </button>
      <dialog
        ref={modalRef}
        className={clsx('modal', modalStyles({ position, open, responsive }))}
      >
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>Hello!</h3>
          <p className='py-4'>
            Press ESC key or click the button below to close
          </p>
          <div className='modal-action'>
            <form method='dialog'>
              {closeIcon && (
                <button className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'>
                  ✕
                </button>
              )}
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
        {clickOutsideToClose && (
          <label
            className='modal-backdrop'
            onClick={() => modalRef.current?.close()}
          >
            Close
          </label>
        )}
      </dialog>
    </>
  );
};

export default Modal;
