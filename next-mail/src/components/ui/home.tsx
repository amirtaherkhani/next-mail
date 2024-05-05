/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KRHb0NdmlrJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DrawerTrigger, DrawerContent, Drawer } from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white/60 backdrop-blur-md dark:bg-gray-950/60">
        <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="text-xlg font-bold">
              Next
              <span className="text-lg font-semibold">.mail</span>
            </span>
          </Link>
          <nav className="ml-auto hidden space-x-4 md:flex">
            <Link
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              Home
            </Link>
            <Link
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              About
            </Link>
            <Link
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              Services
            </Link>
            <Link
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <form className="flex-1 hidden md:flex">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  placeholder="Search emails..."
                  type="search"
                />
              </div>
            </form>
            <div className="flex items-center gap-2 mr-2">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 ml-auto"
                href="#"
              >
                Login
              </Link>
            </div>
          </div>
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                className="ml-auto md:hidden"
                size="icon"
                style={{
                  border: "none",
                }}
                variant="outline"
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="animate-slide-up" side="bottom">
              <div className="flex flex-col items-center justify-center gap-6 p-6 text-2xl font-bold">
                <form className="flex-1 w-full">
                  <div className="relative">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input className="pl-8 w-full" placeholder="Search emails..." type="search" />
                  </div>
                </form>
                <Link
                  className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  href="#"
                >
                  Home
                </Link>
                <Link
                  className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  href="#"
                >
                  About
                </Link>
                <Link
                  className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  href="#"
                >
                  Services
                </Link>
                <Link
                  className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  href="#"
                >
                  Contact
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
      <main className="pt-16">
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Next
                <span className="sm:text-2xl md:text-3xl font-semibold pd-1">.mail</span>
              </h2>
              <p className="flex flex-wrap gap-2">
              Docker mailserver client app
             
              </p>
              <p className="ml-2 mt-0 text-xs font-normal" id="wbx809vonr">
                Manege your emails with ease and stay organized
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Next.mail offers a range of powerful features to help you manage your emails with ease.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <InboxIcon className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Unified Inbox</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Manage all your email accounts in one place, with a clean and intuitive interface.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <ListOrderedIcon className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Smart Sorting</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Automatically sort your emails into categories, so you can focus on what's important.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <SearchIcon className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Powerful Search</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Find any email, attachment, or contact with lightning-fast search capabilities.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Calendar Integration</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Seamlessly integrate your email with your calendar to stay on top of your schedule.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <FileIcon className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Attachment Management</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Easily manage and share attachments, with support for a wide range of file types.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <MergeIcon className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Collaboration Tools</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Collaborate with your team on emails, with features like shared inboxes and real-time notifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Next.mail Deploy</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Next.mail is an open-source mail server project with modern client app for your business developed by
                Next-etl team of passionate engineers using Next.js, Docker, Golang, Tailwind CSS, and the shadcn/ui
                library. Check out our GitHub page to learn more about the project and how you can contribute.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="hover:shadow-lg hover:scale-[1.02] transition-all">
                <CardHeader>
                  <CardTitle>Self-Hosting</CardTitle>
                  <CardDescription>
                    Deploy Next.mail on your own infrastructure and take full control of your data.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ServerIcon className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Run on Your Own Server</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Set up Next.mail on your own server or cloud infrastructure for complete privacy and control.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Get Started
                    </Link>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:scale-[1.02] transition-all">
                <CardHeader>
                  <CardTitle>
                    Cloud Hosting
                    <Badge className="ml-2 border border-gray-200 dark:border-gray-800" variant="secondary">
                      Incoming
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Let us handle the infrastructure and maintenance, so you can focus on your business.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CloudIcon className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Hosted on Our Cloud</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Enjoy the benefits of Next.mail without the hassle of managing servers and infrastructure.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Get Started
                    </Link>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:scale-[1.02] transition-all">
                <CardHeader>
                  <CardTitle>Deploy Client App</CardTitle>
                  <CardDescription>
                    Deploy Next.mail on your own infrastructure and take full control of your data.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ServerIcon className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Run on Your Own Server</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Set up Next.mail on your own server or cloud infrastructure for complete privacy and control.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Deploy on Vercel
                    </Link>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-6 text-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <MountainIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">Next.mail</span>
            </div>
            <nav className="flex gap-4">
              <Link className="text-sm font-medium hover:underline hover:underline-offset-4" href="#">
                Home
              </Link>
              <Link className="text-sm font-medium hover:underline hover:underline-offset-4" href="#">
                About
              </Link>
              <Link className="text-sm font-medium hover:underline hover:underline-offset-4" href="#">
                Services
              </Link>
              <Link className="text-sm font-medium hover:underline hover:underline-offset-4" href="#">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function InboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}


function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MergeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ServerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}