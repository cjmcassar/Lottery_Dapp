import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from 'styles/Page.module.css';

const CheckState: NextPage = () => {
	const router = useRouter();
	const [state, setState] = useState({});

	const onSubmit = async () => {
		await axios('http://localhost:3000/check-state').then(
			(res) => setState(res.data)
			// console.log(res.data)
		);
	};

	return (
		<div className={styles.container}>
			<p className={styles.description}>Check state!</p>
			<p>State: {JSON.stringify(state)}</p>
			<div className={styles.grid}>
				<div className={styles.card}>
					<h2>Check State &rarr;</h2>
					<p></p>
					<button onClick={onSubmit}>Check</button>
					<button
						onClick={() => router.push('/')}
						style={{ marginLeft: '45px' }}
					>
						Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default CheckState;
