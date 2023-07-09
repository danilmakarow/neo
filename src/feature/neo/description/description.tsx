import {Button, CircularProgress, List, ListItem, Slider} from "@mui/material";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import SocialDistanceOutlinedIcon from '@mui/icons-material/SocialDistanceOutlined';
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import {updateInterval, skipDay} from "../neo-service";


 export default function Description() {
     // TODO weird type error in RootState when building app, check
     // @ts-ignore
     const statistics = useSelector((state: RootState) => state.description.statistics);

     const onSliderChange = (_, value) => {
         updateInterval(value);
     };

     const onButton = () => {
         skipDay()
     }

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
               <div className="flex flex--space-between flex_gap--50">
                   <div className="width--max">
                       <Button
                           variant="outlined"
                           endIcon={<SendIcon />}
                           className="width--max"
                           onClick={onButton}
                       >Skip to next day</Button>
                   </div>
                   <div className="width--100">
                       <Typography id="input-slider" gutterBottom>
                           Change NEO Interval (seconds)
                       </Typography>
                       <Slider
                           size="small"
                           defaultValue={5}
                           aria-label="Small"
                           valueLabelDisplay="auto"
                           min={1}
                           max={10}
                           onChange={onSliderChange}
                       />
                   </div>
               </div>
           </main>
       </div>
    );
}
