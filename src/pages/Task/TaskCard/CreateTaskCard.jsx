import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Modal from "@mui/material/Modal";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
const tags = [
  "Angular",
  "ReactJs",
  "VueJs",
  "Spring boot",
  "JavaScript",
  "TypeScript",
  "Python",
  "NodeJS",
];
export default function CreateTaskCard({ handleClose, open }) {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tags: [],
    deadline: new Date(),
  });
  const [selectedTags, setSelectedTags] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: [value] });
  };
  const handleTagsChange = (event, value) => {
    setSelectedTags(value);
  };
  const handleDeaDlineChange = (date) => {
    setFormData({
      ...formData,
      deadline: date,
    });
  };
  const formateDate = (input) => {
    let {
      $y: year,
      $M: month,
      $D: day,
      $H: hours,
      $m: minute,
      $s: second,
      $ms: millisecond,
    } = input;
    const date = new Date(year, month, day, hours, minute, second, millisecond);
    const formateDate = date.toISOString();
    return formateDate;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { deadline } = formData;
    formData.deadline = formateDate(deadline);
    formData.tags = selectedTags;
    console.log("formData", formData, "deadline", formData.deadline);
    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  fullWidth
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Image"
                  fullWidth
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  id="multiple-limit-tags"
                  options={tags}
                  onChange={handleTagsChange}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField label="Tags" fullWidth {...params} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    onChange={handleDeaDlineChange}
                    className="w-full"
                    label="Deadline"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="customeButton"
                  type="submit"
                  fullWidth
                  sx={{ padding: ".9rem" }}
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
