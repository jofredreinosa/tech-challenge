import { ApiProperty } from "@nestjs/swagger";

export class Element {
  @ApiProperty()
  public description!: string;

  @ApiProperty()
  public id!: string;

  @ApiProperty()
  public name!: string;

  @ApiProperty()
  public status!: string;

  @ApiProperty()
  public type!: string;
}
