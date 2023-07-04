import css from './Advantage.module.css'

const Advantage = ({children, ...props}) => {

	return (
		<div className={css.wrapper}>	
			<img className={css.image} src={props.image} />	
			<p className={css.text}>{children}</p>
		</div>
	)
}

export default Advantage 