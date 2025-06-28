// Types for FieldController and related components

export type FieldDispatcherPayload = {
  stateKey: string;
  value: string;
};

export type ValidationDispatcherPayload = {
  stateKey: string;
  value: boolean;
};

export type StateValueGetter = (state: unknown, key: string) => string;

// Function types for better reusability
export type FieldDispatcher = (payload: FieldDispatcherPayload) => void;
export type ValidationDispatcher = (payload: ValidationDispatcherPayload) => void;
