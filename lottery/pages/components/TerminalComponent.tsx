import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";

function TerminalComponent() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			const terminal = new Terminal({
				cursorStyle: "bar",
				cursorBlink: true,

				fontFamily: "DOS VGA",
			});
			const fitAddon = new FitAddon();

			terminal.loadAddon(fitAddon);
			terminal.open(ref.current);
			fitAddon.fit();
			terminal.focus();
		}
	}, [ref]);

	return <></>;
}

export default TerminalComponent;
