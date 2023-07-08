import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import {fetchNeo} from "../../../redux/slices/apiSlice";

export default function ElementList() {
    const dispatch = useDispatch();
    const neoData = useSelector((state) => state.neo.data);

    React.useEffect(() => {
        dispatch(fetchNeo('2022-10-21'));
    }, [dispatch]);

    React.useEffect(() => {
        console.log(neoData);
    }, [neoData]);

    return (
        <div>
            <header className='flex flex--space-between'>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    Near Orbital Objects
                </Typography>
            </header>
            <List sx={{ width: '100%', minWidth: 300, bgcolor: 'inherit' }}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary="Name of asteroid"
                        secondary={
                            <React.Fragment>
                                <p>Full name: </p>
                                <div className="flex flex--space-between">
                                    <div>
                                        <p>Speed: 500 y.e.</p>
                                        <p>Size: 500 y.e.</p>
                                    </div>
                                    <div>
                                        <p>Distance to earth: 500</p>
                                        <p>Potentially hazardous:</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                    />
                </ListItem>

                <Divider variant="fullWidth" component="li" />
            </List>
        </div>
    );
}
