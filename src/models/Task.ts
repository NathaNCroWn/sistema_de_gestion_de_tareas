import User from "./User";
import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
} from "sequelize-typescript";


@Table({
  tableName: "tasks",
})
export default class Task extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;
 
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  expirationDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
}
