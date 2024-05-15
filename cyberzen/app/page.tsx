import Image from 'next/image';
import Footer from "@/components/Footer";
import Header from "@/components/Header"
import { Grid, Typography } from "@mui/material";


export default function Home() {
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h2"> Empowering businesses through insightful consultancy and innovative software solutions.</Typography>
          <Typography variant="h3">"We specialize in consultancy and software solutions.</Typography>
        </Grid>
        <Grid item xs={6}>
          <Image src="/images/backgroundimg.jpg" alt="Your Image" width={500} height={300} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
