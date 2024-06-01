import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/Acceuil .png";
import project2 from "../images/Acceuil 1.png";
import project3 from "../images/figma.png";
import project4 from "../images/ecommerce fig.png";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Project 1",
    description: `j´ai créé un site e-commerce Mercedes sur PrestaShop, avec un thème dédié à cette marque de luxe.
L'objectif est de vendre des véhicules haut de gamme à travers cette plateforme en ligne.
L'accent est mis sur une expérience d'achat fluide, des informations produits détaillées et un processus sécurisé.
Vous optimisez également le référencement pour être facilement trouvé par les acheteurs de voitures de luxe Mercedes.`,
    image: project1,
  },
  {
    name: "Project 2",
    description: `J´ai développé mon site web de restauration avec Bootstrap pour le front-end, PHP pour le back-end et SQL pour la base de données.
    Ce stack vous permet d'avoir une interface moderne et responsive, avec la puissance de PHP et la flexibilité de SQL.
    Vous avez ainsi pu intégrer des fonctionnalités avancées comme la réservation en ligne et la gestion du back-office.
    Cette architecture vous assure flexibilité, sécurité et fiabilité pour faire évoluer le site.`,
    image: project2,
  },
  {
    name: "Project 3",
    description: `J´ai développé un site web d'agence digitale en utilisant Figma pour la conception.
    Avec Figma, j´ai créé un thème personnalisé reflétant l'identité visuelle l´agence.
    Ce thème m´a permis de mettre en place une interface moderne et attrayante, offrant une bonne expérience utilisateur.
    Grâce à Figma, j´ai pu concevoir et prototyper facilement les différentes pages.
    Cette approche a me permis de créer un site web sur-mesure, aligné avec la marque et les objectifs de votre entreprise.
    `,
    image: project3,
  },
  {
    name: "Project 4",
    description: `J´ai développé un site e-commerce avec Figma pour la conception.
    Le thème personnalisé reflète l'identité et l'expérience de votre marque.
    Cela vous a permis de créer une interface attrayante et optimisée pour la vente en ligne.
    Figma vous a facilité la conception des différentes pages du site.
    Cette approche vous a donné un site e-commerce aligné avec vos clients et votre marque.`,
    image: project4,
  },
  
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
