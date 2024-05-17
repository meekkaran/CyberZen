import Image from 'next/image';
import Footer from "@/components/Footer";
import Header from "@/components/Header"
import { Box, Button, Grid, Typography } from "@mui/material";


export default function Home() {
  return (
    <>
      <Header />
      {/* section 1 */}
      <Grid container spacing={2} p={10}>
      <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
        <Box textAlign="center" p={3} width="100%">
          <Typography variant="h4">We specialize in consultancy and software solutions.</Typography>
          <Typography variant="h6">Empowering businesses through insightful consultancy and innovative software solutions.</Typography>
          <Button variant="contained" sx={{ backgroundColor: "#ff9d00","&:hover": { backgroundColor: "#e68a00" },}}>
              Check out our Products
          </Button>
        </Box>
      </Grid>
      <Grid item xs={6} p={4}>
        <Image src="/images/backgroundimg.jpg" alt="Your Image" width={600} height={500} style={{ borderRadius: '10px' }} />
      </Grid>
      </Grid>

      {/* section 2 */}
      <Grid container spacing={2} p={10} alignItems="center" justifyContent="center">
        <Typography variant="h1" sx={{ color: '#0d0c22', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
          Our Services
        </Typography>
      </Grid>


      <Footer />
    </>
  );
}
