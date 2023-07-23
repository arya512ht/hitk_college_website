import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Button, Paper, Typography } from '@mui/material';
import './UserDashboard.css';

const UserDashboard = () => {
  const location = useLocation();
  const userData = location.state?.user;
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/onlinefacility');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return formattedDate;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <Box className='uback'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box className='dashboard-header'>
            <Typography variant='h4' component='h1'>
              Welcome!
            </Typography>
            <Button variant='contained' color='primary' onClick={handleLogout}>
              Log out
            </Button>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {userData ? (
            <Box className='user-info'>
              <Typography variant='h5' component='h3'>
                Student Information:
              </Typography>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Box className='user-profile'>
                  {userData.image && (
                    <motion.img
                      src={`http://localhost:8000/uploads/${userData.image}`}
                      alt='User Profile'
                      className='user-avatar'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    />
                  )}
                  <Box className='user-details'>
                    <motion.div
                      whileHover={{ scale: 1.03, rotateZ: 3 }}
                      whileTap={{ scale: 0.97, rotateZ: -3 }}
                    >
                      <Paper elevation={3} className='section-box'>
                        <Typography variant='h6'>Personal Details</Typography>
                        <Typography variant='body1'>
                          <strong>Student name:</strong> {userData.name}
                        </Typography>
                        <Typography variant='body1'>
                          <strong>Father's name:</strong> {userData.fname}
                        </Typography>
                        <Typography variant='body1'>
                          <strong>Mother's name:</strong> {userData.mname}
                        </Typography>
                        <Typography variant='body1'>
                          <strong>Email address:</strong> {userData.email}
                        </Typography>
                        <Typography variant='body1'>
                          <strong>Phone number:</strong> {userData.mobile}
                        </Typography>
                        <Typography variant='body1'>
                          <strong>Date of Birth:</strong> {formatDate(userData.dob)}
                        </Typography>
                        <Typography variant='body1'>
                          <strong>Gender:</strong> {userData.gender}
                        </Typography>
                        <Typography variant='body1'>
                          <strong>Religion:</strong> {userData.rel}
                        </Typography>
                      </Paper>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.03, rotateZ: 3 }}
                      whileTap={{ scale: 0.97, rotateZ: -3 }}
                    >
                      <Paper elevation={3} className='section-box'>
                        <Typography variant='h6'>Address Details</Typography>
                        <Typography variant='body1'>
                          <strong>Address:</strong> {userData.street}, {userData.post},{' '}
                          {userData.police}, {userData.dist}, {userData.state} -{' '}
                          {userData.pin}
                        </Typography>
                      </Paper>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.03, rotateZ: 3 }}
                      whileTap={{ scale: 0.97, rotateZ: -3 }}
                    >
                      <Paper elevation={3} className='section-box'>
                        <Typography variant='h6'>Academic Details</Typography>
                        <Typography variant='body1'>
                          <strong>Course:</strong> {userData.course}
                        </Typography>
                        <Typography variant='body1'>
                          <strong>Department:</strong> {userData.department}
                        </Typography>
                        <Typography variant='body1'>
                          <strong>Admission date:</strong> {formatDate(userData.adate)}
                        </Typography>
                        <Typography variant='body1'>
                          <strong>Roll Number:</strong> {userData.roll}
                        </Typography>
                        {/* Add other academic details as needed */}
                      </Paper>
                    </motion.div>
                    {/* Add more section boxes as needed */}
                  </Box>
                </Box>
              </motion.div>
            </Box>
          ) : (
            <Typography variant='body1'>Loading user data...</Typography>
          )}
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default UserDashboard;












