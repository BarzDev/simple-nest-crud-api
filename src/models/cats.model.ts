import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class Cat {
  @IsInt()
  @Min(1)
  @IsOptional()
  public id?: number;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public breed: string;

  @IsInt()
  @Min(0)
  public age: number;

  constructor(name: string, breed: string, age: number) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
}
