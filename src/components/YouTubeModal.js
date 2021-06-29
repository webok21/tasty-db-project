import './../css/YouTubeModal.css'

import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import ReactPlayer from 'react-player/lazy'


const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="secondary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
        <ReactPlayer url={props.linkYoutube}/>
        </ModalBody>
          <Button color="secondary" onClick={toggle}>Close</Button>
      </Modal>
    </div>
  );
}

export default ModalExample;