import { nodeProfilingIntegration } from "@sentry/profiling-node";
import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://2891596a857e9316b0d156b7c7499c53@o4509389940391936.ingest.us.sentry.io/4509389941309440",
  

  sendDefaultPii: true,
  integrations:[nodeProfilingIntegration()],
  tracesSampleRate:1.0,
  profileSessionSampleRate:1.0
});
