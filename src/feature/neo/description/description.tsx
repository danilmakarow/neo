import {Avatar, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText} from "@mui/material";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import SocialDistanceOutlinedIcon from '@mui/icons-material/SocialDistanceOutlined';
import * as React from 'react';
import Typography from "@mui/material/Typography";

export default function Description() {
    const [dense, setDense] = React.useState(false);
    return (
       <div>
           <header className='flex flex--space-between'>
               <Typography variant="h5" sx={{ flexGrow: 1 }}>
                   Statistics for the day:
               </Typography>

               <Typography variant="h5" >
                   2023-07-07
               </Typography>
           </header>
           <main>
               <List>
                   <ListItem className='flex flex_gap--10'>
                       <FormatListNumberedOutlinedIcon />
                       <ListItemText
                           primary="Total number of NEO close to earth: 20"
                       />
                   </ListItem>

                   <ListItem className='flex flex_gap--10'>
                       <ReportProblemOutlinedIcon />
                       <ListItemText
                           primary="Number of potentially hazardous NEOs per day: 10"
                       />
                   </ListItem>

                   <ListItem className='flex flex_gap--10'>
                       <StraightenOutlinedIcon />
                       <ListItemText
                           primary="Biggest NEO for day: 10"
                       />
                   </ListItem>

                   <ListItem className='flex flex_gap--10'>
                       <SocialDistanceOutlinedIcon />
                       <ListItemText
                           primary="Closest NEO: 10"
                       />
                   </ListItem>

                   <ListItem className='flex flex_gap--10'>
                       <SpeedOutlinedIcon />
                       <ListItemText
                           primary="Fastest NEO: 10"
                       />
                   </ListItem>
               </List>
           </main>
       </div>
    );
}
