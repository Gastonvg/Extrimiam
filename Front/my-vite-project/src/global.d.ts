interface Window {
    ethereum: {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: unknown[] }) => Promise<any>;
      on: (eventName: string, callback: (...args: any[]) => void) => void;
    };
  }