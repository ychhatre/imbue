// import React from "react";
// import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles} from "@material-ui/core"; 
// import { Menu } from "@material-ui/icons";
// import Drawer from '@material-ui/core/Drawer';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   }
// }))

// export default function Nav() {
//   const classes = useStyles();
//   return (
//     <div>
//     <AppBar
//     position="fixed"
//     className={clsx(classes.appBar, {
//       [classes.appBarShift]: open,
//     })}
//   >
//     <Toolbar>
//       <IconButton
//         color="inherit"
//         aria-label="open drawer"
//         onClick={handleDrawerOpen}
//         edge="start"
//         className={clsx(classes.menuButton, open && classes.hide)}
//       >
//         <MenuIcon />
//       </IconButton>
//       <Typography variant="h6" noWrap>
//         Persistent drawer
//       </Typography>
//     </Toolbar>
//   </AppBar>
//   <Drawer
//     className={classes.drawer}
//     variant="persistent"
//     anchor="left"
//     open={open}
//     classes={{
//       paper: classes.drawerPaper,
//     }}
//     >
//     <div className={classes.drawerHeader}>
//       <IconButton onClick={handleDrawerClose}>
//         {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//       </IconButton>
//     </div>
//     <Divider />
//     <List>
//       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//         <ListItem button key={text}>
//           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItem>
//       ))}
//     </List>
//     <Divider />
//     <List>
//       {['All mail', 'Trash', 'Spam'].map((text, index) => (
//         <ListItem button key={text}>
//           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItem>
//       ))}
//     </List>
//   </Drawer>
//   </div>
//   );
// }


