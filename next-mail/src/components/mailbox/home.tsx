"use client"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
import { Textarea } from "@/components/ui/textarea"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"


import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"


import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"


export default function Home() {
    const [activeTab, setActiveTab] = useState('all');
    const handleTabChange = (value: string) => { setActiveTab(value); }

    return (
        <div className="flex h-screen w-full">
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
                            <Command className="rounded-lg border shadow-md">
                                <CommandInput placeholder="Type a command or search..." />
                                <CommandList>
                                    <CommandEmpty>No results found.</CommandEmpty>
                                    <CommandGroup heading="Suggestions">
                                        <CommandItem>
                                            <i className="mr-2 h-4 w-4" />
                                            <span>Calendar</span>
                                        </CommandItem>
                                        <CommandItem>
                                            <i className="mr-2 h-4 w-4" />
                                            <span>Search Emoji</span>
                                        </CommandItem>
                                        <CommandItem>
                                            <i className="mr-2 h-4 w-4" />
                                            <span>Calculator</span>
                                        </CommandItem>
                                    </CommandGroup>
                                    <CommandSeparator />
                                    <CommandGroup heading="Settings">
                                        <CommandItem>
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Profile</span>
                                            <CommandShortcut>⌘P</CommandShortcut>
                                        </CommandItem>
                                        <CommandItem>
                                            <CreditCard className="mr-2 h-4 w-4" />
                                            <span>Billing</span>
                                            <CommandShortcut>⌘B</CommandShortcut>
                                        </CommandItem>
                                        <CommandItem>
                                            <Settings className="mr-2 h-4 w-4" />
                                            <span>Settings</span>
                                            <CommandShortcut>⌘S</CommandShortcut>
                                        </CommandItem>
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </div>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={60}>
                    <div className="flex h-full flex-col bg-white pt-2 border-2 border-zinc-200 dark:bg-zinc-950 dark:border-zinc-700">
                        <div className="flex h-96 flex-col bg-white p-0 border-1 border-zinc-200 dark:bg-zinc-950 dark:border-zinc-700">
                            <Tabs className="flex flex-col" defaultValue="all" onValueChange={handleTabChange}>
                                <div className="flex items-center p-2">
                                    <h1 className="text-2xl font-extrabold pl-2">Inbox</h1>
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
                                        <TabsTrigger value="archive" className={cn(
                                            'text-zinc-600 rounded-lg border-transparent font-semibold dark:text-zinc-200',
                                            {
                                                'border border-lg shadow-md  border-zinc-200': activeTab === 'archive',
                                                'border-none shadow-none ': activeTab !== 'archive',
                                            }
                                        )}>
                                            Archive
                                        </TabsTrigger>
                                    </TabsList>
                                </div>
                                <Separator className="border border-gray-200 " />
                                <div className="relative m-3 items-center w-full">
                                    <div className="flex w-full items-center space-x-2 pr-5">
                                        <Input className="border-2 rounded-md w-full" type="email" placeholder="Search Email ..." />
                                        <Button className="flex justify-center" size="icon" type="submit"><i className="fi fi-br-search w-8 mr-1 h-4  ml-1"></i></Button>
                                    </div>
                                </div>

                                <TabsContent className="m-0 flex-1  h-full p-4 space-y-2" value="all">

                                    <ContextMenu>
                                        <ContextMenuTrigger >
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
                                        </ContextMenuTrigger>
                                        <ContextMenuContent className="w-64">
                                            <ContextMenuItem inset>
                                                Back
                                                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                                            </ContextMenuItem>
                                            <ContextMenuItem inset disabled>
                                                Forward
                                                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                                            </ContextMenuItem>
                                            <ContextMenuItem inset>
                                                Reload
                                                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                                            </ContextMenuItem>
                                            <ContextMenuSub>
                                                <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                                                <ContextMenuSubContent className="w-48">
                                                    <ContextMenuItem>
                                                        Save Page As...
                                                        <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                                                    </ContextMenuItem>
                                                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                                                    <ContextMenuItem>Name Window...</ContextMenuItem>
                                                    <ContextMenuSeparator />
                                                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                                                </ContextMenuSubContent>
                                            </ContextMenuSub>
                                            <ContextMenuSeparator />
                                            <ContextMenuCheckboxItem checked>
                                                Show Bookmarks Bar
                                                <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                                            </ContextMenuCheckboxItem>
                                            <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
                                            <ContextMenuSeparator />
                                            <ContextMenuRadioGroup value="pedro">
                                                <ContextMenuLabel inset>People</ContextMenuLabel>
                                                <ContextMenuSeparator />
                                                <ContextMenuRadioItem value="pedro">
                                                    Pedro Duarte
                                                </ContextMenuRadioItem>
                                                <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                                            </ContextMenuRadioGroup>
                                        </ContextMenuContent>
                                    </ContextMenu>

                                            <article className="flex flex-col items-start gap-2 rounded-lg border border-gray-200 p-3 text-left text-sm transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
                                                <div className="flex items-center w-full">
                                                    <div className="font-semibold">Marketing Team</div>
                                            <div className="flex items-center justify-between  space-x-2 ml-5">
                                                <i className="fi fi-rr-envelope-open text-lg text-slate-900"></i>
                                                <i className="fi fi-rr-envelope-marker text-lg text-slate-900"></i>
                                                <i className="fi fi-rr-envelope-dot text-lg text-slate-900"></i>
                                            </div>
                                                    <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">1 hour ago</div>
                                                </div>
                                                <div className="text-xs font-medium">New Product Announcement</div>
                                                <div className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                                                    Dear valued customer, we are excited to introduce our latest product! Check it out on our
                                                    website now.
                                                </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <Badge className="mr-2 rounded-md ">Badge1</Badge>
                                            <Badge className="mr-2 rounded-md bg-gray-200 " variant="secondary" >Secondary1</Badge>
                                            <Badge className="mr-2 rounded-md " variant="outline" >Outline1</Badge>
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
                                        <div className="flex items-center justify-between mt-2">
                                            <Badge className="mr-2 rounded-md">Badge</Badge>
                                            <Badge className="mr-2 rounded-md" variant="secondary">Secondary</Badge>
                                            <Badge className="mr-2 rounded-md" variant="outline">Outline</Badge>
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
                                        <div className="flex items-center justify-between mt-2">
                                            <Badge className="mr-2 rounded-md">Badge</Badge>
                                            <Badge className="mr-2 rounded-md" variant="secondary">Secondary</Badge>
                                            <Badge className="mr-2 rounded-md" variant="outline">Outline</Badge>
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
                                </TabsContent>
                                <TabsContent className="m-0 flex-1  h-full p-4 space-y-2" value="unread">

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

                                            <div className="flex items-center justify-between mt-2">
                                                <Badge className="mr-2 rounded-md">Badge</Badge>
                                                <Badge className="mr-2 rounded-md" variant="secondary">Secondary</Badge>
                                                <Badge className="mr-2 rounded-md" variant="outline">Outline</Badge>
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

                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel className="border-2 border-zinc-200 dark:border-zinc-700" defaultSize={60}>
                    <div className="flex flex-col  items-start h-full w-full">
                        <div className="flex-none h-16 w-full">
                            <div className="flex justify-between items-center h-full">
                                <div className="flex w-50 items-center ml-1">
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
                                    <Separator className="w-[2px] h-5 mr-1 ml-1" orientation="vertical" />
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

                                <div className="flex w-10 ">
                                    {/* SPACE BODY*/}
                                </div>


                                <div className="flex w-50 items-center mr-2">
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
                                    <Separator className="w-[2px] h-5 mr-1 ml-1" orientation="vertical" />
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
                        <Separator className="border border-gray-200" />
                        <div className="flex-1 w-full">
                            <div className="flex flex-col w-full">
                                <div className="flex w-full justify-between items-center p-3">
                                    <div className="flex w-30 items-center ml-4">
                                        <Avatar >
                                            <AvatarImage src="" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <article className="ml-4" >
                                            <p className="text-lg font-bold">William Smith</p>
                                            <p className="text-xs font-semibold">Meeting Tomorrow</p>
                                            <p className="font-bold text-xs">Reply-To:
                                            </p>
                                            <p className="text-xs font-medium">
                                                williamsmith@example.com
                                            </p>
                                        </article>
                                    </div>
                                    <div className="flex w-50 ">
                                        {/* SPACE BODY*/}
                                    </div>
                                    <div className="flex w-30 items-cenetr mr-5 mt-[-50px]">
                                        <p className="text-xs font-semibold m:px-6 sm:py-4 sm:text-sm">Oct 22, 2023, 9:00:00 AM</p>
                                    </div>
                                </div>

                                <Separator className="border border-gray-200 w-full" />
                                <div className="flex-1 w-full h-96">
                                    <ScrollArea className="h-96 w-full border-none rounded-md border p-4">
                                        Jokester began sneaking into the castle in the middle of the night and leaving
                                        jokes all over the place: under the king's pillow, in his soup, even in the
                                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                        then, one day, the people of the kingdom discovered that the jokes left by
                                        Jokester were so funny that they couldn't help but laugh. And once they
                                        started laughing, they couldn't stop.
                                        Jokester began sneaking into the castle in the middle of the night and leaving
                                        jokes all over the place: under the king's pillow, in his soup, even in the
                                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                        then, one day, the people of the kingdom discovered that the jokes left by
                                        Jokester were so funny that they couldn't help but laugh. And once they
                                        started laughing, they couldn't stop.
                                        Jokester began sneaking into the castle in the middle of the night and leaving
                                        jokes all over the place: under the king's pillow, in his soup, even in the
                                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                        then, one day, the people of the kingdom discovered that the jokes left by
                                        Jokester were so funny that they couldn't help but laugh. And once they
                                        started laughing, they couldn't stop.
                                        Jokester began sneaking into the castle in the middle of the night and leaving
                                        jokes all over the place: under the king's pillow, in his soup, even in the
                                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                        then, one day, the people of the kingdom discovered that the jokes left by
                                        Jokester were so funny that they couldn't help but laugh. And once they
                                        started laughing, they couldn't stop.
                                        Jokester began sneaking into the castle in the middle of the night and leaving
                                        jokes all over the place: under the king's pillow, in his soup, even in the
                                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                        then, one day, the people of the kingdom discovered that the jokes left by
                                        Jokester were so funny that they couldn't help but laugh. And once they
                                        started laughing, they couldn't stop.
                                        Jokester began sneaking into the castle in the middle of the night and leaving
                                        jokes all over the place: under the king's pillow, in his soup, even in the
                                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                        then, one day, the people of the kingdom discovered that the jokes left by
                                        Jokester were so funny that they couldn't help but laugh. And once they
                                        started laughing, they couldn't stop.
                                        Jokester began sneaking into the castle in the middle of the night and leaving
                                        jokes all over the place: under the king's pillow, in his soup, even in the
                                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                        then, one day, the people of the kingdom discovered that the jokes left by
                                        Jokester were so funny that they couldn't help but laugh. And once they
                                        started laughing, they couldn't stop.
                                        Jokester began sneaking into the castle in the middle of the night and leaving
                                        jokes all over the place: under the king's pillow, in his soup, even in the
                                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                        then, one day, the people of the kingdom discovered that the jokes left by
                                        Jokester were so funny that they couldn't help but laugh. And once they
                                        started laughing, they couldn't stop.
                                        Jokester began sneaking into the castle in the middle of the night and leaving
                                        jokes all over the place: under the king's pillow, in his soup, even in the
                                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                        then, one day, the people of the kingdom discovered that the jokes left by
                                        Jokester were so funny that they couldn't help but laugh. And once they
                                        started laughing, they couldn't stop.
                                        Jokester began sneaking into the castle in the middle of the night and leaving
                                        jokes all over the place: under the king's pillow, in his soup, even in the
                                        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                        then, one day, the people of the kingdom discovered that the jokes left by
                                        Jokester were so funny that they couldn't help but laugh. And once they
                                        started laughing, they couldn't stop.
                                    </ScrollArea>

                                </div>
                            </div>
                        </div>
                        <Separator className="border border-gray-200" />
                        <div className="flex-none h-50 w-full p-5 pt-2">
                            <Textarea className="w-full mt-4 mb-4" placeholder="Type your message here." />
                            <div className="flex justify-between items-center h-full">
                                <div className="flex w-30 space-x-2 h-full">
                                    <Switch id="mute" />
                                    <Label className="mt-1" htmlFor="mute">Mute this thread</Label>
                                </div>
                                <div className="flex flex-50 h-full">
                                    {/* SPACE BODY*/}

                                </div>
                                <div className="flex w-20 h-full ">
                                    <Button>
                                        <i className="mr-2 h-4 w-4 fi fi-ss-paper-plane" /> Send
                                    </Button>
                                </div>
                            </div>
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
            strokeWid th="2"
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


