import React, { useEffect, useRef, useState } from "react";
import { WebSocketContext } from "./WebSocketContext";

type Props = {
  children: React.ReactNode;
};

export const WebSocketProvider: React.FC<Props> = ({ children }) => {
  const socketRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socket = new WebSocket("wss://localhost:7073/ws");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("🟢 WebSocket conectado");
    };

    socket.onmessage = (event) => {
      console.log("📨 Mensaje recibido:", event.data);
      setMessages((prev) => [...prev, event.data]);
    };

    socket.onerror = (error) => {
      // Aquí puedes filtrar o manejar mejor los errores si quieres
      console.error("⚠️ Error WebSocket:", error);
    };

    socket.onclose = (event) => {
      console.log(`🔴 WebSocket cerrado (code: ${event.code}, reason: ${event.reason})`);
    };

    return () => {
      if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING) {
        socket.close();
      }
      socketRef.current = null;
      console.log("Cleanup: WebSocket cerrado");
    };
  }, []);

  const sendMessage = (msg: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(msg);
    } else {
      console.warn("Intento de enviar mensaje pero WebSocket no está abierto");
    }
  };

  return (
    <WebSocketContext.Provider value={{ messages, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};
