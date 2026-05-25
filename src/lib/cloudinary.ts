const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "demo";

export function cldImage(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: string;
    crop?: "fill" | "fit" | "limit";
  } = {},
) {
  const {
    width = 1600,
    height = 1000,
    quality = "auto",
    crop = "fill",
  } = options;

  const transformation = `f_auto,q_${quality},c_${crop},w_${width},h_${height}`;
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}/${publicId}.jpg`;
}
