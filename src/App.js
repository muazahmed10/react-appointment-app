import React, { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppointmentTable } from './components/Table';
import Typography from '@mui/material/Typography';
class App extends Component {
constructor(props)
{
  super(props)
  this.state = {
    value: "1"
  }
}
// control tab
 handleChange = (event, value) => {
  if(value)
  {
    this.setState({ value: value })
  }
}
  render() {
    const { value } = this.state;
    return (
      <div>
         <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={this.handleChange}  variant="scrollable" scrollButtons="auto">
                    <Tab label="Appointment Form" value="1" />
                    <Tab label="Appointments List" value="2" />
                    <Tab label="About Me" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">Appointment Form goes here</TabPanel>
                <TabPanel value="2">
                  <div>
                  <Typography variant="h4" gutterBottom component="div">
                    Appointment(s) List
                </Typography>
                    <AppointmentTable /> 
                  </div>
                  </TabPanel>
                <TabPanel value="3">Developed by: Muaz Ahmed; 
                <br>
                </br>
                Developed For: SofaX;
                <br>
                </br>
                Developed Using: 
                    <Stack direction="row" spacing={1}>
                      <Chip label="React" variant="outlined" />
                      <Chip label="ExpressJS" variant="outlined" />
                    </Stack>
                </TabPanel>
              </TabContext>
            </Box>
          </Container>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
