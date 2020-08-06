/**
 * test
 * @param a - a number will multi
 * @returns multi a
 * @public
 */
export function test(a: number): number {
    return a*2
}

/**
 * Student
 * @public
 */
export class Student {
    public name: string
    public age: number = 6
    public score: number = 90

    /**
     * @returns string this.name
     */
    public getName (): string {
        return this.name
    }
}