const hasFileExtension = str => {
    const regex = /\.\w+$/
    return regex.test(str)
}

const formatText = (text, maxLength) => {
    const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    return truncatedText.replace(/%/g, " ");
}

export { hasFileExtension, formatText}