import buttonStyles from './button.module.css'
export const Button = ({children}) => {
    return (
        <button className={buttonStyles.button}>{children}</button>
    )
}