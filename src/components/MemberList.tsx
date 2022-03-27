import Member, { MemberType } from './Member';
import { Box, List, ListItem, ListItemIcon, ListItemText }  from '@material-ui/core';
import { ListItemButton } from '@mui/material';
import { AccountCircle } from '@material-ui/icons';
import { useState } from 'react';




function MemberList() {
  const [selected, setSelected] = useState<MemberType[]>([]);

  const handleSelection = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: MemberType,
  ) => {
    setSelected([index, ...selected]);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
          <ListItemText primary="Participants" />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary={"rosa"} />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>

  );

}


export default MemberList;