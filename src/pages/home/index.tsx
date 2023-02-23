import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import BoardModalContent from "./components/boardModalContent";
import { LOAD, COMPLETE } from "../../utils/constants";

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      // do something else
      setShowModal(true);
    };

    // Check if the page has already loaded
    if (document.readyState === COMPLETE) {
      onPageLoad();
    } else {
      window.addEventListener(LOAD, onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener(LOAD, onPageLoad);
    }
  }, []);

  return (
    <main>
      <Modal showModal={showModal}>
        <BoardModalContent />
      </Modal>
    </main>
  );
};

export default Home;
