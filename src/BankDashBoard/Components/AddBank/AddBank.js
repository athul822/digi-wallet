import { Box, Typography } from '@mui/material'
import React from 'react'
import { DrawerHeader } from '../SideNavBar/SideNavBar'

const AddBank = () => {
  return (
    <div>
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
              ADD BANK
            </Box>

    </div>
  )
}

export default AddBank