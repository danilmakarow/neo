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

    // React.useEffect(() => {
    //     dispatch(fetchNeo('2022-10-04'));
    // }, [dispatch]);
    //
    // React.useEffect(() => {
    //     console.log(neoData);
    // }, [neoData]);

    return (
        <div>
            <header className='flex flex--space-between'>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    Near Orbital Objects
                </Typography>
            </header>
            <List sx={{ width: '100%', minWidth: 300, bgcolor: 'inherit' }}>
                <ListItem >
                    <div className='width--100'>
                        <header>
                            <Typography variant="h6">
                                Name
                            </Typography>
                            <Typography component="div" variant="body2" >
                                Full name:
                            </Typography>
                        </header>
                        <span className="flex flex--space-between">
                            <div>
                                <Typography variant="body2">
                                    Speed: 500 y.e.
                                </Typography>
                                <Typography variant="body2">
                                    Size: 500 y.e.
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2">
                                    Distance to earth: 500
                                </Typography>
                                <Typography variant="body2">
                                    Potentially hazardous:
                                </Typography>
                            </div>
                        </span>
                    </div>
                </ListItem>

                <Divider variant="fullWidth" component="li" />
            </List>
        </div>
    );
}
