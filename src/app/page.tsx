"use client";

import { trpc } from "@/utils/trpc";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const helloQuery = trpc.hello.useQuery();

  if (helloQuery?.isLoading) return <div>Loading...</div>;
  if (helloQuery?.error) return <div>Error: {helloQuery?.error?.message}</div>;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/t3-dark.svg"
          alt="T3 Stack logo"
          width={180}
          height={50}
          priority
        />
        <div>
          {helloQuery?.data?.message}
        </div>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://create.t3.gg/en/deployment/vercel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://create.t3.gg/en/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://create.t3.gg/en/usage/first-steps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://create.t3.gg/en/examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
