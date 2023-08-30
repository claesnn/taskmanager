import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Root() {
  return (
    <Button component={RouterLink} to="/edit">
      Edit
    </Button>
  );
}
