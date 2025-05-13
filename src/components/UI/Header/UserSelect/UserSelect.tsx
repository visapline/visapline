import React, { useState, useRef, useEffect } from "react";
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "./UserSelect.styled";

import { FiUser, FiLogOut } from "react-icons/fi";

export const UserSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        <Avatar />
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          <DropdownItem onClick={() => alert("Ver perfil")}>
            <FiUser size={16} />
            Perfil
          </DropdownItem>
          <DropdownItem onClick={() => alert("Cerrar sesión")}>
            <FiLogOut size={16} />
            Cerrar sesión
          </DropdownItem>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};
