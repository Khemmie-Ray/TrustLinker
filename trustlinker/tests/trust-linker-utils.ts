import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AgreementCreated,
  partyBSigned
} from "../generated/TrustLinker/TrustLinker"

export function createAgreementCreatedEvent(
  _id: BigInt,
  _agreement: string,
  partyA: Address,
  partyB: Address
): AgreementCreated {
  let agreementCreatedEvent = changetype<AgreementCreated>(newMockEvent())

  agreementCreatedEvent.parameters = new Array()

  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam("_agreement", ethereum.Value.fromString(_agreement))
  )
  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam("partyA", ethereum.Value.fromAddress(partyA))
  )
  agreementCreatedEvent.parameters.push(
    new ethereum.EventParam("partyB", ethereum.Value.fromAddress(partyB))
  )

  return agreementCreatedEvent
}

export function createpartyBSignedEvent(
  _id: BigInt,
  _agreement: string,
  partyA: Address,
  partyB: Address
): partyBSigned {
  let partyBSignedEvent = changetype<partyBSigned>(newMockEvent())

  partyBSignedEvent.parameters = new Array()

  partyBSignedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  partyBSignedEvent.parameters.push(
    new ethereum.EventParam("_agreement", ethereum.Value.fromString(_agreement))
  )
  partyBSignedEvent.parameters.push(
    new ethereum.EventParam("partyA", ethereum.Value.fromAddress(partyA))
  )
  partyBSignedEvent.parameters.push(
    new ethereum.EventParam("partyB", ethereum.Value.fromAddress(partyB))
  )

  return partyBSignedEvent
}
