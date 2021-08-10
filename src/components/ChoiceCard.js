import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const ChoiceCard = (props) => {
  return (
    <Card
      style={{ maxWidth: 250, borderSpacing: "15px" }}
      onClick={props.onClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.label}
          height="250"
          image={props.srcUrl}
          title={props.label}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ChoiceCard;
