import React from 'react';
import {Typography, Grid, Box } from "@mui/material";
import { makeStyles } from '@mui/styles';


const ContactPage: React.FC = () => {
  return (
    <div>
        <Grid container spacing={2} p={8} alignItems="center" justifyContent="center" direction="column">
          <Typography variant="h1" sx={{ color: '#0d0c22', textAlign: 'center', fontSize: '4rem', fontWeight: 'bold' }}>Got A Question?</Typography>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>Leave us a message below and we'll get in touch with you as soon as we can.</Typography>
      </Grid>

      <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        
      </Grid>
    </Grid>
      

    </div>
  );
};

export default ContactPage;
