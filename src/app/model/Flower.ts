export class Flower {

    private names: string[]  // the flower name in multiple languages
    public size: number
    public id: number

    constructor(id: number, names: string[]) {
        this.id = id
        this.names = names;
    }

    public getName(language: number): string {
        return this.names[language] ? this.names[language] : this.names[0]
    }

}