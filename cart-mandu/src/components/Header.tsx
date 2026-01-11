
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } 
from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        <h1 className="text-xl font-bold">Cart-Mandu</h1>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>Home</NavigationMenuItem>
            <NavigationMenuItem>Products</NavigationMenuItem>
            <NavigationMenuItem>About</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>


      </div>
    </header>
  )
}

