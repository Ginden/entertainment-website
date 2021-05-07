import { ServerRegisterPluginObject } from "@hapi/hapi";
import HapiSwagger from 'hapi-swagger';

export const docsPlugin: ServerRegisterPluginObject<HapiSwagger.RegisterOptions> = {
  plugin: HapiSwagger,
  options: {
    info: {
      title: 'Funny Images API',
      contact: {
        license: {
          name: 'MIT',
          url: 'https://github.com/Ginden/entertainment-website/blob/main/LICENSE',
        }
      },
    },
    documentationPath: '/_dev/documentation',
  }
}
