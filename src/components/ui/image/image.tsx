type Props = {
  src: string;
  maxWidth?: string;
  maxHeight?: string;
};

export const Image = ({
  src,
  maxWidth = "100%",
  maxHeight = "300px",
}: Props) => {
  return (
    <img
      src={src}
      alt="image"
      style={{
        maxWidth,
        maxHeight,
        borderRadius: "4px",
        border: "1px solid #e5e7eb",
      }}
    />
  );
};
