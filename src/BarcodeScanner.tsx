import { useState, CSSProperties, useCallback } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

type BarcodeScannerProps = {
  getScannedCode: (value1: string) => void;
  onScan: () => void;
};

const BarcodeScanner = (props: BarcodeScannerProps) => {
  const { getScannedCode, onScan } = props;
  const [data, setData] = useState<string>("Not Found");
  const [scanned, setScanned] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleScan = useCallback(
    (err: any, result: any) => {
      if (result && !scanned) {
        setData(result.text);
        setScanned(true);
        setError(null); // Clear any previous errors
        getScannedCode(result.text);
        onScan();
      }
      if (err) {
        console.error("Scanning Error:", err);
        setError("Error scanning barcode. Please try again.");
      }
    },
    [getScannedCode, scanned, onScan]
  );

  const handleReset = useCallback(() => {
    setData("Not Found");
    setScanned(false);
    setError(null);
  }, []);

  // Define styles with explicit typing
  const containerStyle: CSSProperties = {
    textAlign: "center",
    padding: "20px",
  };

  const resultContainerStyle: CSSProperties = {
    marginTop: "20px",
  };

  const buttonStyle: CSSProperties = {
    padding: "10px 20px",
    fontSize: "16px",
    marginTop: "10px",
    cursor: "pointer",
  };

  const errorStyle: CSSProperties = {
    color: "red",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1>Scan to know the tax exempt items</h1>
      {!scanned ? (
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={handleScan}
        />
      ) : (
        <div style={resultContainerStyle}>
          <p>
            <strong>Scanned Data:</strong> {data}
          </p>
          <button onClick={handleReset} style={buttonStyle}>
            Scan Again
          </button>
        </div>
      )}
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
};

export default BarcodeScanner;
