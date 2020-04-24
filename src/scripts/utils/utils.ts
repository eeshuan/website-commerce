export let formatNumberString = (amount: number) => {
    return `${amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}