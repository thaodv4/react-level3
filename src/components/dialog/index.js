import React, { memo, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { getRootStyleDialog } from "./modules/getRootStyleDialog";
import { createPortal } from "react-dom";
import { Color } from "../../shared/constants/color";
import { getContentDialogStyle } from "./modules/getContentDialogStyle";

const { COLOR_000000_0060 } = Color;

export const Dialog = memo(
  ({
    header,
    footer,
    children,
    isOpen,
    onClose,
    isModal,
    style,
    title,
    maskClosable = true,
    isCloseBtn = true,
  }) => {
    const contentClickRef = useRef(false);
    const wrapperRef = useRef();
    const contentRef = useRef();

    const onContentMouseDown = useCallback(() => {
      contentClickRef.current = true;
    }, []);

    const onInternalClose = useCallback(() => {
      onClose?.();
    }, [onClose]);

    let onWrapperClick = null;

    if (maskClosable && isModal) {
      onWrapperClick = (e) => {
        if (contentClickRef.current) {
          contentClickRef.current = false;
        } else if (wrapperRef.current === e.target) {
          onInternalClose();
        }
      };
    }

    useEffect(() => {
      if (isOpen && isModal) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = null;
      }
    }, [isOpen, isModal]);

    if (!isOpen) return null;

    return createPortal(
      <div>
        <Root $isModal={isModal} onClick={onWrapperClick} ref={wrapperRef}>
          <DialogContent
            $isModal={isModal}
            style={style}
            onMouseDown={onContentMouseDown}
            ref={contentRef}
          >
            {header ? (
              <>{header}</>
            ) : isCloseBtn ? (
              <HeaderWrapper>
                <h3>{title}</h3>
                <BtnClose onClick={onInternalClose}>X</BtnClose>
              </HeaderWrapper>
            ) : null}
            {children}
            {footer && <>{footer}</>}
          </DialogContent>
        </Root>
      </div>,
      document.body
    );
  }
);

const Root = styled.div`
  ${getRootStyleDialog}
`;

const DialogContent = styled.div`
    width: 520px;
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 20px;
    transform: translate(-50%,-50%);
    border-radius: 8px;
    ${getContentDialogStyle}
    {...style}
`;

const HeaderWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const BtnClose = styled.button`
  outline: none;
  border: none;
  text-align: end;
  cursor: pointer;
  padding: 2px 4px;
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 4px;
  &:hover {
    background: ${COLOR_000000_0060};
  }
`;
