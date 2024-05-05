/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GHclvTcC3mt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

export default function Home() {
    const [activeTab, setActiveTab] = useState('all');
    const handleTabChange = (value: string) => { setActiveTab(value); }

    return (
        <div key="1" className="flex h-screen w-full">
            <ResizablePanelGroup className="w-full" direction="horizontal">
                <ResizablePanel defaultSize={20}>
                    <div className="flex h-full flex-col bg-white pt-2 border-2 border-zinc-200 dark:bg-zinc-950 dark:border-zinc-700">
                        <div className="flex  h-full flex-col bg-white p-0 border-1 border-zinc-200 dark:bg-zinc-950 dark:border-zinc-700">
                            <div className="flex items-center p-2">
                                <div className="flex items-center gap-2 p-0">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button className="w-[300px] justify-between" role="combobox" variant="outline">
                                                <div className="flex items-center gap-2">
                                                    <MailIcon className="h-5 w-5 text-zinc-900" />
                                                    <span>john@example.com</span>
                                                </div>
                                                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50 text-zinc-900" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[300px] p-0">
                                            <div className="space-y-2 p-2">
                                                <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 [&[aria-selected='true']]:bg-gray-100 dark:[&[aria-selected='true']]:bg-gray-800">
                                                    <MailIcon className="h-5 w-5 text-zinc-900" />
                                                    <span>john@example.com</span>
                                                    <CheckIcon className="ml-auto h-5 w-5 text-primary" />
                                                </div>
                                                <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                                    <MailIcon className="h-5 w-5 text-zinc-900" />
                                                    <span>jane@example.com</span>
                                                </div>
                                                <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                                    <MailIcon className="h-5 w-5 text-zinc-900" />
                                                    <span>bob@example.com</span>
                                                </div>
                                                <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                                    <MailIcon className="h-5 w-5 text-zinc-900" />
                                                    <span>alice@example.com</span>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                            <Separator className="border border-gray-200" />
                        </div>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={60}>
                    <div className="flex h-full flex-col bg-white pt-2 border-2 border-zinc-200 dark:bg-zinc-950 dark:border-zinc-700">
                        <div className="flex  h-full flex-col bg-white p-0 border-1 border-zinc-200 dark:bg-zinc-950 dark:border-zinc-700">
                            <Tabs className="flex flex-col" defaultValue="all" onValueChange={handleTabChange}>
                                <div className="flex items-center p-2">
                                    <h1 className="text-2xl font-bold pl-2">Inbox</h1>
                                    <TabsList className="ml-auto rounded-md">
                                        <TabsTrigger value="all" className={cn(
                                            'text-zinc-600 rounded-lg border-transparent font-semibold dark:text-zinc-200',
                                            {
                                                'border border-lg shadow-md  border-zinc-200': activeTab === 'all',
                                                'border-none shadow-none ': activeTab !== 'all',
                                            }
                                        )}>
                                            All mail
                                        </TabsTrigger>
                                        <TabsTrigger value="unread" className={cn(
                                            'text-zinc-600 rounded-lg border-transparent font-semibold dark:text-zinc-200',
                                            {
                                                'border border-lg shadow-md  border-zinc-200': activeTab === 'unread',
                                                'border-none shadow-none ': activeTab !== 'unread',
                                            }
                                        )}>
                                            Unread
                                        </TabsTrigger>
                                    </TabsList>
                                </div>
                                <Separator className="border border-gray-200" />
                                <TabsContent className="m-0" value="all">
                                    <ScrollArea className="p-2">
                                        <div className="grid gap-2">
                                            <article className="flex flex-col items-start gap-2 rounded-lg border border-gray-200 p-3 text-left text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                                                <div className="flex items-center w-full">
                                                    <div className="font-semibold">Emily Davis</div>
                                                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">2 days ago</div>
                                                </div>
                                                <div className="text-xs font-medium">Re: New order #34562</div>
                                                <div className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                                                    Hi Emily, Thanks for your order. We are pleased to inform you that your order has been
                                                    shipped. You can track your order online on our website. Please find the tracking number
                                                    below.
                                                </div>
                                            </article>
                                            <article className="flex flex-col items-start gap-2 rounded-lg border border-gray-200 p-3 text-left text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                                                <div className="flex items-center w-full">
                                                    <div className="font-semibold">Marketing Team</div>
                                                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">1 hour ago</div>
                                                </div>
                                                <div className="text-xs font-medium">New Product Announcement</div>
                                                <div className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                                                    Dear valued customer, we are excited to introduce our latest product! Check it out on our
                                                    website now.
                                                </div>
                                            </article>
                                            <article className="flex flex-col items-start gap-2 rounded-lg border border-gray-200 p-3 text-left text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                                                <div className="flex items-center w-full">
                                                    <div className="font-semibold">Support Team</div>
                                                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">3 days ago</div>
                                                </div>
                                                <div className="text-xs font-medium">Important Update</div>
                                                <div className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                                                    Hello, we have important updates regarding your account security. Please review the changes in
                                                    your dashboard.
                                                </div>
                                            </article>
                                        </div>
                                    </ScrollArea>
                                </TabsContent>
                                <TabsContent className="m-0" value="unread">
                                    <ScrollArea className="p-2 grid gap-2">
                                        <div className="grid gap-2">
                                            <article className="flex flex-col items-start gap-2 rounded-lg border border-gray-200 p-3 text-left text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                                                <div className="flex items-center w-full">
                                                    <div className="font-semibold">Customer Feedback</div>
                                                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">5 days ago</div>
                                                </div>
                                                <div className="text-xs font-medium">Feedback Request</div>
                                                <div className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                                                    Hi there, we'd love to hear your feedback on our services. Please take a moment to fill out
                                                    our survey. Your opinion matters!
                                                </div>
                                            </article>
                                            <article className="flex flex-col items-start gap-2 rounded-lg border border-gray-200 p-3 text-left text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                                                <div className="flex items-center w-full">
                                                    <div className="font-semibold">Billing Department</div>
                                                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">1 week ago</div>
                                                </div>
                                                <div className="text-xs font-medium">Payment Confirmation</div>
                                                <div className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                                                    Dear customer, your recent payment of $100 has been successfully processed. Thank you for your
                                                    prompt payment.
                                                </div>
                                            </article>
                                        </div>
                                    </ScrollArea>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel className="border-2 border-zinc-200 dark:border-zinc-700" defaultSize={20}>
                    <div className="flex flex-col  items-start h-full w-full">
                        <div className="flex-none h-16">
                            <div className="flex  items-center flex-row w-full h-full">
                                <div className="flex-initial pl-2 pt-5 w-45 h-full">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button className="border-none" variant="outline" size="icon">
                                                    <i className="fi fi-ss-box"></i>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-zinc-900 text-zinc-200">
                                                <p>Archive</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button className="border-none" variant="outline" size="icon">
                                                    <i className="fi fi-ss-box"></i>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-zinc-900 text-zinc-200">
                                                <p>Move to junk</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button className="border-none" variant="outline" size="icon">
                                                    <i className="fi fi-ss-trash h-5 w-5 "></i>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-zinc-900 text-zinc-200 h-full">
                                                <p>Move to trash</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button className="border-none" variant="outline" size="icon">
                                                    <i className="fi fi-ss-clock h-5 w-5 "></i>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-zinc-900 text-zinc-200 h-full">
                                                <p>Move to trash</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>

                                <div className="flex-initial items-end w-65 h-full">
                                    <div className="flex-initial pl-0 pt-5 w-80 h-full">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button className="border-none" variant="outline" size="icon">
                                                        <i className="fi fi-ss-box"></i>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-zinc-900 text-zinc-200">
                                                    <p>Archive</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button className="border-none" variant="outline" size="icon">
                                                        <i className="fi fi-ss-box"></i>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-zinc-900 text-zinc-200">
                                                    <p>Move to junk</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button className="border-none" variant="outline" size="icon">
                                                        <i className="fi fi-ss-trash h-5 w-5 "></i>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-zinc-900 text-zinc-200 h-full">
                                                    <p>Move to trash</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button className="border-none" variant="outline" size="icon">
                                                    <i className="fi fi-bs-menu-dots-vertical h-5 w-5"></i>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-56">
                                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem>
                                                        <User className="mr-2 h-4 w-4" />
                                                        <span>Profile</span>
                                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <CreditCard className="mr-2 h-4 w-4" />
                                                        <span>Billing</span>
                                                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Settings className="mr-2 h-4 w-4" />
                                                        <span>Settings</span>
                                                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Keyboard className="mr-2 h-4 w-4" />
                                                        <span>Keyboard shortcuts</span>
                                                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem>
                                                        <Users className="mr-2 h-4 w-4" />
                                                        <span>Team</span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSub>
                                                        <DropdownMenuSubTrigger>
                                                            <UserPlus className="mr-2 h-4 w-4" />
                                                            <span>Invite users</span>
                                                        </DropdownMenuSubTrigger>
                                                        <DropdownMenuPortal>
                                                            <DropdownMenuSubContent>
                                                                <DropdownMenuItem>
                                                                    <Mail className="mr-2 h-4 w-4" />
                                                                    <span>Email</span>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <MessageSquare className="mr-2 h-4 w-4" />
                                                                    <span>Message</span>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuSeparator />
                                                                <DropdownMenuItem>
                                                                    <PlusCircle className="mr-2 h-4 w-4" />
                                                                    <span>More...</span>
                                                                </DropdownMenuItem>
                                                            </DropdownMenuSubContent>
                                                        </DropdownMenuPortal>
                                                    </DropdownMenuSub>
                                                    <DropdownMenuItem>
                                                        <Plus className="mr-2 h-4 w-4" />
                                                        <span>New Team</span>
                                                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <Github className="mr-2 h-4 w-4" />
                                                    <span>GitHub</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <LifeBuoy className="mr-2 h-4 w-4" />
                                                    <span>Support</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem disabled>
                                                    <Cloud className="mr-2 h-4 w-4" />
                                                    <span>API</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <LogOut className="mr-2 h-4 w-4" />
                                                    <span>Log out</span>
                                                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <Separator className="border border-gray-200" />
                        <div className="flex-1">
                            02
                        </div>
                        <div className="flex-none h-32">
                            03
                        </div>
                    </div>





                </ResizablePanel>
            </ResizablePanelGroup>
        </div >
    )
}

function CheckIcon(props) {
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
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function ChevronsUpDownIcon(props) {
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
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    )
}


function MailIcon(props) {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}

