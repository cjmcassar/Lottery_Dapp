import { NextRouter } from "next/router";
import { Terminal as Terminal_ } from "xterm";
import { isMobileOnly } from "react-device-detect";

export type TerminalCommand =
  | "help"
  | "bet"
  | "reboot"
  | "shutdown"
  | "clear"
  | string;

type HomeScreenConfig = {
  command: TerminalCommand;

  terminal: Terminal_;
  router: NextRouter;
};

type LotteryConfig = {
  command: TerminalCommand;

  terminal: Terminal_;
  router: NextRouter;
};

export function executeLotteryCommand({
  command,
  terminal,
  router,
}: LotteryConfig) {
  switch (command) {
    case "exit":
      router.push("/");
      terminal.write("\r\nResetting terminal...");
      break;
  }
}

export function executeCommand({
  command,
  terminal,
  router,
}: HomeScreenConfig) {
  const trimmedCommand = command.trim();
  const newline = terminal.write("\r\n");

  switch (trimmedCommand) {
    case "help":
      if (isMobileOnly) {
        newline;
        terminal.write("\r\nAvailable commands:");
        newline;
        terminal.write("\r\n  help\t\tgetting this help");
        terminal.write("\r\n  bet\tbegin the lottery");
        terminal.write("\r\n  shutdown\tshut the site down");
        terminal.write("\r\n  reboot\trestart the site");
        terminal.write("\r\n  clear\t\tclear the terminal\r\n");
      } else {
        newline;
        terminal.write("\r\nAvailable commands:");
        newline;
        terminal.write("\r\n\thelp\t\tgetting this help");
        terminal.write("\r\n\tbet\t\tbegin the lottery");
        terminal.write("\r\n\tshutdown\tshut the site down");
        terminal.write("\r\n\treboot\t\trestart the site");
        terminal.write("\r\n\tclear\t\tclear the terminal\r\n");
      }
      break;
    case "bet":
      // open new set of terminal commands

      newline;
      terminal.write("\r\nLets begin the lottery! ");
      router.replace("/lottery");

      break;
    case "shutdown":
      newline;
      terminal.write("\rSite is shutting down...");
      router.replace("/shutdown/process");
      break;
    case "reboot":
      newline;
      terminal.write("\rSite is rebooting...");
      router.replace("/shutdown/process?reboot=true");
      break;
    case "clear":
      terminal.write("\x1bc");
      break;
    case "helo":
    case "hepl":
    case "hep":
    case "hel":
    case "helpp":
    case "gelp":
      newline;
      terminal.write("command not found: " + command);
      terminal.write("\r\ndid you mean 'help' ?\r\n");
      break;
    case "start":
    case "bat":
      newline;
      terminal.write("command not found: " + command);
      terminal.write("\r\ndid you mean 'bet' ?\r\n");
      break;
    case "clea":
    case "clera":
    case "lear":
      newline;
      terminal.write("command not found: " + command);
      terminal.write("\r\ndid you mean 'clear' ?\r\n");
      break;
    default:
      if (command !== "") {
        newline;
        terminal.write("command not found: " + command);
        terminal.write("\r\nto see available commands, use 'help'\r\n");
      }
      break;
  }
}
