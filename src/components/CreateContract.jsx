import  { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'white',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 10,
    boxShadow: 24,
    border: '1px solid #42714262',
    backgroundColor: '#1E1D34',
    p: 4,
  };

const CreateContract = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   

  return (
    <div>
        <div>
        <button className="text-white bg-[#222BAE] p-4 rounded-lg lg:text-[18px] md:text-[18px] font-bold text-[16px] w-[100%] my-2 hover:bg-[#5a60b3] hover:text-white hover:font-bold" onClick={handleOpen}>Create Contract</button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <input type="text" placeholder="" className="rounded-lg w-[100%] text-white p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none" />
          <input type="text" placeholder='' className="rounded-lg w-[100%] border text-white border-white/50 p-4 bg-[#ffffff23] backdrop-blur-lg mb-4 outline-none" />
          <input type="email" placeholder='' className="text-white rounded-lg w-[100%] p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none" />
          <button className="bg-[#222BAE] text-[white] py-2 px-4 rounded-lg lg:text-[18px] md:text-[18px] font-bold text-[16px] w-[100%] my-4">Create &rarr;</button>
        </Box>
      </Modal>
        </div>
    </div>
  )
}

export default CreateContract