import { getUser } from "~/appwrite/auth";
import Header from "~/components/Header";
import StatsCard from "~/components/StatsCard";
import TripCard from "~/components/TripCard";
import { allTrips, DashboardStats } from "~/constants";
import type { Route } from "./+types/dashboard";
import type { UserType } from "~/types";

export async function clientLoader() {
  const user = await getUser();

  return user;
}

export async function loader() {
  throw new Error("some error thrown in a loader");
}

export default function Dashboard({
  loaderData,
}: {
  loaderData: Route.ComponentProps;
}) {
  const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } =
    DashboardStats;

    //@ts-ignore
   const user = loaderData as UserType || null;

  
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Bem-vindo ${user.name ?? "Convidado"} 👋`}
        description="Monitore atividades , trends e destinos populares em tempo real!"
      />

      <section className="flex flex-col gap-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <StatsCard
            headerTitle="Total de usuários"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />

          <StatsCard
            headerTitle="Total de Viagens"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
          />

          <StatsCard
            headerTitle="Usuários ativos"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">
          Viagens Criadas{" "}
        </h1>
        <div className="trip-grid">
          {allTrips.slice(0, 4).map((trip, index) => (
            <TripCard
              key={trip.id}
              id={trip.id.toString()}
              imageUrl={trip.imageUrls[0]}
              location={trip?.itinerary[0]?.location ?? ""}
              name={trip.name}
              price={trip.estimatedPrice}
              tags={trip.tags}
            />
          ))}
        </div>
      </section>
     
    </main>
  );
}
