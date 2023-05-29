"use client";
import Avatar from '@/public/assets/images/avatar.jpg';
import Texts from "@/public/assets/jsons/texts.json";
import { CaretDown } from '@phosphor-icons/react';
import Image from "next/image";
import Button from "../button";
import styles from "./styles.module.css";

export default function Hero() {
	return (
		<section className={styles["hero"]}>
			<div className={styles["body"]}>
				<div className={styles["information"]}>
					<div className={styles["header"]}>
						<h1>{Texts["title"]}</h1>
						<h4>{Texts["sub-title"]}</h4>
					</div>
					<div className={styles["body"]}>
						<p>{Texts["description"]}</p>
					</div>
					<div className={styles["footer"]}>
						<Button type="button" style="primary" label="let's get in touch" action={() => { }} />
					</div>
				</div>
				<div className={styles["image"]}>
					<Image src={Avatar} alt="Saif Essam" />
				</div>
			</div>
			<div className={styles["footer"]}><CaretDown weight="light" /> </div>
		</section>
	);
}
