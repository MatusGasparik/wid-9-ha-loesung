import { Box } from "@mui/material";
import Header from "./Header";
import { VegaLite } from "react-vega";
import spec from "./global-health.json";

export function App() {
  return (
    <>
      <Header />
      <Box sx={{ padding: 2 }}>
        <VegaLite spec={spec} />
      </Box>
    </>
  );
}

export default App;
