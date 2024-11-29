import React, { useState } from "react";
import { Container, Box, Button } from "@mui/material";
import GSTFreeFilter from "./GSTFreeFilter";

const App: React.FC = () => {
  const [isGstClicked, setIsGstClicked] = useState(false);

  return (
    <Container maxWidth="md">
      <Box display="flex" justifyContent="center" gap={2} my={4}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setIsGstClicked(!isGstClicked)}
        >
          Holiday GST Free
        </Button>
      </Box>

      {isGstClicked && <GSTFreeFilter />}
    </Container>
  );
};

export default App;
