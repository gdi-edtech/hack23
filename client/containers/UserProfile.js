import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

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

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <Paper
      elevation={3}
      className="mt-6 bg-white min-h-[80vh] rounded-md shadow-md p-4"
    >
      <StandardHeader label={"Profile"} />
      <Grid
        container
        spacing={3}
        className="border p-4 mt-4 py-8 rounded-md items-center justify-center"
      >
        <Grid item xs={12} md={3}>
          <UserAvatar name={"user"} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <ProfileInput
                label="Username"
                name="userName"
                type="text"
                field={"userName"}
                username={formData.userName}
                updateFormData={updateFormData}
                onChange={handleChange}
                formData={formData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProfileInput
                formData={formData}
                updateFormData={updateFormData}
                label="Email"
                field={"email"}
                name="email"
                type="text"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserProfile;
