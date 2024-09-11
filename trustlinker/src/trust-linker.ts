import {
  AgreementCreated as AgreementCreatedEvent,
  partyBSigned as partyBSignedEvent
} from "../generated/TrustLinker/TrustLinker"
import { AgreementCreated, partyBSigned } from "../generated/schema"

export function handleAgreementCreated(event: AgreementCreatedEvent): void {
  let entity = new AgreementCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._agreement = event.params._agreement
  entity.partyA = event.params.partyA
  entity.partyB = event.params.partyB

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlepartyBSigned(event: partyBSignedEvent): void {
  let entity = new partyBSigned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._agreement = event.params._agreement
  entity.partyA = event.params.partyA
  entity.partyB = event.params.partyB

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
