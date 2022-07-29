import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Footer from './Footer';

export default {
    title: 'Footer',
    component: Footer,
} as ComponentMeta<typeof Footer>;

const data = [{
    title: 'About',
    links: [{label: 'Pricing', link: '/pricing'},
            {label: 'about', link: '/about'},
            {label: 'sign-in', link: '/sign-in'},
            {label: 'sign-in', link: '/sign-in'}             
        ]
},
{
    title: 'Projects',
    links: [{label: 'Pricing', link: '/pricing'},
            {label: 'about', link: '/about'},
            {label: 'sign-in', link: '/sign-in'},
            {label: 'sign-in', link: '/sign-in'}             
        ]
},
{
    title: 'Community',
    links: [{label: 'Pricing', link: '/pricing'},
            {label: 'about', link: '/about'},
            {label: 'sign-in', link: '/sign-in'},
            {label: 'sign-in', link: '/sign-in'}             
        ]
}
]

export const light: ComponentStory<typeof Footer> = () => (
    <MantineProvider theme={{ colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
        <Footer data={data}/>
    </MantineProvider>
)

export const dark: ComponentStory<typeof Footer> = () => (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <Footer data={data}/>
    </MantineProvider>
)