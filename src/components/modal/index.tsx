import React, { FC, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";

import CloseIcon from "assets/icons/close.svg";

type ModalProps = {
  children?: any;
  hide: () => void;
  isOpen: boolean;
  hideClose?: boolean;
  title: string;
};

export const Modal: FC<ModalProps> = ({
  children,
  hide,
  isOpen,
  hideClose = false,
  title,
}) => {
  const modalRoot = document.getElementById("modal");

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) hide();
    },
    [hide]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  if (!modalRoot || !isOpen) return null;

  return createPortal(
    <>
      <div className='flex justify-center items-center overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-60'>
        <div
          onClick={hide}
          className='absolute w-full h-full top-0 left-0'
        ></div>
        <div className='relative w-auto my-6 mx-auto max-w-md'>
          {/*content*/}
          <div className='shadow-lg relative w-full outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-center justify-between p-5 rounded-t-3xl bg-gray-200'>
              <h3 className='text-lg font-semibold'>{title}</h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={hide}
              >
                <Image src={CloseIcon} alt={title} />
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto bg-white rounded-b-3xl'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
};
