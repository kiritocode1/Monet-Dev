import { FC } from 'react'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Input,

} from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";


import {  SearchIcon} from 'lucide-react';
import {MonetDisplayFont} from '@/utils/fonts';










interface MainNextNavBarProps {
  
}

const MainNextNavBar: FC<MainNextNavBarProps> = ({}) => {
  return (
		<Navbar isBordered isBlurred shouldHideOnScroll >
			<NavbarContent justify="start">
				<NavbarBrand className="mr-4">
					
					<Link href='/'  color="foreground" className={`${MonetDisplayFont.className} `}>MONET</Link>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-3">
					<NavbarItem>
						<Link color="foreground" href="#">
							Apis
						</Link>
					</NavbarItem>
					<NavbarItem isActive>
						<Link href="#" aria-current="page" color="secondary">
							Customers
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="/documentation">
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
			</NavbarContent>
		</Navbar>
	);
}

export default MainNextNavBar