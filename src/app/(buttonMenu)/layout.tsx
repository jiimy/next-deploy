import BottomMenu from "@/components/bottomMenu/BottomMenu";
import Header from "@/components/header/Header";
import { MenuProvider } from "@/context/MenuContext";
import { Suspense } from "react";

export default function RootLayout({
  children,
  menu,
}: {
  children: React.ReactNode;
  menu: React.ReactNode;
}) {

  return (
    <MenuProvider>
      <div>
        {children}
        {menu}
      </div>
    </MenuProvider>
  )
}
