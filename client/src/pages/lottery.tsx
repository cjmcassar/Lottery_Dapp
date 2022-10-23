import { BlackTerminalPage } from "@/components/shared/BlackTerminalPage";
import { MultilineTypewriter } from "@/components/shared/MultilineTypewriter";
import { LotteryTerminal } from "@/components/shared/LotteryTerminal";
import { Box, Flex } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";

type State = "intro" | "interactive";

function lottery() {
  const [state, setState] = useState<State>("intro");

  const intro = useMemo(
    () => (
      <MultilineTypewriter
        texts={["Let the lottery begin"]}
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
      {state === "interactive" && <LotteryTerminal withHelp />}
    </BlackTerminalPage>
  );
}

export default lottery;
