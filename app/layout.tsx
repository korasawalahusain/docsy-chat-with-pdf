import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docsy | Your Interactive Document Companion",
  description:
    "Engage with your PDFs like never before using our intuitive and interactive viewer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="h-svh w-svw overflow-hidden flex flex-col">
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
