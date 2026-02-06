const SpeedInsights: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Getting started with Speed Insights</h1>
      <p>
        This guide will help you get started with using Vercel Speed Insights on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.
      </p>
      <p>
        To view instructions on using the Vercel Speed Insights in your project for your framework, use the <strong>Choose a framework</strong> dropdown on the right (at the bottom in mobile view).
      </p>

      <section>
        <h2>Prerequisites</h2>
        <ul>
          <li>
            A Vercel account. If you don't have one, you can{' '}
            <a href="https://vercel.com/signup" target="_blank" rel="noopener noreferrer">
              sign up for free
            </a>
            .
          </li>
          <li>
            A Vercel project. If you don't have one, you can{' '}
            <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer">
              create a new project
            </a>
            .
          </li>
          <li>
            The Vercel CLI installed. If you don't have it, you can install it using one of the following commands:
            <div style={{ marginTop: '0.5rem' }}>
              <strong>pnpm:</strong>
              <pre><code>pnpm i vercel</code></pre>
              <strong>yarn:</strong>
              <pre><code>yarn i vercel</code></pre>
              <strong>npm:</strong>
              <pre><code>npm i vercel</code></pre>
              <strong>bun:</strong>
              <pre><code>bun i vercel</code></pre>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h3>Enable Speed Insights in Vercel</h3>
        <p>
          On the Vercel dashboard, select your Project followed by the <strong>Speed Insights</strong> tab. You can also select the button below to be taken there. Then, select <strong>Enable</strong> from the dialog.
        </p>
        <blockquote style={{ background: '#f0f0f0', padding: '1rem', borderLeft: '4px solid #666', margin: '1rem 0' }}>
          <strong>💡 Note:</strong> Enabling Speed Insights will add new routes (scoped at <code>/_vercel/speed-insights/*</code>) after your next deployment.
        </blockquote>
      </section>

      <section>
        <h3>Add @vercel/speed-insights to your project</h3>
        <p>Using the package manager of your choice, add the <code>@vercel/speed-insights</code> package to your project:</p>
        <div style={{ marginTop: '0.5rem' }}>
          <strong>pnpm:</strong>
          <pre><code>pnpm i @vercel/speed-insights</code></pre>
          <strong>yarn:</strong>
          <pre><code>yarn i @vercel/speed-insights</code></pre>
          <strong>npm:</strong>
          <pre><code>npm i @vercel/speed-insights</code></pre>
          <strong>bun:</strong>
          <pre><code>bun i @vercel/speed-insights</code></pre>
        </div>
        <blockquote style={{ background: '#f0f0f0', padding: '1rem', borderLeft: '4px solid #666', margin: '1rem 0' }}>
          <strong>💡 Note:</strong> When using the HTML implementation, there is no need to install the <code>@vercel/speed-insights</code> package.
        </blockquote>
      </section>

      <section>
        <h2>Framework-Specific Integration</h2>
        
        <h3>Next.js (Pages Router)</h3>
        <p>The <code>SpeedInsights</code> component is a wrapper around the tracking script, offering more seamless integration with Next.js.</p>
        <p>Add the following component to your main app file:</p>
        <pre><code>{`// TypeScript - pages/_app.tsx
import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;`}</code></pre>

        <pre><code>{`// JavaScript - pages/_app.jsx
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;`}</code></pre>

        <p>For versions of Next.js older than 13.5, import the <code>&lt;SpeedInsights&gt;</code> component from <code>@vercel/speed-insights/react</code> and pass it the pathname of the route:</p>
        <pre><code>{`import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRouter } from "next/router";

export default function Layout() {
  const router = useRouter();
  return <SpeedInsights route={router.pathname} />;
}`}</code></pre>

        <h3>Next.js (App Router)</h3>
        <p>Add the following component to the root layout:</p>
        <pre><code>{`// TypeScript - app/layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}`}</code></pre>

        <pre><code>{`// JavaScript - app/layout.jsx
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}`}</code></pre>

        <p>For versions of Next.js older than 13.5, create a dedicated component to avoid opting out from SSR on the layout:</p>
        <pre><code>{`// app/insights.tsx
"use client";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { usePathname } from "next/navigation";

export function Insights() {
  const pathname = usePathname();
  return <SpeedInsights route={pathname} />;
}`}</code></pre>

        <h3>Create React App</h3>
        <p>The <code>SpeedInsights</code> component is a wrapper around the tracking script, offering more seamless integration with React.</p>
        <p>Add the following component to the main app file:</p>
        <pre><code>{`// TypeScript - App.tsx
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <SpeedInsights />
    </div>
  );
}`}</code></pre>

        <pre><code>{`// JavaScript - App.jsx
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <div>
      {/* ... */}
      <SpeedInsights />
    </div>
  );
}`}</code></pre>

        <h3>Remix</h3>
        <p>The <code>SpeedInsights</code> component is a wrapper around the tracking script, offering a seamless integration with Remix.</p>
        <p>Add the following component to your root file:</p>
        <pre><code>{`// TypeScript - app/root.tsx
import { SpeedInsights } from '@vercel/speed-insights/remix';

export default function App() {
  return (
    <html lang="en">
      <body>
        {/* ... */}
        <SpeedInsights />
      </body>
    </html>
  );
}`}</code></pre>

        <h3>SvelteKit</h3>
        <p>Add the following to your root file:</p>
        <pre><code>{`// TypeScript - src/routes/+layout.ts
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();`}</code></pre>

        <pre><code>{`// JavaScript - src/routes/+layout.js
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();`}</code></pre>

        <h3>HTML</h3>
        <p>Add the following scripts before the closing tag of the <code>&lt;body&gt;</code>:</p>
        <pre><code>{`<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>`}</code></pre>

        <h3>Vue</h3>
        <p>The <code>SpeedInsights</code> component is a wrapper around the tracking script, offering more seamless integration with Vue.</p>
        <p>Add the following component to the main app template:</p>
        <pre><code>{`<!-- TypeScript - src/App.vue -->
<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}</code></pre>

        <h3>Nuxt</h3>
        <p>The <code>SpeedInsights</code> component is a wrapper around the tracking script, offering more seamless integration with Nuxt.</p>
        <p>Add the following component to the default layout:</p>
        <pre><code>{`<!-- TypeScript - layouts/default.vue -->
<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}</code></pre>

        <h3>Other Frameworks</h3>
        <p>Import the <code>injectSpeedInsights</code> function from the package, which will add the tracking script to your app. <strong>This should only be called once in your app, and must run in the client</strong>.</p>
        <pre><code>{`// TypeScript - main.ts
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();`}</code></pre>

        <h3>Astro</h3>
        <p>Speed Insights is available for both static and SSR Astro apps.</p>
        <p>To enable this feature, declare the <code>&lt;SpeedInsights /&gt;</code> component from <code>@vercel/speed-insights/astro</code> near the bottom of one of your layout components:</p>
        <pre><code>{`---
import SpeedInsights from '@vercel/speed-insights/astro';
const { title, description } = Astro.props;
---
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<SpeedInsights />`}</code></pre>

        <p>Optionally, you can remove sensitive information from the URL by adding a <code>speedInsightsBeforeSend</code> function to the global <code>window</code> object:</p>
        <pre><code>{`<script is:inline>
  function speedInsightsBeforeSend(data){
    console.log("Speed Insights before send", data)
    return data;
  }
</script>
<SpeedInsights />`}</code></pre>
      </section>

      <section>
        <h3>Deploy your app to Vercel</h3>
        <p>You can deploy your app to Vercel's global CDN by running the following command from your terminal:</p>
        <pre><code>vercel deploy</code></pre>
        <p>
          Alternatively, you can connect your project's git repository, which will enable Vercel to deploy your latest pushes and merges to main.
        </p>
        <p>Once your app is deployed, it's ready to begin tracking performance metrics.</p>
        <blockquote style={{ background: '#f0f0f0', padding: '1rem', borderLeft: '4px solid #666', margin: '1rem 0' }}>
          <strong>💡 Note:</strong> If everything is set up correctly, you should be able to find the <code>/_vercel/speed-insights/script.js</code> script inside the body tag of your page.
        </blockquote>
      </section>

      <section>
        <h3>View your data in the dashboard</h3>
        <p>Once your app is deployed, and users have visited your site, you can view the data in the dashboard.</p>
        <p>
          To do so, go to your dashboard, select your project, and click the <strong>Speed Insights</strong> tab.
        </p>
        <p>
          After a few days of visitors, you'll be able to start exploring your metrics. For more information on how to use Speed Insights, see Using Speed Insights.
        </p>
      </section>

      <section>
        <p>
          Learn more about how Vercel supports privacy and data compliance standards with Vercel Speed Insights.
        </p>
      </section>

      <section>
        <h2>Next steps</h2>
        <p>Now that you have Vercel Speed Insights set up, you can explore the following topics to learn more:</p>
        <ul>
          <li>Learn how to use the <code>@vercel/speed-insights</code> package</li>
          <li>Learn about metrics</li>
          <li>Read about privacy and compliance</li>
          <li>Explore pricing</li>
          <li>Troubleshooting</li>
        </ul>
      </section>
    </div>
  );
};

export default SpeedInsights;
