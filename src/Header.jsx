import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Header() {
  return (
    <Box flexGrow={1}>
      <CssBaseline />
      <AppBar elevation={0} position="static" sx={{ bgcolor: grey[200] }}>
        <Toolbar>
          <Box sx={{ width: 40, height: 30 }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://raw.githubusercontent.com/vega/logos/master/assets/VL_Color%40128.png"
              alt="vega-lite logo"
            />
          </Box>
          <Typography
            variant="h5"
            color="black"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 2 }}
          >
            Vega/Vega-Lite
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
