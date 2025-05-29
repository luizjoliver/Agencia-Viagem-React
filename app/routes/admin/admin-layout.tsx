import { Outlet } from "react-router";
import { NavItems } from "~/components/NavItems";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations"
import { MobileSideBar } from "~/components/MobileSideBar";

export default function adminLayout() {
  return (
    <>
    <div className='admin-layout'>
      
       <MobileSideBar/>

      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent>
          <NavItems/>
        </SidebarComponent>
      </aside>

      <aside className="children">
        <Outlet/>
      </aside>

    </div>
    
    </>
  )
}
