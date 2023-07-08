import {Avatar, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText} from "@mui/material";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import SocialDistanceOutlinedIcon from '@mui/icons-material/SocialDistanceOutlined';
import * as React from 'react';
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import {Statistics} from "../../../shared/interfaces/api.interfaces";
import descriptionData from '../../../redux/slices/descriptionSlice'
import {useEffect} from "react";
import {updateStatistics} from "../../../redux/serviceActions";

 export default function Description() {
     const statistics = useSelector((state: RootState) => state.description.statistics);

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
                       <ListItemText
                           primary={"Total number of NEO close to earth: " + statistics.amount}
                       />
                   </ListItem>

                   <ListItem className='flex flex_gap--10'>
                       <ReportProblemOutlinedIcon />
                       <ListItemText
                           primary={"Number of potentially hazardous NEOs: " + statistics.hazardous}
                       />
                   </ListItem>

                   <ListItem className='flex flex_gap--10'>
                       <SocialDistanceOutlinedIcon />
                       <ListItemText
                           primary={`The closest NEO is "${statistics.close?.name}". It is  ${parseFloat(statistics.big?.close_approach_data[0].miss_distance.kilometers.split('.')[0]).toLocaleString()} km far away!`}
                       />
                   </ListItem>

                   <ListItem className='flex flex_gap--10'>
                       <SpeedOutlinedIcon />
                       <ListItemText
                           primary={`The fastest NEO is "${statistics.fast?.name}". It flies at a speed of ${statistics.big?.close_approach_data[0].relative_velocity.kilometers_per_second.split('.')[0]} km/s!`}
                       />
                   </ListItem>

                   <ListItem className='flex flex_gap--10'>
                       <StraightenOutlinedIcon />
                       <ListItemText
                           primary={`The biggest NEO is "${statistics.big?.name}". Its size is up to ${statistics.big?.estimated_diameter.meters.estimated_diameter_max.toFixed(0)} meters!`}
                       />
                   </ListItem>
               </List>
           </main>
       </div>
    );
}
