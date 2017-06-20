export class Player {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    number: number;
    positions: string[];
    bats: string;
    throws: string;
    picture: string;

    constructor(id, firstName, lastName, phone, email, number, positions, bats, throws) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.number = number;
        this.positions = positions;
        this.bats = bats;
        this.throws = throws;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
    getPositionString(): string {
        let result: string = '';

        for (var index = 0; index < this.positions.length; index++) {
            var currPosition = this.positions[index];
            if (index + 1 >= this.positions.length) {
                result = result + currPosition;
            } else {
                result = result + ' ' + currPosition + ', '
            }
        }

        return result;
    }
}