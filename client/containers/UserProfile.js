import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";

import StandardHeader from "../components/common/StandardHeader";
import UserAvatar from "../components/common/UserAvatar";
import ProfileInput from "../components/common/ProfileInput";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    userName: "user",
    email: "user",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  return (
    <Paper
      elevation={3}
      style={{ padding: 16, marginTop: 24, backgroundColor: "white" }}
    >
      <StandardHeader label={"Profile"} />
      <Grid
        container
        spacing={3}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{
          border: "1px solid #ccc",
          padding: 16,
          marginTop: 16,
          borderRadius: 8,
        }}
      >
        <Grid item xs={12} md={3}>
          <UserAvatar name={"user"} />
        </Grid>
        <Grid
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={20}
          item
          xs={12}
          md={9}
        >
          
            <Grid item xs={12} md={6} marginVertical={20}>
              <TextField
                label="Username"
                name="userName"
                type="text"
                fullWidth
                value={formData.userName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                name="email"
                type="text"
                fullWidth
                value={formData.email}
                onChange={handleChange}
              />
            
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserProfile;
