import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { BlackTerminalPage } from "./components/BlackTerminalPage";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

type State = "intro" | "interactive";

const Terminal = dynamic(
	() => import("../pages/components/TerminalComponent"),
	{
		ssr: false,
	}
);
// create function that imports terminal

const Home: NextPage = () => {
	const [state, setState] = useState<State>("intro");

	return (
		<BlackTerminalPage>
			<Box h={5} />

			{state === "interactive" && <Terminal />}
		</BlackTerminalPage>
	);
};

export default Home;
