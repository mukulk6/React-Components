import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AwardsModal.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GetProfileSeeker from './getprofile.json';
import ProgressBar from 'react-bootstrap/esm/ProgressBar';

const AwardsModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class="container">
    <Button variant="primary" onClick={handleShow}>
    Launch demo modal
  </Button>
  <Modal show={show} onHide={handleClose}>
   <Modal.Header className={styles.modalTitle} closeButton >
   <Modal.Title style={{fontSize:"18px" ,fontWeight:"bold",textAlign:"center", display:"flex", justifyContent:"center", alignItems:"center"}}>Seeker Awards</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <div className={styles.profileinfo}>
      <div class="row">
        <div class="col-md-4" className={styles.awardsAtrributes}>Category</div>
          <div class="col-md-4" className={styles.awardsAtrributes}>Badge</div>
        </div>
        {GetProfileSeeker.map((data,ind)=>{return(<tbody key={ind}>{data.userBadges.map((cat)=>{return(<tr><td className={styles.awardCategory}>{cat.category}</td><td>{cat.level ===3 && <img className={styles.badges} src={require('../../images/bronze_badge.png')}></img> || cat.level===2 && <img className={styles.badges} src={require('../../images/silver_badge.png')} ></img>}</td><td><ProgressBar min={0} max={100} striped variant="warning" animated now={60} style={{width:"85%"}}/></td></tr>)})}</tbody>)})}
    </div>
   </Modal.Body>
  </Modal>
  </div>
  )
};

AwardsModal.propTypes = {};

AwardsModal.defaultProps = {};

export default AwardsModal;
