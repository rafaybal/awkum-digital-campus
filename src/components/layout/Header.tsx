import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, Globe, User, Search } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
      submenu: [
        { name: 'History', href: '/about/history' },
        { name: 'Vision & Mission', href: '/about/vision' },
        { name: 'Leadership', href: '/about/leadership' },
        { name: 'Campus', href: '/about/campus' },
      ],
    },
    {
      name: 'Admissions',
      href: '/admissions',
      submenu: [
        { name: 'Undergraduate', href: '/admissions/undergraduate' },
        { name: 'Graduate', href: '/admissions/graduate' },
        { name: 'International', href: '/admissions/international' },
        { name: 'Online Application', href: '/admissions/apply' },
      ],
    },
    {
      name: 'Departments',
      href: '/departments',
      submenu: [
        { name: 'Computer Science', href: '/departments/computer-science' },
        { name: 'Business Administration', href: '/departments/business' },
        { name: 'Engineering', href: '/departments/engineering' },
        { name: 'Social Sciences', href: '/departments/social-sciences' },
      ],
    },
    {
      name: 'Research',
      href: '/research',
      submenu: [
        { name: 'Research Centers', href: '/research/centers' },
        { name: 'Publications', href: '/research/publications' },
        { name: 'Grants', href: '/research/grants' },
        { name: 'Conferences', href: '/research/conferences' },
      ],
    },
    {
      name: 'Faculty',
      href: '/faculty',
    },
    {
      name: 'Student Portal',
      href: '/student-portal',
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="border-b border-border/20 bg-primary/5">
        <div className="container-custom flex h-10 items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">📧 info@awkum.edu.pk</span>
            <span className="text-muted-foreground">📞 +92-937-761013</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <Globe className="h-3 w-3 mr-1" />
              EN
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <User className="h-3 w-3 mr-1" />
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-foreground">AWKUM</div>
              <div className="text-xs text-muted-foreground">Abdul Wali Khan University Mardan</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4">
                            {item.submenu.map((subitem) => (
                              <NavigationMenuLink
                                key={subitem.name}
                                asChild
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <Link to={subitem.href}>{subitem.name}</Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        asChild
                        className={`${
                          location.pathname === item.href
                            ? 'bg-accent text-accent-foreground'
                            : ''
                        } px-4 py-2 rounded-md hover:bg-accent/50 transition-colors`}
                      >
                        <Link to={item.href}>{item.name}</Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search & CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-10"
              />
            </div>
            <Button className="hidden md:inline-flex btn-primary">
              Apply Now
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className="flex items-center justify-between py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                        {item.submenu && <ChevronDown className="h-4 w-4" />}
                      </Link>
                      {item.submenu && (
                        <div className="pl-4 space-y-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              to={subitem.href}
                              className="block py-1 text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-8 space-y-3">
                  <Button className="w-full btn-primary">Apply Now</Button>
                  <div className="flex relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full pl-10"
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;