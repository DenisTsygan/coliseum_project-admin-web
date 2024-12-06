import ISession from "@/types/ISession"

interface ComponentProps {
    session: ISession;
}
import User from "@/components/User"
function Session({session}:ComponentProps) {
    return (
      <>
        <div >
          <p>Id: {session.id}</p>
          <p>RefreshToken: {session.refreshToken}</p>
          <p>FingerPrint: {session.fingerPrint}</p>
          <p>Ip: {session.ip}</p>
          <p>UserAgent: {session.userAgent}</p>
          <div>
            <User user={session.user}/>
          </div>
        </div>
      </>
    )
  }
export default Session