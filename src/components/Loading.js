import { makeStyles } from "@material-ui/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  centering: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "16px",
    paddingBottom: "16px",
  },
}));

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.centering}>
      <CircularProgress />
    </div>
  );
}
