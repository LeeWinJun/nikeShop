import Link from "next/link"

const MenuBtn: React.FC = (menu:any) => {
    return (
        <>
            <li><Link href={menu}>{menu}</Link></li>
        </>
    )
}

export default MenuBtn;