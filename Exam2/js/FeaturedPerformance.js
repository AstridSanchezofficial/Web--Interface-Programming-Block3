import Performance from "./Performance.js";

export class FeaturedPerformance extends Performance {
    constructor(
        id,
        title,
        artist,
        time,
        stage,
        ticketPrice,
        ticketsRemaining,
        featured
    ) {
        super(
            id,
            title,
            artist,
            time,
            stage,
            ticketPrice,
            ticketsRemaining,
            featured
        );

        this.featured = Boolean(featured);
    }

    get lineupLabel() {
        return "Featured Performance";
    }
}