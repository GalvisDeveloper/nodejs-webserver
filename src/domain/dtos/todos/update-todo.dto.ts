

export class UpdateTodoDto {

    private constructor(
        public readonly id: number,
        public readonly text?: string,
        public readonly completedAt?: string
    ) { }

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.text) returnObj.text = this.text;
        if (this.completedAt) returnObj.completedAt = this.completedAt;

        return returnObj;
    }

    static create(props: { [key: string]: any }): [string?, UpdateTodoDto?] {
        const { id, text, completedAt } = props;

        let newCompletedAt = completedAt;
        if (isNaN(id)) return ['Invalid id', undefined];

        if (completedAt) {
            newCompletedAt = new Date(completedAt);
            if (newCompletedAt.toString() === 'Invalid Date') return ['Invalid date', undefined];
        }

        console.log(text, newCompletedAt)

        return [undefined, new UpdateTodoDto(id, text, newCompletedAt)];
    }
}