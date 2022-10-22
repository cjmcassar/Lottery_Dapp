import type { NextPage } from "next";
import { BlackTerminalPage } from "./components/BlackTerminalPage";
import { Box, Flex } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { MultilineTypewriter } from "./components/MultilineTypewriter";
import { Terminal } from "./components/Terminal";

type State = "intro" | "interactive";

const Home: NextPage = () => {
	const [state, setState] = useState<State>("intro");

	const intro = useMemo(
		() => (
			<MultilineTypewriter
				texts={[
					"W elcom e to Group 2's lottery",
					"Follow the commands below to play",
					"Hope the odds are in your favor",
					". . .",
				]}
				onFinish={() => setState("interactive")}
			/>
		),
		[]
	);

	return (
		<BlackTerminalPage>
			<Box h={5} />
			<Flex w="100%" flexDir="column">
				{intro}
			</Flex>
			{state === "interactive" && <Terminal withHelp />}
		</BlackTerminalPage>
	);
};

export default Home;
