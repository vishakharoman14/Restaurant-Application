import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName:{
        type: String,
      required: true,
      minLenght:[3,"First name must contain at least 3 characters!"],
      maxLenght:[30,"Fisrt name cannot exceed 30 characters!"]
    },
    lastName:{
      type: String,
      required: true,
      minLenght:[3,"Last name must contain at least 3 characters!"],
      maxLenght:[30,"Last name cannot exceed 30 characters!"]
    },
    email:{
        type: String,
        required : true,
        validate:[validator.isEmail,"Provide a valid email"],
    },
    phone:{
        type: String,
      required: true,
      minLenght:[10,"Phone number mmust contain only 10 digits!"],
      maxLenght:[10,"Phone number mmust contain only 10 digits!"],
    },
    time:{
        type: String,
        required: true,

    },
    date:{
        type: String,
        required: true,

    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema );