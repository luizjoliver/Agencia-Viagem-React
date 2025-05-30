import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { TrendResult } from "~/types";


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const calculateTrendPercentage = (
    countOfThisMonth: number,
    countOfLastMonth: number
): TrendResult => {
    if (countOfLastMonth === 0) {
        return countOfThisMonth === 0
            ? { trend: "no change", percentage: 0 }
            : { trend: "increment", percentage: 100 };
    }

    const change = countOfThisMonth - countOfLastMonth;
    const percentage = Math.abs((change / countOfLastMonth) * 100);

    if (change > 0) {
        return { trend: "increment", percentage };
    } else if (change < 0) {
        return { trend: "decrement", percentage };
    } else {
        return { trend: "no change", percentage: 0 };
    }
};

export function getFirstWord(input: string = ""): string {
    return input.trim().split(/\s+/)[0] || "";
}