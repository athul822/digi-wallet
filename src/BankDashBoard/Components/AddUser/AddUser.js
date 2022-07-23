import { Box } from '@mui/system'
import React from 'react'
import { DrawerHeader } from '../SideNavBar/SideNavBar'

const AddUser = () => {
  return (
    <div>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
               ADD USER
            </Box>

        </div>
  )
}

export default AddUser