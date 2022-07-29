import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Login from './Login';

export default {
    title: 'Login',
    component: Login,
} as ComponentMeta<typeof Login>;

export const light: ComponentStory<typeof Login> = () => (
    <MantineProvider theme={{ colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
        <Login />
    </MantineProvider>
)

export const dark: ComponentStory<typeof Login> = () => (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <Login />
    </MantineProvider>
)