import type { Address, Hex } from 'viem'

export type SignResult = [signature: Hex, address: Address]
export type TxType = 'CALL' | 'CREATE' | 'CREATE2'
export type AdditionalContract = {
  transactionType: TxType
  address: Address
  initCode: Hex
}

export type SuccessOutput = Hex | string | Hex[]
export type Transaction = {
  type: Hex
  from: Address
  to?: Address
  value: Hex
  input: Hex
  nonce: Hex
  accessList: any[]
  gas: Hex
}

export type TxBroadcast = {
  hash: string | null
  transactionType: TxType
  contractName: string | null
  contractAddress: Address | null
  function: string | null
  arguments: string[] | null
  transaction: Transaction
  additionalContracts: AdditionalContract[]
  isFixedGasLimit: boolean
}

type Log = {
  address: Address
  topics: Hex[]
  data: Hex
  blockHash: Hex
  blockNumber: Hex
  transactionHash: Hex
  transactionIndex: Hex
  logIndex: Hex
  removed: boolean
}
export type Receipt = {
  transactionHash: Hex
  transactionIndex: Hex
  blockHash: Hex
  blockNumber: Hex
  from: Address
  to: Address | null
  cumulativeGasUsed: Hex
  gasUsed: Hex
  contractAddress: Address
  logs: Log[]
  status: Hex
  logsBloom: Hex
  type: Hex
  effectiveGasPrice: Hex
}

export type BroadcastJSON = {
  transactions: TxBroadcast[]
  receipts: Receipt[]
  chain: number
  timestamp: number
  commit: string
  libraries: any[]
  pending: any[]
  returns: any
}

export type SafeInfoResponse = {
  address: Address
  nonce: number
  threshold: number
  owners: Address[]
  masterCopy: Address
  modules: Address[]
  fallbackHandler: Address
  guard: Address
  version: string
}
