import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StandardHeader from "../components/common/StandardHeader";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";

function UploadContent() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    caption: "",
    upload: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    if (e.target.type === "file") {
      setFormdata({
        ...formdata,
        upload: e.target.files[0],
      });
    } else {
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("video", formdata.upload);
      const response = await axios.post("/api/uploads", formData);

      const entryResponse = await axios.post("/api/video-uploads", {
        video: response.data.url,
        caption: formdata.caption,
      });

      navigate("/learn");
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#4C6D90",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="videouploader"
    >
      <StandardHeader
        label="Upload a Video with Caption"
        style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
      />

      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          style={{
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "white",
          }}
        >
          <Grid item xs={12}>
            <TextField
              label="Caption"
              name="caption"
              type="text"
              fullWidth
              value={formdata.caption}
              onChange={handleChange}
              style={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <video
                style={{ width: "100%", height: "300px" }}
                controls
                src={
                  formdata.upload ? URL.createObjectURL(formdata.upload) : null
                }
              />
            </div>
            <input
              style={{ display: "none" }}
              id="contained-button-file"
              type="file"
              accept="video/*"
              onChange={handleChange}
            />
            <label
              htmlFor="contained-button-file"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                component="span"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  margin: "16px 0",
                }}
              >
                Upload File
              </Button>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "black", color: "white" }}
              >
                Submit
              </Button>
            </label>
          </Grid>
        </Grid>
      </form>
      <Dialog open={loading} aria-labelledby="loading-dialog">
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UploadContent;
