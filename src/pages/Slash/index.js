import React from 'react';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { Image } from 'react-native';
export default () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../../assets/slash.png')} />
      </Layout>
    </ApplicationProvider>
  </React.Fragment>
);
