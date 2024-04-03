import { AttendeeList } from "./components/attendee-list"
import { Header } from "./components/header"

// interface MeuBotaoProps{
//   texto: string
// }

// function MeuBotao(props: MeuBotaoProps){
//   return <button className="bg-orange-400 h-10 px-12 rounded-md ">{props.texto}</button>
// }

export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 px-2.5 flex flex-col gap-5">
      <Header/>
      <AttendeeList/>
    </div>
  )
}

