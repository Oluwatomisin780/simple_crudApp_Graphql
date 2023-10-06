
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateSimpleCrudAppInput {
    task: string;
    description: string;
}

export class UpdateSimpleCrudAppInput {
    id: number;
    task?: Nullable<string>;
    description?: Nullable<string>;
}

export class SimpleCrudApp {
    id: number;
    task: string;
    description?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract simpleCrudApps(): SimpleCrudApp[] | Promise<SimpleCrudApp[]>;

    abstract simpleCrudApp(id: number): Nullable<SimpleCrudApp> | Promise<Nullable<SimpleCrudApp>>;
}

export abstract class IMutation {
    abstract createSimpleCrudApp(createSimpleCrudAppInput: CreateSimpleCrudAppInput): SimpleCrudApp | Promise<SimpleCrudApp>;

    abstract updateSimpleCrudApp(updateSimpleCrudAppInput: UpdateSimpleCrudAppInput): SimpleCrudApp | Promise<SimpleCrudApp>;

    abstract removeSimpleCrudApp(id: number): Nullable<SimpleCrudApp> | Promise<Nullable<SimpleCrudApp>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
