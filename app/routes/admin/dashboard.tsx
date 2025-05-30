import Header from "~/components/Header";

export default function Dashboard() {

  const mockUser = {name:'Luiz'}
  return (
    <main className="dashboard wrapper">
      <Header title={`Bem-vindo ${mockUser.name ?? 'Convidado'} 👋`} description="Monitore atividades , trends e destinos populares em tempo real!"/>
      Dasbhoard page
    </main>
  )
}
