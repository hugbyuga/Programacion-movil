import React from 'react';
import { View } from 'react-native';
import StyledText from '../../Atoms/index-styledText/StyledText.jsx';
import { footerStyles } from '../../Atoms/index-Styles/Styles.js';

const Footer = () => {
  return (
      <View style={[footerStyles.container, { flexGrow: 1, justifyContent: 'center', alignItems: 'center' }]}>
          <StyledText fontWeight='bold' style={footerStyles.text}>Redesigned by Jesus Julian</StyledText>
      </View>
  );
};
  

export default Footer;
