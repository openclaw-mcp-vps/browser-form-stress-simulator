import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Form Stress Simulator – Simulate User Abandonment Patterns",
  description: "Test checkout forms by simulating real user abandonment behaviors and identify friction points. Built for e-commerce developers and conversion optimizers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f3d54ac2-2567-480f-8414-22110af75a15"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
