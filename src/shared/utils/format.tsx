interface IFormatProps {
    number: number,
    textFormat: [string, string, string]
}

export function Format({ number, textFormat }: IFormatProps) {
    const count = ((number === 11) || (number === 12) || (number === 13) || (number === 14))
        ? `${number} ${textFormat[0]}`
        : number % 10 === 1
            ? `${number} ${textFormat[1]}`
            : (number % 10 === 2) || (number % 10 === 3) || (number % 10 === 4)
                ? `${number} ${textFormat[2]}`
                : `${number} ${textFormat[0]}`
    return count
}
