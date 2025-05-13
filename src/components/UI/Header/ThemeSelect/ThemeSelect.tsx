import React, { useState, useRef, useEffect } from "react";
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  Icon,
  Checkmark,
} from "./ThemeSelect.styled";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import { BsCircleHalf } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { useThemeContext } from "../../../../hooks/UseThemeContext"; // asegúrate de que esto apunta al archivo correcto

type ThemeOption = "light" | "dark" | "auto";

const icons = {
  light: <FiSun />,
  dark: <FiMoon />,
  auto: <BsCircleHalf />,
};

const labels = {
  light: "Light",
  dark: "Dark",
  auto: "Auto",
};

export const ThemeSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { themeName, setThemeName } = useThemeContext();

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (value: ThemeOption) => {
    setThemeName(value);
    setIsOpen(false);
  };

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        {icons[themeName]} {labels[themeName]} <IoMdArrowDropdown />
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {(Object.keys(labels) as ThemeOption[]).map((key) => (
            <DropdownItem key={key} onClick={() => handleSelect(key)}>
              <Icon>{icons[key]}</Icon>
              {labels[key]}
              {themeName === key && (
                <Checkmark>
                  <FaCheck size={12} />
                </Checkmark>
              )}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};
