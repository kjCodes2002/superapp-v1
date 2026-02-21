export type FieldType = 'text' | 'number' | 'date';

export interface Field {
    name: string;
    label: string;
    type: FieldType;
}

export interface Entity {
    name: string;
    fields: Field[];
}

export interface Screen {
    type: 'list' | 'form';
    entity: string;
}

export interface AppSchema {
    appName: string;
    entities: Entity[];
    screens: Screen[];
}
