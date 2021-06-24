import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavHeader from '../../components/NavHeader'
import MyCards from '../../components/MyCards'
import Footer from '../../components/Footer'


const cards = [{
  id: 1,
  image: 'https://cdn.pixabay.com/photo/2019/07/27/21/42/t-shirt-4367577_960_720.jpg',
  title: 'Blusas',
  description: 'Blusas masculinas.'
},
{
  id: 2,
  image: 'https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687_960_720.jpg',
  title: 'Jeans',
  description: 'Calças jeans'
},
{
  id: 3,
  image: 'https://cdn.pixabay.com/photo/2014/04/30/18/48/boxer-shorts-335120_960_720.jpg',
  title: 'Cueca Box',
  description: 'Cuecas box de todos os tamanhos.'
}];

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
},
}));


function App() {
  const classes = useStyles();

  return (
    <>
      <NavHeader />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Moda
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Roupas na moda
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Login
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Cadastre-se
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <MyCards data={cards} />

        </Container>
      </main>
        <Footer />
    </>
  );
}


export default App;
