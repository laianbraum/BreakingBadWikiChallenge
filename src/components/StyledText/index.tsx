interface StyledTextProps {
  fontSize: string;
  color: string;
  margin: string;
}

export const StyledText = ({
  color,
  margin,
  fontSize,
  children,
}: React.PropsWithChildren<StyledTextProps>) => {
  return (
    <span
      style={{
        width: "100%",
        textOverflow: "clip",

        color,
        margin,
        fontSize,
        fontFamily: "'Montserrat', 'Roboto', sans-serif",
      }}
    >
      {children}
    </span>
  );
};
