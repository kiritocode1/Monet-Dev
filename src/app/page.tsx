import { UserButton } from "@clerk/nextjs";
import { Button} from "@nextui-org/react";
import localFont from "next/font/local";

const MonetDisplayFont = localFont({
	src: "./Dream_Avenue.ttf",
	display: "swap",
});



export default function Home() {
	return (
		<div className="min-h-screen w-full">
			<UserButton afterSignOutUrl="/" />
			<h1 className={`${MonetDisplayFont.className} text-amber-700 text-9xl`}>Monet</h1>
			<h3></h3>
      <Button color="secondary" size="lg" variant="light">Styled components working</Button>
		</div>
	);
}
