import React, { memo, useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Dialog } from "../dialog";
import { Color } from "../../shared/constants/color";

const { COLOR_000000 } = Color;

export const Example2 = memo(() => {
  const [open, setOpen] = useState({});

  const showModal = useCallback(
    (name) => () => {
      setOpen({ ...open, [name]: true });
    },
    [open]
  );

  const handleClose = useCallback(
    (name) => () => {
      setOpen({ ...open, [name]: false });
    },
    [open]
  );

  const footer = useMemo(
    () => (
      <FooterWrapper>
        <b>This is footer</b>
      </FooterWrapper>
    ),
    []
  );

  const header = useCallback(
    (name, title) => {
      return (
        <HeaderWrapper>
          <h3>{title}</h3>
          <Button onClick={handleClose(name)}>Close</Button>
        </HeaderWrapper>
      );
    },
    [handleClose]
  );

  const headerOutSide = useMemo(() => <h3>Modal click outside</h3>, []);

  return (
    <Root>
      <h2>EXERCISE 2 Example </h2>
      <Container>
        <div>
          <h3>Modal not Click Outside</h3>
          <Button onClick={showModal("notClickOutside")}>Open Modal</Button>
          <Dialog
            isOpen={open.notClickOutside}
            onClose={handleClose("notClickOutside")}
            isModal
            footer={footer}
            header={header("notClickOutside", "Modal not click outside")}
            maskClosable={false}
          >
            <Body>
              <h4>Body</h4>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Body>
          </Dialog>
        </div>
        <div>
          <h3>Modal Click Outside</h3>
          <Button onClick={showModal("clickableOutside")}>Open Modal</Button>
          <Dialog
            isOpen={open.clickableOutside}
            onClose={handleClose("clickableOutside")}
            isModal
            footer={footer}
            header={headerOutSide}
          >
            <Body>
              <h4>Body</h4>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Body>
          </Dialog>
        </div>
        <div>
          <h3>Dialog</h3>
          <Button onClick={showModal("dialog")}>Open Dialog</Button>
          <Dialog
            isOpen={open.dialog}
            onClose={handleClose("dialog")}
            footer={footer}
            header={header("dialog", "Dialog")}
          >
            <Body>
              <h4>Body</h4>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Body>
          </Dialog>
        </div>
        <div>
          <h3>Default Header with title</h3>
          <Button onClick={showModal("defaultHeader")}>Default Header</Button>
          <Dialog
            isOpen={open.defaultHeader}
            isModal
            onClose={handleClose("defaultHeader")}
            footer={footer}
            title={"Default header"}
          >
            <Body>
              <h4>Body</h4>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Body>
          </Dialog>
        </div>
        <div>
          <h3>Custom Style</h3>
          <Button onClick={showModal("customStyle")}>Custom Style</Button>
          <Dialog
            isOpen={open.customStyle}
            onClose={handleClose("customStyle")}
            isModal
            footer={footer}
            header={header("customStyle", "Custom Style")}
            maskClosable={false}
            style={{
              padding: 40,
              borderRadius: 24,
              background: "pink",
            }}
          >
            <Body>
              <h4>Body</h4>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Body>
          </Dialog>
        </div>
      </Container>
    </Root>
  );
});

const Root = styled.div`
  margin-top: 24px;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  padding-block: 20px;
  border-top: 1px solid ${COLOR_000000};
  border-bottom: 1px solid ${COLOR_000000};
`;

const FooterWrapper = styled.div`
  margin-top: 20px;
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
`;
