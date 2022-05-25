import {DataTypes} from 'sequelize';
import {sequelize} from '../database/db.js';

export const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        required: true
    },
    last_name: {
        type: DataTypes.STRING,
        required: true
    },
    birth_date: {
        type: DataTypes.DATEONLY,
        required: true
    }
},
{
    timestamps: false
});