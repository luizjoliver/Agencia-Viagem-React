export type UserType = {
    accountId: string
    email: string
    imageUrl: string
    joinedAt: string
    name: string
}

export type dashboardStats = {
    totalUsers: number;
    usersJoined: {
        currentMonth: number;
        lastMonth: number;
    };
    totalTrips: number;
    tripsCreated: {
        currentMonth: number;
        lastMonth: number;
    };
    userRole: {
        total: number;
        currentMonth: number;
        lastMonth: number;
    };
}
export type TrendResult = {
    trend: "increment" | "decrement" | "no change";
    percentage: number;
}

export type TripFormData = {
    country: string;
    travelStyle: string;
    interest: string;
    budget: string;
    duration: number;
    groupType: string;
}

export type Trips = {
    id: number;
    name: string;
    imageUrls: string[];
    itinerary: {
        location: string;
    }[];
    tags: string[];
    travelStyle: string;
    estimatedPrice: string;
}

// Componentes types 

export type StatsCardProps = {
    headerTitle: string;
    total: number;
    currentMonthCount: number;
    lastMonthCount: number;
}

export type TripCardProps = {
    id: string;
    name: string;
    location?: string;
    imageUrl: string;
    tags: string[];
    price: string;
}

