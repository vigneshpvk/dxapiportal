import Header from "../components/Header/Header";
import {
  Box,
  FormLabel,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import { tokens } from "../themes";
import { useState } from "react";
const Profile = () => {
  // obtain colors
  const theme = useTheme();
  const colors = tokens(theme.palette.color);
  // Gender Value
  const [genderValue, setGenderValue] = useState("Male");
  const [countryValue, setCountryValue] = useState("India");
  const [stateValue, setStateValue] = useState("Tamil Nadu");

  return (
    <Box>
      <Header title="Profile" subtitle="Provides your complete Information" />
      <Box padding="25px 70px" bgcolor={colors.primary[400]}>
        <Grid container columnSpacing={10} rowSpacing={3}>
          {/* First Name , Last Name & Email*/}
          <Grid size={4}>
            <Box display="flex" flexDirection="column">
              <FormLabel color="primary" required>
                First Name
              </FormLabel>
              <TextField id="outlined-size-normal" size="small" />
            </Box>
          </Grid>
          <Grid size={4}>
            <Box display="flex" flexDirection="column">
              <FormLabel color="primary" required>
                Last Name
              </FormLabel>
              <TextField id="outlined-size-normal" size="small" />
            </Box>
          </Grid>
          <Grid size={4}>
            <Box display="flex" flexDirection="column">
              <FormLabel color="primary" required>
                Email
              </FormLabel>
              <TextField id="outlined-size-normal" size="small" />
            </Box>
          </Grid>

          {/* Gender,Country & State */}
          <Grid size={4}>
            <Box display="flex" flexDirection="column">
              <FormLabel id="demo-controlled-radio-buttons-group">
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={genderValue}
                onChange={(e) => setGenderValue(e.target.value)}
                row
                label="Gender"
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box display="flex" flexDirection="column">
              <FormLabel color="primary" required>
                Country
              </FormLabel>
              <Select
                value={countryValue}
                onChange={(e) => setCountryValue(e.target.value)}
              >
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="USA">United States of America (USA)</MenuItem>
                <MenuItem value="UK">United Kindom (UK)</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid size={4}>
            <Box display="flex" flexDirection="column">
              <FormLabel color="primary" required>
                State
              </FormLabel>
              <Select
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
              >
                <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                <MenuItem value="Karnataka">Karnataka</MenuItem>
                <MenuItem value="Kerala">Kerala</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid size={3}>
            <Box display="flex" justifyContent="space-between">
              <Button variant="outlined" color="error">
                Reset
              </Button>
              <Button variant="contained" color="success">
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete this Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
