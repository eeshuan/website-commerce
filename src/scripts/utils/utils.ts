export let formatNumberString = (amount: number) => {
    return `${amount.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;
}