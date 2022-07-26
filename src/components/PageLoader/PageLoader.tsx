import { Box, Loader } from '@mantine/core';

import { useStyles } from './PageLoader.styles';

const PageLoader = () => {
    const { classes } = useStyles();
    
    return (
        <Box className={classes.wrapper}>
            <Loader size="lg" variant="bars" />
        </Box>
    );
}

export default PageLoader;