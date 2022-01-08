import { useState } from "react";
import reactCSS from "reactcss";
import { TwitterPicker } from "react-color";

export default function ColorPicker({ color, setColor }) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const defaultColors = [
    "#FF6900",
    "#FCB900",
    "#7BDCB5",
    "#00D084",
    "#bb0a21",
    "#0693E3",
    "#8e6e53",
    "#EB144C",
    "#2274a5",
    "#9900EF",
  ];

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
  };
  const styles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: ` ${color}`,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });
  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <TwitterPicker
            colors={defaultColors}
            color={color}
            onChange={handleColorChange}
          />
        </div>
      ) : null}
    </div>
  );
}
