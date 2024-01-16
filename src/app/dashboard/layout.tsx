import NavigationItems from "@/components/navigation-items";
import React, {PropsWithChildren} from "react";

const Layout = ({children}: PropsWithChildren) => {
  return (
    <div className="flex h-[calc(100vh-56px)]">
      {/* sidebar */}
      <div className="bg-white border-r w-[250px]">
        <NavigationItems />
      </div>
      <div className="bg-zinc-100 p-4 flex-1">{children}</div>
    </div>
  );
};

export default Layout;
