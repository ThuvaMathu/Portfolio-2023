import { AppProvider } from "@/src/context/app-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <div
          className=" relative text-white w-full "
          style={{ fontFamily: "Inter" }}
        >
          <Component {...pageProps} />
        </div>
      </AppProvider>
    </>
  );
}
