import Image from 'next/image';
import Footer from "@/components/Footer";
import Header from "@/components/Header"
import { Grid, Typography } from "@mui/material";


export default function Home() {
  return (
    <>
      <Header />
      {/* section 1 */}
      <Grid container spacing={2} p={10}>
        <Grid item xs={6}  alignItems="center" justifyContent="center" textAlign={'center'}>
          <Typography variant="h4"> "We specialize in consultancy and software solutions.</Typography>
          <Typography variant="h6">Empowering businesses through insightful consultancy and innovative software solutions.</Typography>
        </Grid>
        <Grid item xs={6} p={4}>
          <Image src="/images/backgroundimg.jpg" alt="Your Image" width={500} height={500} style={{ borderRadius: '10px' }} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
