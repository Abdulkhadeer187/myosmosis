
import './header.css'

const Header=(props)=>{
    const{details,isActive,change}=props
    const changecss=isActive ? 'header-items2':'header-items'

    const changeheader=()=>{
        change(details)
    }
    return(
    <li>
        <button className={changecss} onClick={changeheader}>
        {details.name}
        </button>
    </li>)

}

export default Header