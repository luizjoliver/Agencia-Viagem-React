import { Link, NavLink } from 'react-router'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'

export  function NavItems() {
  return (
    <section className='nav-items'>
      <Link to={"/"} className='link-logo'>
        <img src='../assets/icons/logo.svg' alt='logo empresa' 
        className='size-[30px]'/>
        <h1>Touristando</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map(({id,label,href,icon}) =>(
            <NavLink to={href} key={id}>
              {({isActive}:{isActive:boolean}) =>(
                  <div className={cn('group nav-item',{
                    'bg-primary-100 !text-white': isActive
                  })}>
                    <img src={icon} alt={label}
                    className={`group-hover:brightness-0 size-5 group-hover:invert ${isActive ? 'brightness-0 invert' :'text-dark-200'}`}/>
                    {label}
                  </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  )
}
