import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    padding: '15px'
  }
}));

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={4} spacing={3} className={classes.cardWrapper}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={props.products.compositeProducts[0].EProductMedia.smallURI}
            title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  {props.products.sfdcName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  {props.products.shortDesc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
          </CardActions>
      </Card>
    </Grid>
  );
}
