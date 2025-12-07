import { useEffect } from "react";
import type { TimerMode } from "../types/timer";

export function useDocumentTitle(timeLeft: number, mode: TimerMode) {
    useEffect(() => {
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');

        const modeText = {
            focus: 'Foco',
            shortBreak: 'Pausa Curta',
            longBreak: 'Pausa Longa'
        }[mode];

        document.title = `${minutes}:${seconds} - ${modeText} | Pomodoro`;

        return () => {
            document.title = 'Pomodoro Dev';
        };
    }, [timeLeft, mode]);
}