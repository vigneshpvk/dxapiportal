import Header from "../components/Header/Header";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { tokens } from "../themes";
import { useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { mockDataTeam } from "../data/mockData";
import axios from "axios";
import "./pages.css";
import { pegaapi, getAccessToken } from "../connectivity/api";
import Appcontext from "../data/appcontext";
import RefreshIcon from "@mui/icons-material/Refresh";

const Mywork = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState("mycases");
  const [worklist, setWorkList] = useState([]);

  // get sidebarcollapsed value for context api
  const { isSidebarCollapsed } = useContext(Appcontext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // trigger api

  const getworklist = async () => {
    const url = "/data_views/D_pyMyWorkList";
    // const url = "/casetypes";
    const payload = JSON.stringify({
      dataViewParameters: {},
      includeTotalCount: true,
      paging: {
        pageNumber: 1,
        pageSize: 41,
      },
      query: {
        select: [
          {
            field: "pxRefObjectInsName",
          },
          {
            field: "pxTaskLabel",
          },
          {
            field: "pyLabel",
          },
          {
            field: "pyAssignmentStatus",
          },
          {
            field: "pxDeadlineTime",
          },
          {
            field: "pxUrgencyAssign",
          },
          {
            field: "pxRefObjectKey",
          },
        ],
      },
    });

    try {
      const response = await pegaapi.post(url, payload);
      // console.log(response.data);
      setWorkList(response.data.data);
      return response.data;
    } catch (error) {
      console.error("there is error while calling worklist api");
      return null;
    }
  };

  //call api when page loads
  useEffect(() => {
    getworklist();
  }, []);

  // Defining columns

  const columns = [
    {
      field: "id",
      headerName: "Case ID",
      flex: 0.4,
      headerAlign: "center",
    },
    { field: "task", headerName: "Task", flex: 0.8, headerAlign: "center" },
    {
      field: "casetype",
      headerName: "Case Type",
      flex: 0.7,
      headerAlign: "center",
    },

    {
      field: "status",
      headerName: "Case Status",
      flex: 0.8,
      headerAlign: "center",
    },
    {
      field: "duedate",
      headerName: "Due Date",
      flex: 0.5,
      headerAlign: "center",
    },
    {
      field: "caseurgency",
      headerName: "Urgency",
      flex: 0.4,
      headerAlign: "center",
    },
    {
      field: "action",
      headerName: "Action",
      flex: 0.5,
      headerAlign: "center",
      renderCell: () => {
        return (
          <strong>
            <Button
              variant="contained"
              color="success"
              endIcon={<PlayArrowIcon />}
            >
              Open
            </Button>
          </strong>
        );
      },
    },
  ];

  //defining rows
  const rows = [];
  // iterate mockData
  worklist.map((value, index) => {
    const temp = {
      id: value.pxRefObjectInsName,
      task: value.pxTaskLabel,
      casetype: value.pyLabel,
      status: value.pyAssignmentStatus,
      duedate: value.pxDeadlineTime,
      caseurgency: value.pxUrgencyAssign,
    };
    rows.push(temp);
  });

  return (
    <Box display="flex" flexDirection="column">
      <Header title="My work" subtitle="List of Pending works" />
      <Box
        display="flex"
        flexDirection="row"
        sx={{
          mt: "10px",
          backgroundColor: colors.primary[400],
        }}
      >
        <Box flexGrow={0.99}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="mycases" label="My cases" />
            <Tab value="myapproval" label="My approval" />
          </Tabs>
        </Box>
        <Box>
          <IconButton size="large">
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>

      {/* My cases UI */}
      <Box
        height="70vh"
        mt={2}
        width={isSidebarCollapsed ? "89vw" : "77vw"}
        sx={{
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.purple[400],
          },
          "& .MuiDataGrid-cell ": {
            fontSize: "14px",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontSize: "14px",
            fontWeight: "bolder",
          },
          "& .MuiButton-sizeSmall": {
            color: colors.blueAccent[400],
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>

      {/* My Approval UI */}
      <Box
        height="70vh"
        mt={2}
        width={isSidebarCollapsed ? "89vw" : "77vw"}
        sx={{
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.purple[400],
          },
          "& .MuiDataGrid-cell ": {
            fontSize: "14px",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontSize: "14px",
            fontWeight: "bolder",
          },
          "& .MuiButton-sizeSmall": {
            color: colors.blueAccent[400],
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default Mywork;
