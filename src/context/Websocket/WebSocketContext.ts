import { createContext, useContext } from "react";

export type WebSocketContextType = {
  messages: string[];
  sendMessage: (msg: string) => void;
};

export const WebSocketContext = createContext<WebSocketContextType | null>(null);

export const useWebSocketContext = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error("useWebSocketContext debe usarse dentro de un WebSocketProvider");
  }
  return context;
};
