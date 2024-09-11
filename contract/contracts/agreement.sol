// SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.9;

contract TrustLinker {
    
    // events
    event AgreementCreated(uint256 _id, string _agreement, address partyA, address partyB);
    event partyBSigned(uint256 _id, string _agreement, address partyA, address partyB);

    // state variables
    uint256 public agreementCount;

    mapping (uint256 => Agreement) public contracts;
    
    struct Agreement {
        uint256 id; 
        string agreement;
        address partyA;
        address partyB;
        bool isSignedByA;
        bool isSignedByB;  
    }

    function createAgreement (string memory _agreement, address _partyB) external {
        
        uint256 _id = agreementCount + 1;

        // create Agreement
        contracts[_id] = Agreement({
            id: _id,
            agreement: _agreement,
            partyA: msg.sender,
            partyB: _partyB,
            isSignedByA: true,
            isSignedByB: false
        });

        // increment agreement count
        agreementCount += 1;

        // emit createAgreement event
        emit AgreementCreated(_id, _agreement, msg.sender, _partyB);
    }

    function signAgreementPartyB (uint256 _agreementId) external {

        Agreement storage _agreement = contracts[_agreementId];

        require(msg.sender == _agreement.partyB, "Caller not expected party");

        _agreement.isSignedByB = true;

        emit partyBSigned(_agreementId, _agreement.agreement, _agreement.partyA, msg.sender);
    }
}