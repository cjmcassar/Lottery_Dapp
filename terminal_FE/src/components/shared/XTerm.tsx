import { executeCommand } from "@/lib/terminal/terminal";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { isAndroid } from "react-device-detect";
import { Terminal as Terminal_ } from "xterm";
import { FitAddon } from "xterm-addon-fit";

const Container = styled(Box)`
  .xterm-viewport {
    overflow-y: auto;
  }
`;

const checkIfArrowKey = (str) => {
  const arrowKeys = ["\u001b[A", "\u001b[B", "\u001b[C", "\u001b[D"];

  return arrowKeys.includes(str);
};

type Props = {
  withHelp: boolean;
};

export default function XTerm(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (ref.current) {
      const terminal = new Terminal_({
        cursorStyle: "bar",
        cursorBlink: true,
        lineHeight: isAndroid ? 1.4 : 1.2,
        fontFamily: "DOS VGA",
      });
      const fitAddon = new FitAddon();

      let command = "";

      terminal.loadAddon(fitAddon);
      terminal.open(ref.current);
      fitAddon.fit();
      terminal.focus();
      if (props.withHelp) {
        terminal.write("to see available commands\r\n");
        terminal.write("type 'help' and hit ENTER or RETURN\r\n\r\n");
      }
      if (isAndroid) {
        terminal.write("contestant ~$ ");
        terminal.write("\x1b[?25l"); // remove cursor
        terminal.onData((data) => {
          executeCommand({
            command: data,

            terminal,
            router,
          });
          terminal.write("\r" + "contestant ~$ ");
        });
      } else {
        terminal.write("\r\n");
        terminal.write("contestant ~$ ");
        terminal.onKey((e) => {
          const ev = e.domEvent;

          if (ev.key === "Enter") {
            executeCommand({ command, terminal, router });
            if (command === "reboot" || command === "shutdown") {
              terminal.write("\r\n" + "contestant ~$ ");
            } else if (command === "") {
              terminal.write("contestant ~$ ");
            } else {
              terminal.write("\r\n" + "contestant ~$ ");
            }
            command = "";
          } else if (ev.key === "Backspace") {
            if (command !== "") {
              command = command.slice(0, -1);
              terminal.write("\b \b");
            }
          } else if (!checkIfArrowKey(e.key)) {
            command += e.key;
            terminal.write(e.key);
          }
        });
      }
    }
  }, [ref]);

  return <Container ref={ref} bgColor="green" w="100%" />;
}
