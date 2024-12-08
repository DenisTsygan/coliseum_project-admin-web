import Session from "@/components/Session"
//import IData from "@/types/IData";
import ISession from "@/types/ISession";

interface ComponentProps {
    data: Array<ISession>;//TODO thing about error on App.tsx Array<IData>;
    onSuccessLogout?: (id: string) => void 
}

function Sessions({data, onSuccessLogout}:ComponentProps) {
    return (
      <>
        <div>
        <h1 className='w-full text-6xl font-bold text-center'>Sessions</h1>
      <div className='flex flex-wrap justify-center'>
        {data.map(s=>
          <div key={s.id}>
            <Session session={s} funcOnSuccessLogout={onSuccessLogout}/>
          </div>
        )}
      </div>
       </div>
      </>
    )
  }
export default Sessions