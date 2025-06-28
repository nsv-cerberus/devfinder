import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllUsersQuery } from '../get-all-users.query';
import { UserService } from '../../user.service';
import { User } from '../../user.entity';

@QueryHandler(GetAllUsersQuery)
export class GetAllUsersHandler implements IQueryHandler<GetAllUsersQuery> {
  constructor(private readonly userService: UserService) {}

  async execute(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
