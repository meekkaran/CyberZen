import Image from 'next/image';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Partner from '@/components/Partner';
import { Box, Button, Grid, Typography, Card, CardContent, CardActions, Icon } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TerminalIcon from '@mui/icons-material/Terminal';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import FemaleIcon from '@mui/icons-material/Female';

export default function Home() {
  return (
    <>
      {/* <Header /> */}
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

      {/* section 2 - services section */}
      <>
      c

      <Grid container spacing={2} p={10} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: 'center', padding: 2 }}>
            <CardContent>
              <AcUnitIcon  sx={{ fontSize: 50 }}/>
              <Typography variant="h1" sx={{ fontSize: '1.5rem', margin: '1rem 0',fontWeight:'bold'  }}>
                Consultancy services
              </Typography>
              <Typography variant="body1">
                This is a small paragraph describing the content of the card.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" sx={{ backgroundColor: "#ff9d00","&:hover": { backgroundColor: "#e68a00" },}}>
              Reach out
            </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: 'center', padding: 2 }}>
            <CardContent>
              <TerminalIcon sx={{ fontSize: 50 }}/>
              <Typography variant="h1" sx={{ fontSize: '1.5rem', margin: '1rem 0', fontWeight:'bold'  }}>
                software solutions
              </Typography>
              <Typography variant="body1">
                This is a small paragraph describing the content of the card.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" sx={{ backgroundColor: "#ff9d00","&:hover": { backgroundColor: "#e68a00" },}}>
              Check out our Solutions
            </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: 'center', padding: 2 }}>
            <CardContent>
              <MonitorHeartIcon sx={{ fontSize: 50 }}/>
              <Typography variant="h1" sx={{ fontSize: '1.5rem', margin: '1rem 0', fontWeight:'bold'  }}>
                Wellness solutions
              </Typography>
              <Typography variant="body1">
                This is a small paragraph describing the content of the card.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" sx={{ backgroundColor: "#ff9d00","&:hover": { backgroundColor: "#e68a00" },}}>
              Learn More
            </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ textAlign: 'center', padding: 2 }}>
            <CardContent>
              <FemaleIcon sx={{ fontSize: 50 }}/>
              <Typography variant="h1" sx={{ fontSize: '1.5rem', margin: '1rem 0', fontWeight:'bold' }}>
                Women Empowerment
              </Typography>
              <Typography variant="body1">
                This is a small paragraph describing the content of the card.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" sx={{ backgroundColor: "#ff9d00","&:hover": { backgroundColor: "#e68a00" },}}>
              Learn More
            </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
    
      <Partner />
      {/* <Footer /> */}
    </>
  );
}
