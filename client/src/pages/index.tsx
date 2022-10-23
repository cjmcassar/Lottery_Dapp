import { BlackTerminalPage } from "@/components/shared/BlackTerminalPage";
import { MultilineTypewriter } from "@/components/shared/MultilineTypewriter";
import { Terminal } from "@/components/shared/Terminal";
import { Box, Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

type State = "intro" | "interactive";

function HomeScreen() {
  const [state, setState] = useState<State>("intro");

  const intro = useMemo(
    () => (
      <MultilineTypewriter
        texts={[
          "Welcome to Group 2's lottery",
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
}

export default dynamic(() => Promise.resolve(HomeScreen), {
  ssr: false,
});
