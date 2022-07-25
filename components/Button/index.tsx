import styles from "./button-style.module.scss";

interface Props {
  label: string;
  size?: "default" | "small";
  icon?: React.ReactElement;
  color?: "primary" | "tertiary";
}

export const Button: React.FC<Props> = (props) => {
  const size = props.size === "small" ? "small" : "default";
  const icon = props.icon ? "icon" : "";
  const color = props.color === "tertiary" ? "primary" : "primary";

  return (
    <button
      className={[
        styles["button-style"],
        styles[color],
        styles[size],
        styles[icon],
      ].join(" ")}
      type="button"
      onClick={() => {}}
    >
      <span>{props.label}</span>
      {icon && props.icon}
    </button>
  );
};
