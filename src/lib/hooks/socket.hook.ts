import { createContext, useContext, useEffect, useState } from 'react';

import { Socket, io } from 'socket.io-client';

type TSocketConfig = {
  url: string;
  path: string;
  token?: string;
  withCredentials?: boolean;
};

export const SocketContext = createContext<Socket | null>(null);

export const useSocketContext = (): Socket | null => useContext(SocketContext);

export const useSocketConnection = (config: TSocketConfig): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const s = io(config.url, {
      path: config.path,
      ...(config.token && { extraHeaders: { Authorization: `Bearer ${config.token}` } }),
      ...(config.withCredentials && { withCredentials: true }),
      reconnectionDelayMax: 2000,
    });

    s.on('connect', () => {
      setSocket(s);
    });

    s.on('connect_error', () => {});

    return () => {
      s.disconnect();
    };
  }, [config.url, config.path, config.token, config.withCredentials]);

  return socket;
};
