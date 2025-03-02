import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css"

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    const statusClsx = clsx(css.text, isOnline ? css.online : css.offline);

    return (
<div className={css.friendListItem}>
            
  <img src={avatar} alt={`Avatar ${name}`} width="48" />
            <p>{name}</p>
            <p className={statusClsx}> {isOnline ? "Online" : "Offline"} </p>
        
</div> 
    )
   

}