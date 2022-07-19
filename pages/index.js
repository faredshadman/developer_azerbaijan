import Head from "next/head";
import {
  FirstSection,
  Jobs,
  Lessons,
  StartUp,
  Team,
  Projects,
  Partners,
} from "../components";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Developer Azerbaijan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/logo.svg" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <FirstSection />
      <Lessons />
      <StartUp />
      <Jobs />
      <Team />
      <Projects />
      <Partners />
    </div>
  );
}
