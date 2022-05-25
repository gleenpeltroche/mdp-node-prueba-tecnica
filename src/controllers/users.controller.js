import { Users } from '../models/Users.js';
import differenceInYears from 'date-fns/differenceInYears/index.js';

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({order: [['id', 'DESC']]});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({message: "Ocurro un problema en el servidor."});
    }
}

export const getUsersAverageAge = async(req, res) => {
    try {
        const usersBirthDates = await Users.findAll({ attributes: ['birth_date'] });
        let AverageAge = 0;
        if(usersBirthDates.length > 0){
            let SumUserAges = 0;
            const dateNow = new Date(Date.now());
            usersBirthDates.forEach( userBD => {
                const numberDiff = differenceInYears(dateNow, new Date(userBD.birth_date))
                SumUserAges = SumUserAges + numberDiff;
            });
            AverageAge = SumUserAges/(usersBirthDates.length);
        }
        return res.status(200).json({avg: AverageAge});
    } catch (error) {
        return res.status(500).json({message: "Ocurro un problema en el servidor."});
    }
}

export const createNewUser = async(req, res) => {
    try {
        const {name, last_name, birth_date} = req.body;
        if(!name || !last_name || !birth_date){
            return res.status(400).json({ message: "No se enviaron todos los datos para crear el usuario." });
        }
        const newUser = await Users.create({
            name,
            last_name,
            birth_date
        })
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({message: "Ocurro un problema en el servidor."});
    }
    
}