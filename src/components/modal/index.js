import React, { memo, useCallback, useRef } from "react";
import styled from "styled-components";
import { getRootStyleDialog } from "./modules/getRootStyleDialog";
import { createPortal } from "react-dom";
import { Color } from "../../shared/constants/color";

const { COLOR_000000_030 } = Color;

export const Dialog = memo(
  ({
    header,
    footer,
    body,
    isOpen,
    onClose,
    isModal,
    style,
    maskClosable = true,
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

    if (!isOpen) return null;

    return createPortal(
      <div>
        <Root
          $isModal={isModal}
          onClick={onWrapperClick}
          ref={wrapperRef}
        >
          <DialogContent
            style={style}
            onMouseDown={onContentMouseDown}
            ref={contentRef}
          >
            {header && <>{header}</>}
            {body && <>{body}</>}
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 8px;
    box-shadow: 0 0 20px 5px ${COLOR_000000_030};
    {...style}
`;
