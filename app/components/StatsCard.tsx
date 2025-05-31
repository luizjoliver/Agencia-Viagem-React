import { calculateTrendPercentage, cn } from "~/lib/utils";
import type { StatsCardProps } from "~/types";


export default function StatsCard({headerTitle,currentMonthCount,lastMonthCount,total}:StatsCardProps) {

    const {percentage,trend} = calculateTrendPercentage(currentMonthCount,lastMonthCount)

    const isDecrement = trend === 'decrement'
  return (
    <article className="stats-card">
        <h3 className="text-base font-medium">{headerTitle}</h3>

        <div className="content">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-semibold">{total}</h2>
                <div className="flex items-center gap-2">
                    <figure className="flex items-center gap-1">
                        <img src={`/assets/icons/${isDecrement ?'arrow-down-red.svg':'arrow-up-green.svg'}`} className="size-5" alt="seta"/>
                        <figcaption className={cn('text-sm font-medium', 
                            isDecrement ? 'text-red-500' : 'text-success-700'
                        )}>
                            {Math.round(percentage)}%
                        </figcaption>
                        <p className="text-sm font-medium text-gray-100 truncate">vs último mês</p>
                    </figure>
                </div>
            </div>
            <img src={`/assets/icons/${isDecrement ? 'decrement.svg' : 'increment.svg'}`} className="md:h-32 xl:w-32  w-3/4 h-3/4"
            alt="gráfico comparativo"/>
        </div>
    </article>
  )
}

