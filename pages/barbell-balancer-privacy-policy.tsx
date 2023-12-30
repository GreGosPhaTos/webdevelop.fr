import React, { ReactElement } from 'react';
import { MessageDescriptor, useIntl } from 'react-intl';
import { useHTMLSanitizer } from '../hooks/useHTMLSanitizer';
import { MainContainer } from '../components/main-container';

const messages: { [key: string]: MessageDescriptor } = {
  bbPrivatePolicy: {
    id: 'bb-private-policy',
    defaultMessage: `
      <h1>Privacy Policy</h1>

      <h4>Effective Date: December 29th 2023</h4>

      <p>We operates the Barbell Balancer mobile application (the "App"). This Privacy Policy describes how we collect, use, and share information in connection with your use of the App.</p>

      <p>Information Collection and Use AdMob
        The App uses Google AdMob for serving advertisements. AdMob may collect and process information about your device, including:</p>

      <h4>Advertising Identifiers:</h4>

      <p>AdMob may collect your device's Advertising Identifier (IDFA on iOS, GAID on Android) to provide personalized ads.</p>

      <h4>IP Address:</h4>
      <p>AdMob may collect your device's IP address to detect and prevent fraud, as well as to ensure ad quality and security.</p>

      <h4>Usage Data:</h4>

      <p>AdMob may collect information about how you interact with ads, such as ad clicks and views.</p>

      <p>Please review Google's Privacy & Terms for more information about how Google handles data.</p>

      <h4>Opting Out</h4>
      <p>You can opt out of personalized ads by adjusting your device settings:</p>

      <p>On iOS: Go to Settings > Privacy > Advertising, and toggle on "Limit Ad Tracking."</p>
      <p>On Android: Go to Settings > Google > Ads, and enable "Opt out of Ads Personalization."</p>

      <h4>Contact Us</h4>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@webdevelop.fr?subject=Privacy%20Policy%20Question">info@webdevelop.fr</a>.</p>

      <h4>Changes to This Privacy Policy</h4>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
    `
  }
};

function BarbellBalancerPrivatePolicyContainer(): ReactElement {
  const intl = useIntl();
  const { sanitizeHTML } = useHTMLSanitizer();

  return (
    <div
      className="primary_light flex_direction_column regular_text_container"
      dangerouslySetInnerHTML={{
        __html: sanitizeHTML(intl.formatMessage(messages.bbPrivatePolicy))
      }}
    />
  );
}

export default function BarbellBalancerPrivatePolicy(): ReactElement {
  return (
    <MainContainer locale="en">
      <BarbellBalancerPrivatePolicyContainer />
    </MainContainer>
  );
}
