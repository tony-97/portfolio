export default function Icon({ fontSize }: { fontSize: number | string }) {
  return (
    <div
      style={{
        fontSize,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
      }}
    >
      &lt;T&gt;
    </div>
  );
}
