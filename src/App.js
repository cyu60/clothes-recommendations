import "./App.css";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ChoiceCard from "./components/ChoiceCard";
import ColorChoice from "./components/ColorChoice";
import { colors } from "@material-ui/core";
const getColors = require("get-image-colors");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const [color, setColor] = useState("None");
  const [colorlist, setColorlist] = useState([]);
  const [shirt, setShirt] = useState("None");
  const [files, setFiles] = useState([]);
  const [filename, setFilename] = useState("None");
  const classes = useStyles();
  // const colors = {

  // }

  const fileHandler = (event) => {
    console.log(event.target.files[0]);
    console.log(event.target.files[0].name);
    setFilename(event.target.files[0].name);
    files.push(URL.createObjectURL(event.target.files[0]));
    setFiles(files);
    console.log(files);
    // setFiles(event.target.files.map((file) => URL.createObjectURL(file)));
  };

  // SHould use async and await??
  const findColors = () => {
    files.forEach((file) =>
      getColors(file).then((colors) => {
        // `colors` is an array of color objects
        colors = colors.map((color) => color.hex());
        console.log(colors);
        // setColorlist([...colorlist, colors]);
        setColorlist(colorlist.concat(colors));
        // colorlist.push(colors);
        // setColorlist(colorlist);
        console.log("new list:", colorlist);
      })
    );
  };
  useEffect(
    () =>
      files.forEach((file) =>
        getColors(file).then((colors) => {
          console.log("side effect")
          // `colors` is an array of color objects
          colors = colors.map((color) => color.hex());
          console.log(colors);
          // setColorlist([...colorlist, colors]);
          setColorlist(colorlist.concat(colors));
          // colorlist.push(colors);
          // setColorlist(colorlist);
          console.log("new list:", colorlist);
        })
      ),
    [files]
  );

  return (
    <div className="App">
      <h1>Upload photo of your image</h1>
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden onChange={fileHandler} />
      </Button>
      <h2> Your image is called {filename}</h2>
      {files?.length === 0
        ? null
        : files.map((file) => <img src={file} alt="Your photo"></img>)}
      <div>
        <Button variant="contained" color="primary" onClick={findColors}>
          Generate color choices
        </Button>
        <h1>Choose your preferred color</h1>

        

        <div id="theme-options-wrapper">
          {colorlist.length > 0
            ? colorlist.map((color) => (
                <ColorChoice
                  backgroundColor={color}
                  onClick={() => setColor(color)}
                />
              ))
            : null}
        </div>
        <h1>Your preferred color is {color}</h1>
      </div>
      {/* <Grid container className={classes.root} spacing={2}> */}
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item key={1}>
            <ChoiceCard
              // className={classes.card}
              label="Long Sleeve Shirt"
              srcUrl="https://lh3.googleusercontent.com/proxy/olQbJ_RrkkUF1IU1h_EoayaU_LmepACNucrVKGxV0SG04CZG8z_zUiB3o6eDE3tb2-6wyRa2feM8574vgK3EkL6e"
              onClick={() => setShirt("Long Sleeve Shirt")}
            />
          </Grid>
          <Grid item key={2}>
            <ChoiceCard
              // className={classes.card}
              label="Short Sleeve Shirt"
              srcUrl="data:image/png;base64,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"
              onClick={() => setShirt("Short Sleeve Shirt")}
            />
          </Grid>
        </Grid>
      </Grid>
      <h1>Your preferred shirt is {shirt}</h1>
    </div>
  );
}

export default App;
