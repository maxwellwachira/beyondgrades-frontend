import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Register from './Register';

export default {
    title: 'Register',
    component: Register,
} as ComponentMeta<typeof Register>;

export const light: ComponentStory<typeof Register> = () => (
    <MantineProvider theme={{ colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
        <Register />
    </MantineProvider>
)

export const dark: ComponentStory<typeof Register> = () => (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <Register />
    </MantineProvider>
)