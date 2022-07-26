//Page Loader stories

import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MantineProvider } from '@mantine/core';

import PageLoader from './PageLoader';

export default {
    title: 'Page Loader',
    component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

export const light: ComponentStory<typeof PageLoader> = () => (
    <MantineProvider theme={{ colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
        <PageLoader />
    </MantineProvider>
)

export const dark: ComponentStory<typeof PageLoader> = () => (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <PageLoader />
    </MantineProvider>
)