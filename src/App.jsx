import "./global.sass";
import Card from "./Card";

export default function App() {
  return (
    <div style={styles}>
      <Card
        heading="Banking Setup"
        complete={5}
        total={16}
        desc={["W-9(s)", "AOI", "CP-575 or 147-C CP-575 or 147-CM"]} // optional; max 4 inputs; 32 char max per input in CMS
      />
    </div>
  );
}

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#f5f5f5",
};
