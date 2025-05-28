import { Outlet } from "react-router";

export default function adminLayout() {
  return (
    <>
    <div className='admin-layout'>
        mobileSideBar

      <aside className="w-full max-w-[270px] hidden lg:block">
        sideBar Pc
      </aside>
      
      <aside className="children">
        <Outlet/>
      </aside>

    </div>
    
    </>
  )
}
