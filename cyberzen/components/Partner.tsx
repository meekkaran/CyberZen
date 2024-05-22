import React from 'react';
import { Box, Button, Grid, Typography, Card, CardContent, CardActions, Icon } from "@mui/material";

function Partner() {
  return (
    <div>
      <Grid container spacing={2} p={8} alignItems="center" justifyContent="center" direction="column">
        <Grid item>
          <Typography variant="h1" sx={{ color: '#0d0c22', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
            Our Partners
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            In support of our daily activities we work closely with partners to suppurt
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            "I'll put three different logos here"
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Partner
