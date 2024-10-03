
import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography, Container } from "@mui/material";
import PropTypes from 'prop-types';

export default function SeccionOne(props) {
  const { post } = props;

  const Img = styled("img")({
    width: 600,
    height: 450,
    objectFit: 'contain',
    objectPosition: 'center',
  });

  return (
    <>
      <Container maxWidth='lg'
        sx={{
          display: 'grid',
          gridAutoFlow: 'row',
          gridTemplateColumns: 'repeat(2, 1fr)',
          marginBottom: 5,
          marginTop: 3,
          margin: 0,
          justifyContent: 'space-between',

        }}>

        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            height: '100%',
            width: '100%',

            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${post.image})`,
          }}
        >
          {/* Increase the priority of the hero background image */}
          {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.062)',
            }}
          />

          <Grid item md={12}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 12 },
                // textAlign: 'center',
              }}
            >
              <Typography component="h1" variant="h1" color="inherit" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
            </Box>
          </Grid>
          <Grid container direction="row">
            <Box sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              // pr: { md: 0 },
            }}>
              <Img src="../src/assets/Logo.png" />
            </Box>
          </Grid>
        </Paper>
      </Container>

    </>
  )

}
SeccionOne.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
  }).isRequired,
};