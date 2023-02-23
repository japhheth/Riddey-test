export const convertHexToRGBA = (hexCode: string, opacity?: number) => {
  let hex = hexCode.replace("#", "");
  let localOpacity = opacity || 1;

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (localOpacity > 1 && localOpacity <= 100) {
    localOpacity /= 100;
  }

  return `rgba(${r},${g},${b},${localOpacity})`;
};
