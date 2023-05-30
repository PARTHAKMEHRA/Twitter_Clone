import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import logo from './logo.png';
import google from './google.png';
import apple from './apple.png';
import styles from './login.module.css';
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


export default function Login() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  function handleSubmit(){
    navigate('/')
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="twitter logo"/>
            </div>


            <div className={styles.heading}>
                <h2>Sign in to Twitter</h2>
            </div>


            <div className={styles.signId}>
                <div className={styles.google}>
                    <img className={styles.google_image} src={google} alt='google logo'/>
                    <span>Sign in with Google</span>
                </div>
                <div className={styles.apple}>
                    <img src={apple} alt='apple logo'/>
                    <span>Sign in with Apple</span>
                </div>
            </div>


            <div className={styles.info}>
                <input type="email" placeholder='Phone,email or username' required/>
            </div>

            <div className={styles.button}>
                <button id={styles.next} onClick={handleSubmit}>Next</button>
                <button id={styles.fpass}>Forget Password</button>
            </div>


            <div className={styles.not_account}>
                <p>Don't have an account? <a><Link to="/signup">SignUp</Link></a></p>
            </div>
        </div>

        </Box>
      </Modal>
    </div>
  );
}
