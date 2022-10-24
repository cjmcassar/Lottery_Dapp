import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from 'styles/Page.module.css';

const Withdraw: NextPage = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		amount: '',
	});
	const [result, setResult] = useState({});

	const onSubmit = async () => {
		await axios({
			method: 'post',
			url: 'http://localhost:3000/withdraw',
			data: formData,
		}).then((res) => setResult(res));
	};

	return (
		<div className={styles.container}>
			<p className={styles.description}>Withdraw!</p>
			<p>Result: {JSON.stringify(result)}</p>
			<div className={styles.grid}>
				<div className={styles.card}>
					<h2>Withdraw &rarr;</h2>
					<p></p>
					<form>
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
							<button onClick={onSubmit}>Withdraw</button>
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

export default Withdraw;
