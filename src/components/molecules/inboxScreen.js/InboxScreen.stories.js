import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { PureInboxScreen } from "./InboxScreen";

storiesOf("InboxScreen", module)
  .addDecorator(story => <div>{story()}</div>) // provider
  .add("default", () => <PureInboxScreen />)
  .add("error", () => <PureInboxScreen error="Something" />);
