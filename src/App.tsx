import React, { useCallback, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import GSTFreeFilter from "./GSTFreeFilter";
import BarcodeScanner, { buttonStyle } from "./BarcodeScanner";
import { Itemtype } from "./ComponentTypes";
import ComparisonEngine from "./ComparisonEngine";

const App: React.FC = () => {
  const [isGstClicked, setIsGstClicked] = useState(false);
  const [scannedItem, setScannedItem] = useState<Itemtype>({
    category: "",
    title: "",
  });
  const [isScanClick, setIsScanClick] = useState(false);

  const getScannedCode = useCallback((value: string) => {
    // Use the Netlify Function URL
    const API_URL = `/.netlify/functions/upc-lookup?upc=${value}`;

    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setScannedItem({
            category: data.items[0].category,
            title: data.items[0].title,
          });
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth="md">
      <Box display="flex" justifyContent="center" gap={2} my={4}>
        {!isScanClick && (
          <button onClick={() => setIsScanClick(true)} style={buttonStyle}>
            Scan now
          </button>
        )}
      </Box>
      {isScanClick && <BarcodeScanner getScannedCode={getScannedCode} />}
      {(scannedItem.category || scannedItem.title) && (
        <ComparisonEngine scannedItem={scannedItem} />
      )}
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
