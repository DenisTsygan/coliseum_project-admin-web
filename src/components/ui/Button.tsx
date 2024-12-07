function Button({ label , props_notify_parent, color }: { label: string , props_notify_parent: Function, color?:string }) {
    return (
        <>
            <button className={ color ? color :" bg-slate-500 "}  onClick={()=>{props_notify_parent()}}>{label}</button>
        </>
    )
}
export default Button