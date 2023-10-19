import { UserButton } from "@clerk/nextjs";
import { Button} from "@nextui-org/react";


export default function Home() {
	return (
		<div className="flex ">
			<UserButton afterSignOutUrl="/" />
      <div className="text-red-500"> hello</div>
      <Button color="primary" size="lg">Styled components working</Button>
		</div>
	);
}
