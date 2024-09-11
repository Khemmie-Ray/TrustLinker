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

function AgreementDetails({data}) {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   

  return (
    <div className='p-5 text-white'>
        <div>
        {/* <button className="text-white bg-[#222BAE] p-4 rounded-lg lg:text-[18px] md:text-[18px] font-bold text-[16px] w-[100%] my-2 hover:bg-[#5a60b3] hover:text-white hover:font-bold" onClick={handleOpen}>Create Contract</button> */}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4>{data._agreement}</h4>
          {/* <button onClick={sign} className="bg-[#222BAE] text-[white] py-2 px-4 rounded-lg lg:text-[18px] md:text-[18px] font-bold text-[16px] w-[100%] my-4">Party A sign &rarr;</button> */}
        </Box>
      </Modal>
        </div>
    </div>
  )
}

export default AgreementDetails
