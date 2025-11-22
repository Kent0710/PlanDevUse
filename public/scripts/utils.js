export function parseAndPadValue(valueElement) {
    let currentValue = parseInt(valueElement.textContent, 10);
    return currentValue.toString().padStart(2, '0');
}