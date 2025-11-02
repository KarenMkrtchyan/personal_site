import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex justify-center items-center">
      <head>
        <title>hi i'm ka'ren</title>
      </head>
      <body className="bg-base-bg flex flex-col items-center">
        <div className="relative w-screen h-[300px]">
          <Image
            src="/banner.jpg"
            alt="Banner"
            fill
            priority
            style={{ objectFit: "cover" }}
          />

          {/* Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60%",
              background:
                "linear-gradient(to bottom, rgba(25,25,25,0) 0%, #191919 100%)",
            }}
          />
        </div>

        {children}
      </body>
    </html>
  );
}
