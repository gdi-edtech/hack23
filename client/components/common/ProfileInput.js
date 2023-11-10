import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";


const ProfileInput = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  field,
  formData,
  username,
  updateFormData,
}) => {
  const OpenProfileEditModal = () => {
  
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          fontSize: "0.875rem",
          fontWeight: "500",
          color: "#374151",
          marginBottom: 4,
        }}
      >
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <TextField
          name={name}
          type={type}
          value={formData[field]}
          onChange={onChange}
          disabled
          variant="outlined"
          fullWidth
          placeholder={placeholder}
          InputProps={{
            style: {
              backgroundColor: "#D9D9D94D",
            },
            endAdornment: (
              <IconButton edge="end" onClick={OpenProfileEditModal}>
                <EditIcon />
              </IconButton>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default ProfileInput;
