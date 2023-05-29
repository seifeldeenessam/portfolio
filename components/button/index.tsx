import styles from './styles.module.css';

type Props = {
	style: "primary" | "secondary" | "tertiary";
	type: "button" | "submit";
	label: string;
	action?: () => void;
};

export default function Button({ style, type, label, action }: Props) {
	return (
		<button type={type} className={styles["button"]} data-style={style} onClick={action}>{label}</button>
	);
}
