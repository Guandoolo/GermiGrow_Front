import { Container } from "@mui/material";
import SeccionOne from "../componentes/seccionOne";

import Footer from "../componentes/footer";
import Carrusel from "../componentes/carrusel";
import CardsImage from "../componentes/card";


export default function Home() {
  const seccionOne = {
    title: 'I FEEL GOOD',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: '../src/assets/fondo_solo.jpg',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };

  return (
    <Container sx={{ width: '100%', margin: 0, marginTop: 3 }} >
      <SeccionOne post={seccionOne} />
      <Carrusel />
      <CardsImage />
      <Footer />
    </Container>
  )
}