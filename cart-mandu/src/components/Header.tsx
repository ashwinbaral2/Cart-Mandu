
import { NavigationMenu, NavigationMenuItem, NavigationMenuList }
  from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { ShoppingCartIcon } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-amber-600 text-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        <h1 className="text-xl font-bold">Cart-Mandu</h1>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-10 justify-center">
            <NavigationMenuItem>Home</NavigationMenuItem>
            <NavigationMenuItem>Products</NavigationMenuItem>
            <NavigationMenuItem> About us</NavigationMenuItem>
            <NavigationMenuItem>
              <Button className="ml-2 text-md text-amber-600" variant="outline">Log In</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button className="ml-2 text-md text-amber-600" variant="outline"><ShoppingCartIcon className="h-4 w-4" /></Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>


      </div>
    </header>
  )
}

