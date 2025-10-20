import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom'


const MainNavigation = (className) => {
  return (
    <NavigationMenu className={className}>
    <NavigationMenuList>
    <NavigationMenuItem>
      <a href="/">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <a href="/collection">
          <NavigationMenuLink className={navigationMenuTriggerStyle()+'font-bold !text-xl'}>
           Jetzt Thermorollen bestellen
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem>
      <a href="/angebot">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Angebot/Sonderwünsche
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem>
      <a href="/contact">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Kontakt
          </NavigationMenuLink>
        </a>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  );
}

export default MainNavigation;