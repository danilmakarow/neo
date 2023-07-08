import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {RootState} from "../../../redux/store";
import {CircularProgress} from "@mui/material";

export default function ElementList() {
    const neos = useSelector((state: RootState) => state.neoDisplay.neos);
    // console.log('component', neos)

    if (!neos[0]) {
        return <CircularProgress />;
    }

    return (
        <div>
            <header className='flex flex--space-between'>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    Near Orbital Objects
                </Typography>
            </header>
            <List sx={{ width: '100%', minWidth: 300, bgcolor: 'inherit' }}>
                {
                    neos.map(
                        (neo, index) =>
                            <div key={neo.index}>
                                <ListItem >
                                    <div className='width--100'>
                                        <header>
                                            <Typography variant="h6">
                                                {neo.name}
                                            </Typography>
                                        </header>
                                        <span className="flex flex--space-between">
                                            <div>
                                                <Typography variant="body2">
                                                    Speed: {neo.close_approach_data[0].relative_velocity.kilometers_per_second.split('.')[0]} km/s
                                                </Typography>
                                                <Typography variant="body2">
                                                    Size: {neo.estimated_diameter.meters.estimated_diameter_max.toFixed(0)} meters
                                                </Typography>
                                            </div>
                                            <div>
                                                <Typography variant="body2" >
                                                    Distance to earth: {parseFloat(neo.close_approach_data[0].miss_distance.kilometers.split('.')[0]).toLocaleString()} km
                                                </Typography>
                                                {
                                                    neo.is_potentially_hazardous_asteroid ?
                                                        <Typography variant="body2">
                                                            Potentially hazardous
                                                        </Typography>
                                                        :
                                                        ''
                                                }

                                            </div>
                                        </span>
                                    </div>
                                </ListItem>
                            </div>
                    )
                }
                
            </List>
        </div>
    );
}
