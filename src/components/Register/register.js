import React from "react";
import{ useState } from"react";
import styles from './register.module.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  border:'none',
  outline:'none',
  borderRadius:'15px'
};

const Register= () => {

  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  function handleSubmit(){
    navigate('/login')
  }

  return (
    <>
     <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className={styles.container}>


            <div className={styles.heading}>
                <h2>Create your account</h2>
            </div>


            <div className={styles.info}>
                <input type="name" placeholder='Name' required/>
                <input type="email" placeholder='Email' required/>
                <input type="number" placeholder='Phone' required/>
                <label>Date of birth</label>
                <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                <input type="date" placeholder='Month day and year' required/>

            </div>

            <div className={styles.button}>
                <button id={styles.next} onClick={handleSubmit}>Next</button>
            </div>


            <div className={styles.not_account}>
                <p>Have an account? <a><Link to="/login">Login</Link></a></p>
            </div>
        </div>

        </Box>
      </Modal>
    </div>
    </>
  );
};

export default Register;
