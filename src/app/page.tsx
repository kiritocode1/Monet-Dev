
import { Button} from "@nextui-org/react";
import localFont from "next/font/local";

import { ArrowRightSquare } from "lucide-react";

const MonetDisplayFont = localFont({
	src: "./Dream_Avenue.ttf",
	display: "swap",
});
import { RecognitionFont } from "@/utils/fonts";

const get_data = async () => {
	const data = await fetch("http://localhost:3000/api/hello/");
	console.log(data.ok);
	const hehe =  await data.json();
	return hehe;
}




export default async function Home () {
	const hehe = await get_data();
	return (
		<div className="min-h-screen w-full">
			

			<h1
				className={`${MonetDisplayFont.className} text-amber-700 lg:text-9xl  text-center`}>
				MONET
			</h1>
			<h3 className={RecognitionFont.className + " text-center  text-xl "}>
				Tailor made Api-as-a-service since 2023.
			</h3>
			<div className="flex justify-center w-full mt-20">
				
				<Button color="secondary" size="lg" variant="light" >
					Learn More <ArrowRightSquare size={24} />
				</Button>
			</div>
			<div>
				{JSON.stringify(hehe)}
			</div>
		</div>
	);
}
