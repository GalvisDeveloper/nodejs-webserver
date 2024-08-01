import { prisma } from "../../../../data/postgres";
import { CreateTodoDto, TodoDatasource, TodoEntity, UpdateTodoDto } from "../../../../domain";


export class TodoDataSourcePrismaImpl implements TodoDatasource {

    async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        const todo = await prisma.todo.create({
            data: createTodoDto,
        })

        return TodoEntity.fromObject(todo);
    }

    async getAll(): Promise<TodoEntity[]> {
        const todos = await prisma.todo.findMany();
        return todos.map(TodoEntity.fromObject);
    }

    async findById(id: number): Promise<TodoEntity> {
        const todo = await prisma.todo.findUnique({ where: { id } });
        if (!todo) throw new Error(`Todo with id ${id} not found`);
        return TodoEntity.fromObject(todo);
    }

    async update(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        await this.findById(updateTodoDto.id);
        const updatedTodo = await prisma.todo.update({
            where: { id: updateTodoDto.id },
            data: updateTodoDto!.values,
        });

        return TodoEntity.fromObject(updatedTodo);
    }

    async delete(id: number): Promise<TodoEntity> {
        await this.findById(id);
        const deletedTodo = await prisma.todo.delete({
            where: { id },
        });

        return TodoEntity.fromObject(deletedTodo);
    }

}