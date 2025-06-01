import { Outlet, redirect } from "react-router";
import { NavItems } from "~/components/NavItems";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations"
import { MobileSideBar } from "~/components/MobileSideBar";
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";

export async function clientLoader() {
    try {
        const user = await account.get();

        if(!user.$id) return redirect('/sign-in');

        const existingUser = await getExistingUser(user.$id)

        if(existingUser?.status === 'user'){
          return redirect('/')
        }

        return existingUser?.$id ? existingUser : await storeUserData()
    } catch (e) {
        console.log('Error fetching user', e)
        return redirect("/sign-in")
    }
}

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
