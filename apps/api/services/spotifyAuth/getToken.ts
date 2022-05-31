import * as variables from "./variables";

const authCallback = () => {
  return `yes. client id: ${variables.client_id}`;
};

export { authCallback };
