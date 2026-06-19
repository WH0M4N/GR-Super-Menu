import { Box, Button } from '@mui/material';
import React from 'react'

const StickyMenu = () => {
    const categories = ['اسموتی ها', 'ماکتیل ها', 'موز', 'ممد', 'دسر', 'قهوه']
  
    return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        overflowX: "auto",
        gap: 2,
        py: 2,
      }}
    >
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() =>
            sectionRefs.current[category.id]?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          {category.title}
        </Button>
      ))}
    </Box>
  );
}

export default StickyMenu