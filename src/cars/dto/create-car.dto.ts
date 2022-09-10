import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'brand error' })
  readonly brand: string;

  @IsString()
  readonly model: string;
}
