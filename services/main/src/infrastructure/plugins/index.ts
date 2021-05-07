import { ServerRegisterPluginObject } from "@hapi/hapi";
import { loggerPlugin } from "./logger";
import HapiInert from '@hapi/inert';
import HapiVision from '@hapi/vision';
import { docsPlugin } from "./docs";

export const plugins: ServerRegisterPluginObject<any>[] = [
  loggerPlugin,
  {
    plugin: HapiInert,
  },
  {
    plugin: HapiVision,
  },
  docsPlugin,
];
