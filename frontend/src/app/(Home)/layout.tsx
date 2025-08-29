import { Header } from "@/components/header/page";
import "./home.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={`antialiased`}
      >
        <Header />
        {children}
      </div>
  );
}
