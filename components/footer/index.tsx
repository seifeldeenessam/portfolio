"use client";
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import Link from 'next/link';
import styles from './styles.module.css';

export default function Footer() {
	return (
		<footer className={styles["footer"]}>
			<span>Copyrights © 2023 - All rights reserved</span>
			<ul>
				<li><Link href="https://www.linkedin.com/in/saifeldeenessam/" referrerPolicy='no-referrer'><LinkedinLogo weight='light' /></Link></li>
				<li><Link href="https://github.com/saifessam" referrerPolicy='no-referrer'><GithubLogo weight='light' /></Link></li>
			</ul>
		</footer>
	);
}
