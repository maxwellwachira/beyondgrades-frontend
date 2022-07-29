//Page Loader stories

import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MantineProvider } from '@mantine/core';

import { GoogleButton, FacebookButton, DiscordButton, TwitterButton} from './SocialButtons';

export default {
    title: 'Social Buttons',
    component: GoogleButton,
} as ComponentMeta<typeof GoogleButton>;

export const google: ComponentStory<typeof GoogleButton> = () => (<GoogleButton>Google</GoogleButton>);

export const facebook: ComponentStory<typeof FacebookButton> = () => (<FacebookButton>Facebook</FacebookButton>)