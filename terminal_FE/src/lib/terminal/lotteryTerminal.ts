import { NextRouter } from "next/router";
import { Terminal as Terminal_ } from "xterm";

export type TerminalCommand =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "help"
  | string;

type HomeScreenConfig = {
  command: TerminalCommand;

  terminal: Terminal_;
  router: NextRouter;
};

export async function executeCommand({
  command,
  terminal,
  router,
}: HomeScreenConfig) {
  const trimmedCommand = command.trim();
  const newline = terminal.write("\r\n");

  switch (trimmedCommand) {
    case "0":
      terminal.write("\r\nResetting terminal...");
      setTimeout(() => {
        terminal.write("\r\nTerminal reset!");
        router.push("/");
      }, 500);

      break;
    case "1":
      terminal.write("\r\nChecking state...");
      // check state function goes here
      break;
    case "2":
      terminal.write("\r\nOpening bets...");
      // open bets function goes here
      break;
    case "3":
      terminal.write("\r\nTop up account tokens...");
      // top up account tokens function goes here
      break;
    case "4":
      terminal.write("\r\nBet with account...");
      // bet with account function goes here
      break;
    case "5":
      terminal.write("\r\nClosing bets...");
      // close bets function goes here
      break;
    case "6":
      terminal.write("\r\nChecking player prize...");
      // check player prize function goes here
      break;
    case "7":
      terminal.write("\r\nWithdrawing...");
      // withdraw function goes here
      break;
    case "8":
      terminal.write("\r\nBurning tokens...");
      // burn tokens function goes here
      break;
    case "help":
      terminal.write("\r\nAvailable commands:");
      terminal.write("\r\n0: Reset terminal");
      terminal.write("\r\n1: Check state");
      terminal.write("\r\n2: Open bets");
      terminal.write("\r\n3: Top up account tokens");
      terminal.write("\r\n4: Bet with account");
      terminal.write("\r\n5: Close bets");
      terminal.write("\r\n6: Check player prize");
      terminal.write("\r\n7: Withdraw");
      terminal.write("\r\n8: Burn tokens");
      break;
    case "hell":
    case "hel":
    case "helpp":
      newline;
      terminal.write("command not found: " + command);
      terminal.write("\r\ndid you mean 'help' ?\r\n");
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
