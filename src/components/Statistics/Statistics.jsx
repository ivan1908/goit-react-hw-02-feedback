import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
        <> 
            <ul className={styles.list}>
			    <li className={styles.item}>Good: {good}</li>
			    <li className={styles.item}>Neutral: {neutral}</li>
			    <li className={styles.item}>Bad: {bad}</li>
			</ul>
			<p className={styles.total}>Total: {total}</p>
			<p className={styles.feedback}>Positive feedback: {positivePercentage} %</p>
		</>
	)
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired
};