import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from 'styles/Page.module.css';

const Bet: NextPage = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		index: '',
	});
	const [result, setResult] = useState({});

	const onSubmit = async () => {
		await axios({
			method: 'post',
			url: 'http://localhost:3000/bet',
			data: formData,
		}).then((res) => setResult(res));
	};

	return (
		<div className={styles.container}>
			<p className={styles.description}>Bet!</p>
			<p>Result: {JSON.stringify(result)}</p>
			<div className={styles.grid}>
				<div className={styles.card}>
					<h2>Bet &rarr;</h2>
					<p></p>
					<form>
						<p>
							<label>
								Index:{' '}
								<input
									onChange={(e) =>
										setFormData({ ...formData, index: e.target.value })
									}
									type='number'
								/>
							</label>
						</p>
						<p>
							<button onClick={onSubmit}>Bet</button>
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

export default Bet;
