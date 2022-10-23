import dynamic from "next/dynamic";

export const LotteryTerminal = dynamic(() => import("./XTermLottery"), {
  ssr: false,
});
