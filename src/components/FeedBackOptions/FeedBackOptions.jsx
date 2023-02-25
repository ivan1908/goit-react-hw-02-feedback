import PropTypes from 'prop-types';
import styles from './FeedBackOptions.module.css';


export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map(option => (
				<button key={option} className={styles.button} type="button" name={option} onClick={() => onLeaveFeedback(option)}>
					{option}
				</button>
			))}
		</>
	);
};

FeedBackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};