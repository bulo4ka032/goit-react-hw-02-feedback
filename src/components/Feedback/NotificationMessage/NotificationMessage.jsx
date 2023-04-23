import { Notify } from "./NotificationMessage.styled"

export const NotificationMessage = ({ message }) => {
    return (<Notify>
        &#127770; {message}
    </Notify>)
}