import "./base.css";
import { Typography } from "@ornikar/kitt";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Typography.div base="body">
      <Story />
    </Typography.div>
  ),
];
