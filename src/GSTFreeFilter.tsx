import React, { useState } from "react";
import {
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Subcategory } from "./types";
import data from "./gstitemsdata";

const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <span
        key={index}
        style={{
          backgroundColor: "yellow",
          fontWeight: "bold",
        }}
      >
        {part}
      </span>
    ) : (
      part
    )
  );
};

const GSTFreeFilter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter logic checks both `name` and `description`
  const filteredResults: Subcategory[] = data.gstHstFree
    .flatMap((item) => item.subcategories)
    .filter(
      (sub) =>
        sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Box>
      <TextField
        fullWidth
        label="Search GST Free Items"
        variant="outlined"
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 4 }}
      />
      <Grid container spacing={3}>
        {filteredResults.length > 0 ? (
          filteredResults.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#f5f5f5",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "#1976d2", fontWeight: "bold" }}
                  >
                    {highlightText(item.name, searchTerm)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {highlightText(item.description, searchTerm)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary" mt={2}>
            No items found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default GSTFreeFilter;
