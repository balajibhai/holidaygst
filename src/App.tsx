import React, { useCallback, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import GSTFreeFilter from "./GSTFreeFilter";
import BarcodeScanner from "./BarcodeScanner";
import { Itemtype } from "./ComponentTypes";
import ComparisonEngine from "./ComparisonEngine";

const App: React.FC = () => {
  const [isGstClicked, setIsGstClicked] = useState(false);
  const [scannedItem, setScannedItem] = useState<Itemtype>({
    category: "",
    title: "",
  });
  const [isScanned, setIsScanned] = useState(false);

  const getScannedCode = useCallback((value: string) => {
    const API_URL = `https://thingproxy.freeboard.io/fetch/https://api.upcitemdb.com/prod/trial/lookup?upc=${value}`;
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

  const onScan = useCallback(() => {
    setIsScanned(true);
  }, []);

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
        <BarcodeScanner getScannedCode={getScannedCode} onScan={onScan} />
      </Box>

      {isGstClicked && <GSTFreeFilter />}
      {isScanned && <ComparisonEngine scannedItem={scannedItem} />}
    </Container>
  );
};

export default App;
