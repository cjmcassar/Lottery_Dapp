import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from 'styles/Page.module.css';

const OpenBets: NextPage = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		duration: '',
	});
	const [txHash, setTxHash] = useState('');

	const onSubmit = async () => {
		await axios({
			method: 'post',
			url: 'http://localhost:3000/open-bets',
			data: formData,
		}).then((res) => setTxHash(res.data));
	};

	return (
		<div className={styles.container}>
			<p className={styles.description}>Open bets</p>
			<p>Transaction Hash: {txHash}</p>
			<div className={styles.grid}>
				<div className={styles.card}>
					<h2>Open Bets &rarr;</h2>
					<p></p>
					<form>
						<p>
							<label>
								Duration:{' '}
								<input
									onChange={(e) => setFormData({ duration: e.target.value })}
									type='number'
								/>
							</label>
						</p>
						<p>
							<button onClick={onSubmit}>Open</button>
							<button
								onClick={() => router.push('/')}
								style={{ marginLeft: '45px' }}
							>
								Back
							</button>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default OpenBets;
