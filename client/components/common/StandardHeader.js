import React from "react";
import Typography from "@mui/material/Typography";

const StandardHeader = ({ label, children }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ mb: 4, textAlign: "center", mx: "auto" }}
      >
        {label}
      </Typography>
      <div>{children}</div>
    </header>
  );
};

export default StandardHeader;
