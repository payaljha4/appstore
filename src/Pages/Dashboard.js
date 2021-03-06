
import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Home, Category, Phonelink, Settings, PowerSettingsNew, AddLocation } from "@material-ui/icons"
import  HomeFragment from '../Fragments/HomeFragment';
import ManageCategoryFragment from '../Fragments/ManageCategoryFragment';
import ManageAppMaster from '../Component/AppMaster/ManageAppMaster';
import OSMaster from '../Component/OSMaster/OsForm';
import LocationMaster from '../Component/LocationMaster/AddLocationMaster';
import SubCategoryMaster from '../Component/SubCategoryMaster/SubCategoryForm';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [fragment, setfragment] = useState('Home');
  const loadFragment=()=>{


    switch(fragment){
        case "Home":
        return<HomeFragment />
        case "Manage_Category":
        return<ManageCategoryFragment />
        case "Manage_App_Master":
        return<ManageAppMaster />
        case "Os_Master":
        return<OSMaster />
        case "Location_Master":
        return<LocationMaster />
        case "Sub_Category_Master":
        return<SubCategoryMaster />
       
        case "Settings":
        return<LanguageMaster />
        default:
            break;

    }
  }



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
           
              <ListItem button  onClick={(e)=>setfragment("Home")}>
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            
          </List>
          <List>
           
              <ListItem button  onClick={(e)=>setfragment("Manage_Category")}>
                <ListItemIcon><Category/></ListItemIcon>
                <ListItemText primary="Category Master" />
              </ListItem>
            
          </List>
          <List>
           
              <ListItem button  onClick={(e)=>setfragment("Os_Master")}>
                <ListItemIcon><Phonelink /></ListItemIcon>
                <ListItemText primary="OS Master" />
              </ListItem>
            
          </List>
          <List>
           
              <ListItem button  onClick={(e)=>setfragment("Sub_Category_Master")}>
                <ListItemIcon><Category /></ListItemIcon>
                <ListItemText primary="Sub Category Master" />
              </ListItem>
            
          </List>
          <List>
           
              <ListItem button  onClick={(e)=>setfragment("Location_Master")}>
                <ListItemIcon><AddLocation /></ListItemIcon>
                <ListItemText primary="Location Master" />
              </ListItem>
            
          </List>
          <List>
           
           <ListItem button  onClick={(e)=>setfragment("Manage_App_Master")}>
             <ListItemIcon><Phonelink /></ListItemIcon>
             <ListItemText primary="App Master" />
           </ListItem>
         
       </List>
       <List>
           
           <ListItem button  onClick={(e)=>setfragment("Language_Master")}>
             <ListItemIcon><Category /></ListItemIcon>
             <ListItemText primary="Language Master" />
           </ListItem>
         
       </List>
          <Divider />
          <List>
           
           <ListItem button  onClick={(e)=>setfragment("Home")}>
             <ListItemIcon><Settings /></ListItemIcon>
             <ListItemText primary="Settings" />
           </ListItem>
         
       </List>
       <List>
           
           <ListItem button  onClick={(e)=>setfragment("Home")}>
             <ListItemIcon><PowerSettingsNew /></ListItemIcon>
             <ListItemText primary="Logout" />
           </ListItem>
         
       </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        
        {loadFragment()}
        <Typography paragraph>
          
        </Typography>
        <Typography paragraph>
                  </Typography>
      </main>
      
      
    </div>
  );
}


