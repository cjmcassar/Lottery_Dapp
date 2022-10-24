import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from 'styles/Page.module.css';

const TopUpAccountTokens = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		index: '',
		amount: '',
	});
	const [result, setResult] = useState({});

	const onSubmit = async () => {
		await axios({
			method: 'post',
			url: 'http://localhost:3000/top-up-account-tokens',
			data: formData,
		}).then((res) => setResult(res));
	};

	return (
		<>
			<div className={styles.container}>
				<p className={styles.description}>Make printer go brr</p>

				<p>Result: {JSON.stringify(result)}</p>
				<div className={styles.grid}>
					<div className={styles.card}>
						<h2>Top up account tokens &rarr;</h2>
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
								<label>
									Amount:{' '}
									<input
										onChange={(e) =>
											setFormData({ ...formData, amount: e.target.value })
										}
										type='number'
									/>
								</label>
							</p>
							<p>
								<button onClick={onSubmit}>Top up</button>
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
		</>
	);
};

export default TopUpAccountTokens;
