import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
export default function Filter({ handleSearch }) {
  const [searchTitle, setSearchTitle] = useState("");
  const { t } = useTranslation();
  return (
    <Box
      component="section"
      sx={{
        p: 2,
        border: "1px solid #c2c0c0",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f3f3f3",
      }}
    >
      <TextField
        id="outlined-basic"
        label={t("job_title")}
        variant="outlined"
        sx={{ width: "70%" }}
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <div>
        <Button
          variant="outlined"
          onClick={() => {
            handleSearch({ itemQuery: "" });
            setSearchTitle("");
          }}
          sx={{ marginInlineEnd: "10px" }}
        >
          {t("reset")}
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            handleSearch({ itemQuery: searchTitle });
          }}
        >
          {t("search")}
        </Button>
      </div>
    </Box>
  );
}
