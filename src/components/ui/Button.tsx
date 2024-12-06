function Button({ label , props_notify_parent }: { label: string , props_notify_parent: Function }) {
    return (
        <>
            <button className=" bg-slate-500"  onClick={()=>{props_notify_parent()}}>{label}</button>
        </>
    )
}
export default Button