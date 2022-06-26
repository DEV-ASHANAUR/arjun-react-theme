import React from 'react'
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";
import './player.css';
const Player = ({open,setOpen,videoUrl}) => {

  const onCloseModal = () => setOpen(false);

  return (
    <>
        {/* <button onClick={onOpenModal}>Open modal</button> */}
        <Modal
        open={open}
        onClose={onCloseModal}
        styles={{
        modal: {
            maxWidth: "500px",
            width: "100%",
            padding: "unset",
            background:"#000000",
            },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)"
          },
          closeButton: {
            background: "#2948D4"
          }
        }}
        classNames={{
            overlayAnimationIn: 'customEnterOverlayAnimation',
            overlayAnimationOut: 'customLeaveOverlayAnimation',
            modalAnimationIn: 'customEnterModalAnimation',
            modalAnimationOut: 'customLeaveModalAnimation',
        }}
        center
      >
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="calc(100vh - 100px)"
          controls={true}
        />
      </Modal>
    </>
  )
}

export default Player