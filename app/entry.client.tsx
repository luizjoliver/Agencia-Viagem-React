import * as Sentry from "@sentry/react-router";
 import { startTransition, StrictMode } from "react";
 import { hydrateRoot } from "react-dom/client";
 import { HydratedRouter } from "react-router/dom";

Sentry.init({
 dsn: "https://2891596a857e9316b0d156b7c7499c53@o4509389940391936.ingest.us.sentry.io/4509389941309440",
 

 sendDefaultPii: true,
 
 integrations: [
  Sentry.browserTracingIntegration(),
  Sentry.replayIntegration()
 ],
 tracesSampleRate:1.0,
 replaysSessionSampleRate:0.1,
 replaysOnErrorSampleRate:1.0
});

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
