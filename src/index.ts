import { Plugin } from "@elizaos/core";
import { getTokenOverviewAction } from "./actions/tokenOverview";

export const marketAnalisysPlugin: Plugin = {
    name: "market-analisys",
    description: "Provides market analisys capabilities",
    actions: [getTokenOverviewAction],
    providers: [],
    evaluators: [],
};