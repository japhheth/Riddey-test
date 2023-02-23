import { ReactNode } from "react";
import {
  ModalWrapper,
  ModalBackground,
  ModalContentWrapper,
  ModalContent,
} from "./styles";

interface ModalProps {
  showModal: boolean;
  children: ReactNode;
}

const Modal = ({ showModal, children }: ModalProps) => {
  return (
    <>
      {showModal ? (
        <ModalWrapper role="alert">
          <ModalBackground>
            <ModalContentWrapper>
              <ModalContent>{children}</ModalContent>
            </ModalContentWrapper>
          </ModalBackground>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Modal;
