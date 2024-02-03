import React, { memo } from "react";
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
    closeBtn,
    isOpen,
    onClose,
    isModal,
    style,
    // TODO: Handling click outside will close the dialog.
    // isCloseWhenClickOutside,
  }) => {
    // TODO: Handling click outside will close the dialog.
    // ref for Root element
    // const ref = useRef();
    // const [isOpenState, setIsOpenState] = useState(isOpen);

    /**
     * TODO: Handling click outside will close the dialog.
     */
    // const handleClose = useCallback(() => {
    //   setIsOpenState(false);
    //   onClose && onClose();
    // }, [onClose]);

    // useEffect(() => {
    //   const handleClickOutside = (event) => {
    //     if (!ref.current?.contains(event.target)) {
    //       handleClose();
    //     }
    //   };

    //   if (isCloseWhenClickOutside) {
    //     window.addEventListener("click", handleClickOutside);
    //     return () => {
    //       window.removeEventListener("click", handleClickOutside);
    //     };
    //   }
    // }, [handleClose, isCloseWhenClickOutside]);

    /**
     *  TODO: Handling click outside will close the dialog.
     *  Change to "isOpenState"
     * */
    if (!isOpen) return null;

    return createPortal(
      <div>
        <Root $isModal={isModal}>
          <DialogContent style={style}>
            <div>{header}</div>
            <div>{body}</div>
            <div>{footer}</div>
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
