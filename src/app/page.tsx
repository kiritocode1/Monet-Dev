
import { Button} from "@nextui-org/react";
import localFont from "next/font/local";
import MainNextNavBar from "@/components/ui/MainNextNavbar";
const MonetDisplayFont = localFont({
	src: "./Dream_Avenue.ttf",
	display: "swap",
});



export default function Home() {
	return (
		<div className="min-h-screen w-full">
			<MainNextNavBar />
			
			<h1 className={`${MonetDisplayFont.className} text-amber-700 text-9xl text-center`}>MONET</h1>
			<h3></h3>
			<Button color="secondary" size="lg" variant="light">Styled components working</Button>
			
		</div>
	);
}
