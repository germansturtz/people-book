export class Person {
    private _id: string;
    private _name: string;
    private _lastname: string;
    private _birthdate: Date;

    constructor(id: string, name: string, lastname: string, birthdate: Date) {
        this._id = id;
        this._name = name;
        this._lastname = lastname;
        this._birthdate = birthdate;
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get lastname(): string {
        return this._lastname;
    }

    public get birthdate(): Date {
        return this._birthdate;
    }

    public update(name: string, lastname: string, birthdate: Date) {
        this.validateInvariants(name, lastname, birthdate);

        this._name = name;
        this._lastname = lastname;
        this._birthdate = birthdate;
    }

    public validateInvariants(name: string, lastname: string, birthdate: Date) {
        const errors: Error[] = [];
        if ((name ?? '') === '') {
            errors.push(new Error('Name is required'));
        }
        if ((lastname ?? '') === '') {
            errors.push(new Error('Lastname is required'));
        }
        if (!birthdate) {
            errors.push(new Error('Birthdate is required'));
        }
        var now = new Date();
        if (birthdate > now) {
            errors.push(new Error('Birthdate can not be a future Date'));
        }

        if (errors.length > 0) {
            throw new AggregateError(errors, 'Errors for Person');
        }
    }
}
