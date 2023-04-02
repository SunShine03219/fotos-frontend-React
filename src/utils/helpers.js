const hasFileExtension = (str) => {
  const regex = /\.\w+$/;
  return regex.test(str);
};

const formatText = (text, maxLength) => {
  const formatedText = decodeURIComponent(text);
  const truncatedText = formatedText.length > maxLength ? formatedText.slice(0, maxLength) + "..." : formatedText;
  return truncatedText;
};

export { hasFileExtension, formatText };
