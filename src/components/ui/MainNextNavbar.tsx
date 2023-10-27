'use client'
import { FC } from 'react'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,

	Input,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Badge,

} from "@nextui-org/react";
import { UserButton  } from "@clerk/nextjs";

import Link from "next/link";


import {  Bell, SearchIcon} from 'lucide-react';
import {MonetDisplayFont} from '@/utils/fonts';










interface MainNextNavBarProps {
  
}

const MainNextNavBar: FC<MainNextNavBarProps> = ({ }) => {
	
	let stt = [false  , false , false]
	return (
		<Navbar isBordered isBlurred shouldHideOnScroll>
			<NavbarContent justify="start">
				<NavbarBrand className="mr-4">
					<Link
						href="/"
						color="foreground"
						className={`${MonetDisplayFont.className} `}>
						MONET
					</Link>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-3">
					<NavbarItem isActive={stt[0]}>
						<Link
							color={stt[0] ? "text-secondary" : "foreground"}
							href="/premade_api"
							onClick={() => {
								stt[0] = true;
							}}>
							Apis
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							href="/customers"
							className={stt[1] ? "text-secondary" : "foreground"}>
							Customers
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							color={stt[2] ? "secondary" : "foreground"}
							href="/documentation">
							Documentation
						</Link>
					</NavbarItem>
				</NavbarContent>
			</NavbarContent>

			<NavbarContent as="div" className="items-center" justify="end">
				<Input
					classNames={{
						base: "max-w-full sm:max-w-[10rem] h-10",
						mainWrapper: "h-full",
						input: "text-small",
						inputWrapper:
							"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
					}}
					placeholder="Type to search..."
					size="sm"
					startContent={<SearchIcon size={18} />}
					type="search"
				/>
			</NavbarContent>

			<NavbarContent justify="end">
				<UserButton afterSignOutUrl="/" />
				<Dropdown className='dark'>
						<Badge content="" shape='circle' color='primary'>
					<DropdownTrigger>
							<Button variant="light" radius='full' isIconOnly>
								<Bell size={20} />
							</Button>
					</DropdownTrigger>
					</Badge>
					<DropdownMenu aria-label="Static Actions">
						<DropdownItem key="new">Messg1</DropdownItem>
						<DropdownItem key="copy">Messg2</DropdownItem>
						<DropdownItem key="edit">Messg3</DropdownItem>

					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Navbar>
	);
}

export default MainNextNavBar