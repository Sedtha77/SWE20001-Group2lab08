import {React, useState, useEffect} from 'react';
import {useRouter} from "next/router"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ViewModule from '@material-ui/icons/ViewModule';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Dashboard from '@material-ui/icons/Dashboard';
import { Book, ExpandLess, ExpandMore, TrendingUpOutlined } from '@material-ui/icons';
import { Avatar, Collapse } from '@material-ui/core';
import HouseIcon from '@material-ui/icons/House';
import PeopleIcon from '@material-ui/icons/People';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SettingsIcon from '@material-ui/icons/Settings';
import StartRateIcon from '@material-ui/icons/StarRate';

import {useAuth} from '@/contexts/AuthContext';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
}));


const Navbar = props => {
 // const {currentUser, logout} = useAuth();
  const router = useRouter();
  
const [anchorEl, setAnchorEl] = useState(null);

const classes = useStyles();
const [open, setOpen] = useState(true);
const [openProperty, setOpenProperty] = useState(false);
const [openUser, setOpenUser] = useState(false);
const [appbarStyle, setAppbarStyle] = useState({backgroundColor: "#2a67b1"});
const theme = useTheme();

//Data
const [customerCount, setCustomerCount] = useState({});

const itemPaddingLeft = {paddingLeft : 72};

const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfile= ()=>{
    router.push('/profile');
    setAnchorEl(null);
  }

  async function handleLogout(){
    
    setAnchorEl(null);
    await logout();
    router.push('/login');
}

  const isMenuOpen = Boolean(anchorEl);
const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleProfile}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Log Out</MenuItem>
    </Menu>
  );

  const handleDrawerOpen = () => {
    setOpen(true);
    setAppbarStyle({paddingLeft: 250, backgroundColor : appbarStyle.backgroundColor});
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setAppbarStyle({paddingLeft: 10,backgroundColor : appbarStyle.backgroundColor});
  };


  
  if(/**currentUser && currentUser.userDetail**/true){
    return (
      <>
      <div  className={classes.root}> 
        {renderMenu}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
              
              <img src="/gotogre.png" className='mx-auto'  alt="logo" style={{width:80}}  />
          <Divider />
          <List>       
              <ListItem button key="Dashboard" onClick={()=> router.push("/")}>
                <ListItemIcon>{<Dashboard/>}</ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>

        <ListItem button key="Users" onClick={()=> router.push("/user")} >
                <ListItemIcon><PeopleIcon /></ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
  
             
  
        <ListItem button key="Products" onClick={()=> router.push("/product")}>
                <ListItemIcon><ViewModule/></ListItemIcon>
                <ListItemText primary="Products" />
              </ListItem>
  
            <ListItem button >
              <ListItemIcon>
                <BorderColorIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" onClick={()=> router.push("/order")} />
            </ListItem>  

      

        {//currentUser?.userDetail 
        true? 
        <ListItem  button  onClick={handleProfileMenuOpen}>
              <ListItemIcon>
              <img src={"/gotogre.png"} alt="profile" style={{width:50, borderRadius:"50%"}}/>
              </ListItemIcon>
              <ListItemText primary={"Keanthai"} />
            </ListItem> 
        : ""}
          </List>
          <Divider />
          
        </Drawer>
      </div>
      </>
        
      );
    }
    else return ("")
    
    
    
}
export default Navbar;
