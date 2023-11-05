import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertSuccess = ({ purchaseID }) => {
  return (
    <Stack sx={{ width: "50%", margin: "0 auto" }} spacing={2}>
      <Alert variant="filled" severity="success">
        Purchasse Successful!, your <u>SHOP ID</u> is: <u>{purchaseID}</u>
      </Alert>
    </Stack>
  );
};

export default AlertSuccess;
