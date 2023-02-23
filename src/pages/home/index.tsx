import { useState } from "react";
import Modal from "../../components/Modal";
import BoardModalContent from "./components/boardModalContent";

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  return (
    <main>
      <Modal showModal={showModal}>
        <BoardModalContent />
      </Modal>
    </main>
  );
};

export default Home;
