// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0

import { RelayMessage, RelayMessageType } from './RelayMessage.js';
import { Web3Request } from './Web3Request.js';

export interface Web3RequestMessage extends RelayMessage<RelayMessageType.WEB3_REQUEST> {
  id: string;
  request: Web3Request;
}

export function Web3RequestMessage(params: Omit<Web3RequestMessage, 'type'>): Web3RequestMessage {
  return { type: RelayMessageType.WEB3_REQUEST, ...params };
}
