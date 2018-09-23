import React from "react";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";
import { stripIndents } from "common-tags";
import { minify } from "html-minifier";
import { SheetsRegistry } from "react-jss";

import { version } from "../package.json";
import routes from "./routes";
import config from "./config";

const minifyOptions = {
  minifyCSS: true,
  minifyJS: true
};

const renderAnalytics = () =>
  stripIndents`
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-89548578-1', 'auto');
      ga('send', 'pageview');
    </script>
  `;

const renderSidecar = () =>
  stripIndents`
    <script>
      ((window.gitter = {}).chat = {}).options = {
        room: '${config.site.gitter}'
      };
    </script>
    <script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>
  `;

const renderCodeFund = () =>
  stripIndents`
    <script src="https://codefund.io/scripts/0c702cf1-8730-4cb2-bb1b-0a36c437e46d/embed.js?theme=codesandbox&template=default" async defer></script>
  `;

// If removing this, also remove the class from CodeFundWidget.
const renderSeedAndDev = () => stripIndents`
  <script>
    var SeedAndDewConfig = {};
    (function() {
      SeedAndDewConfig['adClass'] = "snd-ad";
      /* * * DON'T EDIT BELOW THIS LINE * * */
      SeedAndDewConfig['projectId'] = 'db61e071-7302-4021-a7ac-45171be0bd7b';
      SeedAndDewConfig['loadStartTime'] = performance.now();
      SeedAndDewConfig['apiVersion'] = '2018-05-28'
      SeedAndDewConfig['sessionId'] = Math.random().toString(36).substring(2, 15);
      var snd = document.createElement('script');
      snd.type = 'text/javascript';
      snd.async = true;
      snd.src = 'https://www.seedanddew.com/static/embed.min.js';
      (document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]).appendChild(snd);
    })();
  </script>
`;

const renderDoc = ({ app, css, analytics, sidecar, codeFund, seedAndDew }) =>
  stripIndents`
    <!doctype html>
    <html lang="en">
      <head>
        <title>${config.site.head.title}</title>
        <meta name="description" content="${config.site.head.description}" />
        <meta name="keywords" content="${config.site.head.keywords.join(
          " "
        )}" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="${config.site.og.title}" />
        <meta property="og:description" content="${
          config.site.og.description
        }" />
        <meta property="og:type" content="${config.site.og.type}" />
        <meta property="og:image" content="${config.site.og.image}" />
        <meta property="og:url" content="${config.site.og.url}" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <style id="critical-css" type="text/css">
          ${css}
        </style>
        <link rel="stylesheet" type="text/css" href="/vendor.styles.v${version}.css" />
      </head>
      <body>
        ${app}
        <script src="/vendor.bundle.v${version}.js"></script>
        <script src="/bundle.v${version}.js"></script>
        ${codeFund}
        ${analytics}
        ${sidecar}
        ${seedAndDew}
      </body>
    </html>
  `;

export default (location, callback) => {
  const registry = new SheetsRegistry();
  match(
    { routes: routes({ registry }), location },
    (error, redirectLocation, renderProps) => {
      const html = renderDoc({
        app: renderToString(<RouterContext {...renderProps} />),
        css: registry.toString(),
        analytics: renderAnalytics(),
        sidecar: renderSidecar(),
        codeFund: renderCodeFund(),
        seedAndDew: renderSeedAndDev()
      });
      callback(minify(html, minifyOptions));
    }
  );
};
