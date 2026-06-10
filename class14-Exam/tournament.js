export class Tournament {
    constructor(id, name, game, entryFee, maxPlayers, registeredPlayers, status) {
        this.id = id;
        this.name = name;
        this.game = game;
        this.entryFee = entryFee;
        this.registeredPlayers = registeredPlayers;
        this.maxPlayers = maxPlayers;
        this.status = status;
    }

    get spotsLeft() {
        return this.maxPlayers - this.registeredPlayers;
    }

    get maxPlayers() {
        return this._maxPlayers;
    }

    set maxPlayers(value) {
        if (value <= 0 || value < this.registeredPlayers) {
            throw new Error(
                `Enter a valid number of Max players: greater than 0 and greater than ${this.registeredPlayers}`
            );
        }

        this._maxPlayers = value;
    }

    static fromObject(data) {
        return new Tournament(
            data.id,
            data.name,
            data.game,
            data.entryFee,
            data.maxPlayers,
            data.registeredPlayers,
            data.status
        );
    }
}