import { Button, Container, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

export default function Root() {
  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "task", headerName: "Task", width: 200, editable: true },
    { field: "deadline", headerName: "Deadline", editable: true },
    { field: "status", headerName: "Status", editable: true },
    { field: "priority", headerName: "Priority", editable: true },
    { field: "assignee", headerName: "Assignee", editable: true },
  ];

  const rows = [
    {
      id: 1,
      task: "Task 1",
      deadline: "2021-10-10",
      status: "In Progress",
      priority: "High",
      assignee: "User 1",
    },
    {
      id: 2,
      task: "Task 2",
      deadline: "2021-10-10",
      status: "In Progress",
      priority: "High",
      assignee: "User 1",
    },
    {
      id: 3,
      task: "Task 3",
      deadline: "2021-10-10",
      status: "In Progress",
      priority: "High",
      assignee: "User 1",
    },
    {
      id: 4,
      task: "Task 4",
      deadline: "2021-10-10",
      status: "In Progress",
      priority: "High",
      assignee: "User 1",
    },
    {
      id: 5,
      task: "Task 5",
      deadline: "2021-10-10",
      status: "In Progress",
      priority: "High",
      assignee: "User 1",
    },
  ];

  return (
    <Container maxWidth="md">
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{ marginBottom: 4, marginTop: 2 }}
      />
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        New Task
      </Typography>
      <TextField
        label="Task"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Deadline"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Status"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Priority"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 1 }}
      />
      <TextField
        label="Assignee"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 1 }}
      />
      <Button variant="outlined" sx={{ marginBottom: 4 }}>
        Add task
      </Button>
    </Container>
  );
}
