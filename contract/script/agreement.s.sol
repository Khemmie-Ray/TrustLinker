// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import {Script, console} from "forge-std/Script.sol";

import {TrustLinker} from "../contracts/agreement.sol";

contract DeployTrustLinker is Script {

    TrustLinker trustLinker; 

    function run() external {
        vm.startBroadcast();
        
        trustLinker = new TrustLinker();

        vm.stopBroadcast();
    }
}