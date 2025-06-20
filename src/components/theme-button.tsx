"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Palette } from "lucide-react";

const themes = [
    { id: "light", label: "Light Mode", icon: <Sun size={20} /> },
    { id: "dark", label: "Dark Mode", icon: <Moon size={20} /> },
    { id: "pastel", label: "Pastel Mode", icon: <Palette size={20} /> },
];

export const ChangeThemeButton = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && !theme) {
            const systemTheme =
                resolvedTheme ||
                (window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light");
            setTheme(systemTheme);
        }
        if (mounted) {
            // So that we have transition but not on page load
            document.documentElement.classList.add("theme-transition");
        }
    }, [mounted, theme, resolvedTheme, setTheme]);

    if (!mounted) {
        return (
            <button
                className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                aria-label="Loading Theme..."
            >
                
            </button>
        );
    }

    const effectiveTheme = resolvedTheme || theme;
    const currentIndex = themes.findIndex((t) => t.id === effectiveTheme);
    const currentTheme = themes[currentIndex] || themes[0];
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    const handleClick = () => {
        setTheme(nextTheme.id);
    };

    return (
        <button
            onClick={handleClick}
            className={`flex items-center justify-center w-10 h-10 rounded-md transition-colors
        bg-gray-200 text-gray-800 hover:bg-gray-300
        dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600`}
            aria-label={`Switch to ${nextTheme.label}`}
            title={currentTheme.label}
        >
            {currentTheme.icon}
        </button>
    );
};