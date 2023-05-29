"use client";
import Link from 'next/link';
import Button from '../button';
import Logo from './../../public/assets/svgs/branding/logo.svg';
import styles from './styles.module.css';
import Image from 'next/image';

export default function Header() {
	return (
		<header className={styles["header"]}>
			<Logo />
			<ul>
				<li><Button type='button' style='tertiary' label='about me' action={() => { }} /></li>
				<li><Button type='button' style='tertiary' label='projects' action={() => { }} /></li>
				<li><Button type='button' style='tertiary' label='get in touch' action={() => { }} /></li>
			</ul>
			<form method='GET' action="/assets/documents/Saif Essam's Resume.pdf">
				<Button type='submit' style='secondary' label='resume' />
			</form>
		</header>
	);
}
