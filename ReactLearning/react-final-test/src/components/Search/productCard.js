import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    padding: '50px'
  },
  root: {
    boxShadow: '0 4px 20px -1px rgba(35,35,35,.2);'
  },
  textOverflow: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  buttonWrapper: {
    margin: '20px 0'
  }
}));

export default function ProductCard(props) {
  const classes = useStyles();

  const history = useHistory();

  const showDetails = (productid) => {
    history.push(`/product/${productid}`);
  }

  return (
    <Grid item xs={4} spacing={3} className={classes.cardWrapper}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.products.compositeProducts[0].EProductMedia.smallURI}
          title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.textOverflow} title={props.products.sfdcName}>
                {props.products.sfdcName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.textOverflow} title={props.products.shortDesc}>
                {props.products.shortDesc}
            </Typography>
          </CardContent>
          <Button size="small" color="primary" variant="outlined" className={classes.buttonWrapper} onClick={() => showDetails(props.products.sfid)}>
              View Details
          </Button>
      </Card>
    </Grid>
  );
}
