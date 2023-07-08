import {Avatar, CircularProgress, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText} from "@mui/material";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import SocialDistanceOutlinedIcon from '@mui/icons-material/SocialDistanceOutlined';
import * as React from 'react';
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";


 export default function Description() {
     const statistics = useSelector((state: RootState) => state.description.statistics);

     if (!statistics.big) {
         return <CircularProgress />;
     }

    return (
       <div>
           <header className='flex flex--space-between'>
               <Typography variant="h5" sx={{ flexGrow: 1 }}>
                   Statistics for the day:
               </Typography>

               <Typography variant="h5" >
                   {statistics.date}
               </Typography>
           </header>
           <main>
               <List>
                   <ListItem className='flex flex_gap--10'>
                       <FormatListNumberedOutlinedIcon />
                       <Typography variant="body1">
                           Total number of NEO close to earth:
                           <Typography component="span" fontWeight="fontWeightBold">
                               {' ' + statistics.amount}
                           </Typography>
                       </Typography>
                   </ListItem>

                   <ListItem className='flex flex_gap--10'>
                       <ReportProblemOutlinedIcon />
                       <Typography variant="body1">
                           Number of potentially hazardous NEOs:
                           <Typography component="span" fontWeight="fontWeightBold">
                               {' ' + statistics.hazardous}
                           </Typography>
                       </Typography>
                   </ListItem>

                   <ListItem className='flex flex_gap--10'>
                       <SocialDistanceOutlinedIcon />
                       <Typography variant="body1">
                           The closest NEO is "{statistics.close?.name}". It is
                           <Typography component="span" fontWeight="fontWeightBold">
                               {' ' + parseFloat(statistics.big?.close_approach_data[0].miss_distance.kilometers.split('.')[0]).toLocaleString()}
                           </Typography>
                            km far away!
                       </Typography>
                   </ListItem>

                   <ListItem className='flex flex_gap--10'>
                       <SpeedOutlinedIcon />
                       <Typography variant="body1">
                           The fastest NEO is "{statistics.fast?.name}". It flies at a speed of
                           <Typography component="span" fontWeight="fontWeightBold">
                               {' ' + statistics.big?.close_approach_data[0].relative_velocity.kilometers_per_second.split('.')[0]} km/s
                           </Typography>
                           !
                       </Typography>
                   </ListItem>

                   <ListItem className='flex flex_gap--10'>
                       <StraightenOutlinedIcon />
                       <Typography variant="body1">
                           The biggest NEO is "{statistics.big?.name}". Its size is up to
                           <Typography component="span" fontWeight="fontWeightBold">
                               {' ' + statistics.big?.estimated_diameter.meters.estimated_diameter_max.toFixed(0)} meters
                           </Typography>
                           !
                       </Typography>
                   </ListItem>
               </List>
           </main>
       </div>
    );
}
