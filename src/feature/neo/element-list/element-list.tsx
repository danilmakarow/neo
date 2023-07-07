import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ElementList() {
    return (
        <div>
            <List sx={{ width: '100%', minWidth: 300, bgcolor: 'inherit' }}>
                <ListItem alignItems="flex-start">

                    <ListItemText
                        primary="Name of asteroid"
                        secondary={
                            <React.Fragment>
                                <p>Full mame: </p>
                                <div className="flex flex--space-between">
                                    <div className="">
                                        <p>Speed: 500 y.e.</p>
                                        <p>Size: 500 y.e.</p>
                                    </div>

                                    <div className="">
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
