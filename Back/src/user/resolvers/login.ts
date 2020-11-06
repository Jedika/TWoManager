import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { HttpException, HttpStatus } from '@nestjs/common';

import { User } from '../user.entity';
import { UserService } from '../user.service';
import { LogInInput, LogInOutput } from '../user.types';
import { AuthsService } from '../../auths/auths.service';

@Resolver(() => User)
export class UsersLogIn {
  constructor(
    private userService: UserService,
    private authsService: AuthsService,
  ) {}

  @Mutation(() => LogInOutput)
  async login(@Args('input') input: LogInInput): Promise<LogInOutput> {
    const user = (await this.userService.getUserByLogin(
      input.login.toLocaleLowerCase(),
    )) as User;

    if (user) {
      const isMatch = await this.userService.pwdCompare(
        input.password,
        user.password,
      );

      if (isMatch) {
        if (user.status === true) {
          const { password, ...userOutput } = user;

          return {
            token: this.authsService.login(userOutput).access_token,
            type: user.type,
          };
        } else {
          throw new HttpException(
            "Votre login n'a pas encore été validé par l'administrateur",
            HttpStatus.UNAUTHORIZED,
          );
        }
      } else {
        throw new HttpException(
          "Le mot de passe ne correspond pas. Veuillez verifier s'il vous plaie.",
          HttpStatus.NOT_ACCEPTABLE,
        );
      }
    }

    throw new HttpException(
      'Ce login ne correspond pas!',
      HttpStatus.NOT_FOUND,
    );
  }
}