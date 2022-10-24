import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from 'styles/Page.module.css';

const CloseBets: NextPage = () => {
	const router = useRouter();
	const [state, setState] = useState({});

	const onSubmit = async () => {
		await axios({
			method: 'post',
			url: 'http://localhost:3000/close-bets',
		}).then(
			(res) => setState(res.data)
			// console.log(res.data)
		);
	};

	return (
		<div className={styles.container}>
			<p className={styles.description}>Close bets!</p>
			<p>State: {JSON.stringify(state)}</p>
			<div className={styles.grid}>
				<div className={styles.card}>
					<h2>Close bets &rarr;</h2>
					<p></p>
					<button onClick={onSubmit}>Close</button>
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

export default CloseBets;
